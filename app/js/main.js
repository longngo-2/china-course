/* Điều hướng, xử lý sự kiện và khởi động ứng dụng. */
(function () {
  "use strict";

  var app = document.getElementById("app");
  var modal = document.getElementById("modal");

  /* ---------- Router ---------- */
  function parseRoute() {
    var h = decodeURIComponent(location.hash.replace(/^#/, ""));
    if (h.indexOf("bai-") === 0) return { name: "lesson", id: h.slice(4) };
    switch (h) {
      case "on-tap": return { name: "review" };
      case "pinyin": return { name: "pinyin" };
      case "luyen-viet": return { name: "write" };
      case "cai-dat": return { name: "settings" };
      default: return { name: "home" };
    }
  }

  function render(keepScroll) {
    var r = parseRoute(), y = window.scrollY, html;
    try {
      switch (r.name) {
        case "lesson": html = CC.views.lesson(r.id); break;
        case "review": html = CC.views.review(); break;
        case "pinyin": html = CC.views.pinyin(); break;
        case "write": html = CC.views.write(); break;
        case "settings": html = CC.views.settings(); break;
        default: html = CC.views.home();
      }
    } catch (e) {
      if (window.console) console.error(e);
      html = '<section class="page"><h1>Có lỗi xảy ra</h1><p>' + CC.esc(e.message) + '</p><p><a class="btn primary" href="#hoc">Về trang chủ</a></p></section>';
    }
    app.innerHTML = html;
    window.scrollTo(0, keepScroll ? y : 0);
    updateChrome(r);
    afterRender(r);
  }

  function updateChrome(r) {
    document.querySelectorAll("[data-route]").forEach(function (a) {
      var on = a.getAttribute("data-route") === r.name || (r.name === "lesson" && a.getAttribute("data-route") === "home");
      if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    var due = CC.srs.dueCount();
    document.querySelectorAll(".due-badge").forEach(function (b) {
      b.textContent = due > 99 ? "99+" : due;
      b.hidden = !due;
    });
    var titles = { home: "Lộ trình", review: "Ôn từ vựng", pinyin: "Bảng pinyin", write: "Luyện viết", settings: "Cài đặt" };
    var t = r.name === "lesson" && CC.lessons[r.id] ? CC.lessons[r.id].title : titles[r.name];
    document.title = (t ? t + " · " : "") + "China Course";
  }

  function afterRender(r) {
    if (r.name !== "lesson" || !CC.L) return;
    var q = currentQuestion();
    if (q && q.q.t === "listen" && !q.ex.res[q.ex.i] && !q.ex.spoken[q.ex.i]) {
      q.ex.spoken[q.ex.i] = true;
      if (CC.tts.supported) setTimeout(function () { CC.tts.speak(q.q.say); }, 250);
    }
  }

  function currentQuestion() {
    var L = CC.L;
    if (!L || !L.ex || L.ex.done) return null;
    var l = CC.lessons[L.id];
    var steps = CC.views.stepsOf(l), st = steps[L.step];
    if (!st || st.type !== "exercises") return null;
    return { l: l, sec: st.sec, ex: L.ex, q: st.sec.items[L.ex.i] };
  }

  function go(hash) {
    if (location.hash === hash) render(); else location.hash = hash;
  }

  window.addEventListener("hashchange", function () {
    CC.tts.stop();
    closeModal();
    render();
  });

  /* ---------- Modal luyện viết ---------- */
  function openWrite(el) {
    var url = CC.writeUrl(el.dataset.set ? { set: el.dataset.set } : { chars: el.dataset.chars || "" });
    modal.innerHTML = '<div class="modal-back" data-act="close-modal"><div class="modal" role="dialog" aria-modal="true" aria-label="Luyện viết chữ Hán">' +
      '<button type="button" class="modal-close" data-act="close-modal" aria-label="Đóng">×</button>' +
      '<iframe src="' + CC.esc(url) + '" title="Trang luyện viết chữ Hán"></iframe></div></div>';
    modal.hidden = false;
    document.body.classList.add("noscroll");
    var b = modal.querySelector(".modal-close");
    if (b) b.focus();
  }

  function closeModal() {
    if (modal.hidden) return;
    modal.hidden = true;
    modal.innerHTML = "";
    document.body.classList.remove("noscroll");
  }

  /* ---------- Bài học ---------- */
  function setStep(i) {
    var l = CC.lessons[CC.L.id], n = CC.views.stepsOf(l).length;
    CC.L.step = Math.max(0, Math.min(n - 1, i));
    CC.tts.stop();
    render();
  }

  function finishNoExercise() {
    var id = CC.L.id;
    CC.completeLesson(id, null);
    CC.toast("Đã hoàn thành bài và thêm từ vựng vào bộ thẻ ôn.");
    var o = CC.order(), i = o.indexOf(id);
    go(i !== -1 && i < o.length - 1 ? "#bai-" + o[i + 1] : "#hoc");
  }

  function answer(q, ok, pick) {
    q.ex.res[q.ex.i] = { ok: ok, pick: pick };
    render(true);
  }

  function exNext() {
    var q = currentQuestion();
    if (!q) return;
    var ex = q.ex;
    if (ex.i < ex.n - 1) { ex.i++; CC.tts.stop(); render(); return; }
    ex.done = true;
    var s = CC.views.scoreOf(ex);
    if (s.pct >= 0.6 && !ex.saved) {
      ex.added = CC.completeLesson(CC.L.id, s.pct);
      ex.saved = true;
    }
    render();
  }

  /* ---------- Ôn thẻ ---------- */
  function startReview(mode) {
    var cards = mode === "ahead" ? CC.srs.upcoming(10) : CC.srs.due(20);
    if (!cards.length) { CC.toast("Chưa có thẻ nào để ôn."); return; }
    var ids = cards.map(function (c) { return c.zh; });
    CC.R = { queue: ids, idx: 0, total: ids.length, unique: ids.length, flipped: false, stats: [0, 0, 0, 0], finished: false };
    render();
  }

  function flipCard() {
    var R = CC.R;
    if (!R || R.flipped) return;
    R.flipped = true;
    render(true);
    if (CC.tts.supported) {
      var c = CC.state().cards[R.queue[R.idx]];
      if (c) CC.tts.speak(c.zh);
    }
  }

  function rateCard(g) {
    var R = CC.R;
    if (!R || !R.flipped) return;
    var zh = R.queue[R.idx];
    CC.srs.rate(zh, g);
    R.stats[g]++;
    if (g === 0) { R.queue.push(zh); R.total++; }
    R.idx++;
    R.flipped = false;
    if (R.idx >= R.queue.length) R.finished = true;
    CC.tts.stop();
    render();
  }

  /* ---------- Cài đặt / dữ liệu ---------- */
  function toggleSetting(k) {
    var s = CC.settings();
    s[k] = !s[k];
    CC.save();
    CC.applySettings();
    render(true);
  }

  function copyText(text) {
    var done = function () { CC.toast("Đã sao chép vào bộ nhớ tạm."); };
    var fallback = function () {
      var ta = document.getElementById("export-text");
      if (ta) { ta.focus(); ta.select(); }
      CC.toast("Hãy nhấn Ctrl/⌘ + C để sao chép đoạn đã chọn.");
    };
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, fallback);
      else fallback();
    } catch (e) { fallback(); }
  }

  function importText(text) {
    try {
      CC.importJSON(text);
      CC.L = null; CC.R = null; CC.ui.exportOpen = false; CC.applySettings();
      CC.toast("Đã nhập tiến độ.");
      render();
    } catch (err) { CC.toast("Không nhập được: " + err.message); }
  }

  /* ---------- Sự kiện click ---------- */
  function flash(el) {
    el.classList.add("playing");
    setTimeout(function () { el.classList.remove("playing"); }, 900);
  }

  document.addEventListener("click", function (e) {
    var el = e.target.closest("[data-act]");
    if (!el) return;
    var act = el.dataset.act, d = el.dataset;
    var q;

    switch (act) {
      case "say": flash(el); CC.tts.speak(d.t); break;
      case "tts-rescan": CC.tts.voices = (window.speechSynthesis && window.speechSynthesis.getVoices()) || []; CC.toast("Đã quét lại: " + CC.tts.voices.length + " giọng, " + CC.tts.zhVoices().length + " giọng tiếng Trung."); render(true); break;
      case "say-slow": flash(el); CC.tts.speak(d.t, { rate: 0.55 }); break;
      case "tile": {
        flash(el);
        CC.tts.speak(d.t);
        var det = el.closest(".chart").querySelector(".detail");
        det.innerHTML = "<b>" + CC.esc(d.sym) + "</b> — ví dụ: <span lang=\"zh\">" + CC.esc(d.t) + "</span> " + CC.esc(d.py) + (d.hint ? ". " + CC.fmt(d.hint) : "");
        break;
      }
      case "toggle": toggleSetting(d.k); break;
      case "reveal": if (document.body.getAttribute("data-vi") === "0") el.classList.toggle("shown"); break;
      case "goto": setStep(parseInt(d.i, 10)); break;
      case "step": setStep(CC.L.step + parseInt(d.d, 10)); break;
      case "finish-nolesson": finishNoExercise(); break;

      case "play-dlg": {
        var l = CC.lessons[CC.L.id], sec = l.sections.filter(function (s) { return s.type === "dialogue"; })[0];
        var g = sec.groups[parseInt(d.g, 10)];
        var rows = el.closest(".dlg").querySelectorAll(".line");
        CC.tts.speakSeq(g.lines.map(function (ln) { return ln[1]; }), function (i) {
          rows.forEach(function (r, k) { r.classList.toggle("speaking", k === i); });
        }, function () { rows.forEach(function (r) { r.classList.remove("speaking"); }); });
        break;
      }
      case "play-vocab": {
        var lv = CC.lessons[CC.L.id], items = document.querySelectorAll(".vitem");
        CC.tts.speakSeq(CC.lessonVocab(lv).map(function (v) { return v[0]; }), function (i) {
          items.forEach(function (r, k) { r.classList.toggle("speaking", k === i); });
          if (items[i] && items[i].scrollIntoView) items[i].scrollIntoView({ block: "center", behavior: "smooth" });
        }, function () { items.forEach(function (r) { r.classList.remove("speaking"); }); });
        break;
      }
      case "write": openWrite(el); break;
      case "close-modal": if (e.target === el) closeModal(); break;

      /* Bài tập */
      case "pick":
        q = currentQuestion();
        if (q && !q.ex.res[q.ex.i]) {
          var k = parseInt(d.k, 10);
          answer(q, q.ex.perm[q.ex.i][k] === q.q.a, k);
        }
        break;
      case "skip":
        q = currentQuestion();
        if (q && !q.ex.res[q.ex.i]) { q.ex.res[q.ex.i] = { ok: false, skip: true }; render(true); }
        break;
      case "ord-add":
      case "ord-back":
        q = currentQuestion();
        if (q && !q.ex.res[q.ex.i]) {
          var o = q.ex.ord[q.ex.i], w = parseInt(d.w, 10);
          if (act === "ord-add") { o.bank.splice(o.bank.indexOf(w), 1); o.ans.push(w); }
          else { o.ans.splice(o.ans.indexOf(w), 1); o.bank.push(w); }
          render(true);
        }
        break;
      case "ord-clear":
        q = currentQuestion();
        if (q && !q.ex.res[q.ex.i]) {
          var oc = q.ex.ord[q.ex.i];
          oc.bank = oc.bank.concat(oc.ans);
          oc.ans = [];
          render(true);
        }
        break;
      case "ord-check":
        q = currentQuestion();
        if (q && !q.ex.res[q.ex.i]) {
          var oa = q.ex.ord[q.ex.i];
          var got = oa.ans.map(function (i) { return q.q.words[i]; }).join("");
          answer(q, got === q.q.words.join(""), null);
        }
        break;
      case "ex-next": exNext(); break;
      case "ex-retry": CC.L.ex = null; render(); break;
      case "ex-force": {
        var sc = CC.views.scoreOf(CC.L.ex);
        CC.completeLesson(CC.L.id, sc.pct);
        CC.toast("Đã đánh dấu hoàn thành. Nhớ quay lại làm lại bài tập nhé!");
        go("#hoc");
        break;
      }

      /* Ôn thẻ */
      case "dir": CC.settings().dir = d.v; CC.save(); render(true); break;
      case "rv-start": startReview(d.m); break;
      case "flip": flipCard(); break;
      case "rate": rateCard(parseInt(d.g, 10)); break;
      case "rv-end": case "rv-reset": CC.R = null; CC.tts.stop(); render(); break;

      /* Dữ liệu */
      case "export": CC.ui.exportOpen = !CC.ui.exportOpen; render(true); break;
      case "copy-export": copyText(CC.exportJSON()); break;
      case "import-text": {
        var box = document.getElementById("import-text");
        if (box && box.value.trim()) importText(box.value); else CC.toast("Hãy dán nội dung tiến độ vào ô trước.");
        break;
      }
      case "reset":
        if (!CC.ui.resetArmed) {
          CC.ui.resetArmed = true;
          clearTimeout(CC.ui.resetTimer);
          CC.ui.resetTimer = setTimeout(function () { CC.ui.resetArmed = false; if (parseRoute().name === "settings") render(true); }, 5000);
          render(true);
        } else {
          CC.ui.resetArmed = false;
          CC.reset(); CC.L = null; CC.R = null; CC.applySettings();
          CC.toast("Đã xóa tiến độ.");
          go("#hoc");
        }
        break;
    }
  });

  document.addEventListener("input", function (e) {
    var el = e.target;
    if (el.dataset && el.dataset.act === "rate-set") {
      CC.settings().rate = parseFloat(el.value);
      var v = document.getElementById("rate-val");
      if (v) v.textContent = CC.settings().rate.toFixed(2) + "×";
      CC.save();
    }
  });

  document.addEventListener("change", function (e) {
    var el = e.target, act = el.dataset && el.dataset.act;
    if (act === "voice-set") { CC.settings().voice = el.value; CC.save(); }
    else if (act === "theme-set") { CC.settings().theme = el.value; CC.save(); CC.applySettings(); }
    else if (act === "import" && el.files && el.files[0]) {
      var fr = new FileReader();
      fr.onload = function () { importText(String(fr.result)); };
      fr.readAsText(el.files[0]);
      el.value = "";
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { closeModal(); return; }
    var t = e.target;
    if (t && /^(INPUT|SELECT|TEXTAREA)$/.test(t.tagName)) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    var r = parseRoute();
    if (r.name === "review" && CC.R && CC.R.queue && !CC.R.finished) {
      if (e.key === " " || e.key === "Enter") {
        if (t && t.tagName === "BUTTON" && t.dataset.act !== "flip") return;
        e.preventDefault();
        if (!CC.R.flipped) flipCard();
      } else if (CC.R.flipped && /^[1-4]$/.test(e.key)) {
        rateCard(parseInt(e.key, 10) - 1);
      }
    }
  });

  /* ---------- Khởi động ---------- */
  CC.tts.onChange = function () { if (parseRoute().name === "settings") render(true); };
  if (window.speechSynthesis && window.speechSynthesis.addEventListener) {
    window.speechSynthesis.addEventListener("voiceschanged", function () { if (parseRoute().name === "settings") render(true); });
  }
  CC.applySettings();
  render();
})();
