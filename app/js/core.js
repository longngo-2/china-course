/* Lõi của ứng dụng: tiện ích, lưu tiến độ, đọc tiếng Trung (TTS), thẻ ôn ngắt quãng (SRS). */
(function () {
  "use strict";

  var CC = (window.CC = { lessons: {}, stages: [], pinyin: null });

  CC.addLesson = function (l) { CC.lessons[l.id] = l; };

  /* Trạng thái giao diện tạm thời (không lưu) */
  CC.ui = { exportOpen: false, resetArmed: false };

  /**
   * Địa chỉ trang luyện viết. Bản chạy trong khung xuất bản (CC_HOSTED) chỉ truyền được
   * "#tên-ascii" nên dùng hash; bản thường dùng query.
   */
  CC.writeUrl = function (o) {
    if (window.CC_HOSTED) {
      var h = o.set ? "bo-" + o.set : "chu-" + CC.hanChars(o.chars).map(function (c) { return c.codePointAt(0).toString(16); }).join("-");
      return "luyen-viet.html#" + h;
    }
    return "../tools/luyen-viet/index.html?" + (o.set ? "bo=" + encodeURIComponent(o.set) : "chu=" + encodeURIComponent(o.chars || "")) + "&che-do=to";
  };

  /* ---------- Tiện ích ---------- */
  var ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  CC.esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return ESC[c]; });
  };
  // Escape rồi hỗ trợ **đậm** và `mã`
  CC.fmt = function (s) {
    return CC.esc(s)
      .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>")
      .replace(/`([^`]+)`/g, "<code>$1</code>");
  };

  var HAN;
  try { HAN = new RegExp("[\\p{Script=Han}\\u2E80-\\u2FDF]", "u"); } catch (e) { HAN = /[⺀-⿟㐀-鿿]/; }
  CC.hanChars = function (text) {
    var out = [];
    Array.from(text || "").forEach(function (ch) {
      if (HAN.test(ch) && out.indexOf(ch) === -1) out.push(ch);
    });
    return out;
  };

  CC.shuffle = function (arr, avoid) {
    var a = arr.slice(), tries = 0;
    do {
      for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var t = a[i]; a[i] = a[j]; a[j] = t;
      }
      tries++;
    } while (avoid && a.length > 1 && tries < 10 && a.join("|") === avoid.join("|"));
    return a;
  };

  /** Danh sách id bài học (đã có nội dung) theo thứ tự lộ trình. */
  CC.order = function () {
    var ids = [];
    CC.stages.forEach(function (s) {
      s.units.forEach(function (u) {
        (u.lessons || []).forEach(function (id) { if (CC.lessons[id]) ids.push(id); });
      });
    });
    return ids;
  };

  CC.locate = function (lessonId) {
    for (var i = 0; i < CC.stages.length; i++) {
      var s = CC.stages[i];
      for (var j = 0; j < s.units.length; j++) {
        if ((s.units[j].lessons || []).indexOf(lessonId) !== -1) return { stage: s, unit: s.units[j] };
      }
    }
    return null;
  };

  CC.lessonVocab = function (l) {
    var out = [];
    (l.sections || []).forEach(function (s) { if (s.type === "vocab") out = out.concat(s.items); });
    return out;
  };

  CC.lessonChars = function (l) {
    return CC.hanChars(CC.lessonVocab(l).map(function (v) { return v[0]; }).join(""));
  };

  /* ---------- Thông báo nhỏ ---------- */
  var toastTimer;
  CC.toast = function (msg) {
    var el = document.getElementById("toast");
    if (!el) return;
    el.textContent = msg;
    el.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.hidden = true; }, 4200);
  };

  /* ---------- Lưu tiến độ ---------- */
  var KEY = "china-course:app:v1";
  var state;
  CC.storageOK = true;

  function blank() {
    return {
      v: 1,
      done: {},      // lessonId -> timestamp hoàn thành
      best: {},      // lessonId -> điểm tốt nhất (0..1)
      cards: {},     // chữ -> thẻ ôn
      days: [],      // các ngày đã học (YYYY-MM-DD)
      settings: { pinyin: true, vi: true, rate: 0.85, voice: "", theme: "auto", dir: "zh-vi" }
    };
  }

  function load() {
    var s = blank();
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) {
        var o = JSON.parse(raw);
        ["done", "best", "cards"].forEach(function (k) {
          if (o[k] && typeof o[k] === "object") s[k] = o[k];
        });
        if (Array.isArray(o.days)) s.days = o.days;
        if (o.settings && typeof o.settings === "object") {
          Object.keys(s.settings).forEach(function (k) {
            if (o.settings[k] !== undefined) s.settings[k] = o.settings[k];
          });
        }
      }
    } catch (e) {
      try { localStorage.getItem(KEY); } catch (e2) { CC.storageOK = false; }
    }
    return s;
  }

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); }
    catch (e) { CC.storageOK = false; }
  }

  state = load();
  CC.state = function () { return state; };
  CC.save = save;
  CC.settings = function () { return state.settings; };

  CC.reset = function () {
    state = blank();
    save();
  };

  CC.exportJSON = function () { return JSON.stringify(state, null, 2); };

  CC.importJSON = function (text) {
    var o = JSON.parse(text);
    if (!o || typeof o !== "object" || !o.settings || !o.done) throw new Error("Tệp không đúng định dạng.");
    var s = blank();
    ["done", "best", "cards"].forEach(function (k) { if (o[k] && typeof o[k] === "object") s[k] = o[k]; });
    if (Array.isArray(o.days)) s.days = o.days.filter(function (d) { return typeof d === "string"; });
    Object.keys(s.settings).forEach(function (k) { if (o.settings[k] !== undefined) s.settings[k] = o.settings[k]; });
    state = s;
    save();
  };

  function pad(n) { return n < 10 ? "0" + n : "" + n; }
  function dayStr(d) { return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); }

  CC.touchToday = function () {
    var t = dayStr(new Date());
    if (state.days[state.days.length - 1] !== t) {
      state.days.push(t);
      if (state.days.length > 400) state.days = state.days.slice(-400);
      save();
    }
  };

  CC.streak = function () {
    var set = {};
    state.days.forEach(function (d) { set[d] = true; });
    var d = new Date();
    if (!set[dayStr(d)]) d.setDate(d.getDate() - 1);
    var n = 0;
    while (set[dayStr(d)]) { n++; d.setDate(d.getDate() - 1); }
    return n;
  };

  CC.isDone = function (id) { return !!state.done[id]; };

  CC.completeLesson = function (id, score) {
    var added = 0;
    state.done[id] = Date.now();
    if (score != null) state.best[id] = Math.max(state.best[id] || 0, score);
    added = CC.srs.addFromLesson(CC.lessons[id]);
    CC.touchToday();
    save();
    return added;
  };

  /* ---------- Thẻ ôn ngắt quãng (SRS) ---------- */
  var DAY = 86400000;
  var INTERVALS = [0, 1, 3, 7, 14, 30, 60]; // ngày, theo "hộp" 0..6
  var srs = (CC.srs = {});

  srs.addFromLesson = function (lesson) {
    var n = 0, now = Date.now();
    CC.lessonVocab(lesson).forEach(function (v) {
      if (state.cards[v[0]]) return;
      state.cards[v[0]] = {
        zh: v[0], py: v[1], hv: v[2], pos: v[3], vi: v[4],
        ex: [v[5], v[6], v[7]],
        lesson: lesson.id, box: 0, due: now, reps: 0, lapses: 0
      };
      n++;
    });
    return n;
  };

  srs.all = function () { return Object.keys(state.cards).map(function (k) { return state.cards[k]; }); };
  srs.count = function () { return Object.keys(state.cards).length; };

  srs.due = function (limit) {
    var now = Date.now();
    var list = srs.all().filter(function (c) { return c.due <= now; });
    list.sort(function (a, b) { return a.due - b.due; });
    return limit ? list.slice(0, limit) : list;
  };

  srs.upcoming = function (limit) {
    var now = Date.now();
    var list = srs.all().filter(function (c) { return c.due > now; });
    list.sort(function (a, b) { return a.due - b.due; });
    return list.slice(0, limit || 10);
  };

  srs.dueCount = function () { return srs.due().length; };

  /** grade: 0 Quên · 1 Khó · 2 Nhớ · 3 Dễ — trả về {box, ms} sẽ áp dụng. */
  srs.preview = function (card, grade) {
    var box = card.box, ms;
    if (grade === 0) { box = 0; ms = 10 * 60000; }
    else if (grade === 1) { ms = box === 0 ? 4 * 3600000 : Math.max(1, Math.round(INTERVALS[box] * 0.6)) * DAY; }
    else if (grade === 2) { box = Math.min(box + 1, 6); ms = INTERVALS[box] * DAY; }
    else { box = Math.min(box + 2, 6); ms = INTERVALS[box] * DAY; }
    return { box: box, ms: ms };
  };

  srs.label = function (ms) {
    if (ms < 3600000) return Math.max(1, Math.round(ms / 60000)) + " phút";
    if (ms < DAY) return Math.round(ms / 3600000) + " giờ";
    return Math.round(ms / DAY) + " ngày";
  };

  srs.rate = function (zh, grade) {
    var c = state.cards[zh];
    if (!c) return;
    var p = srs.preview(c, grade);
    c.box = p.box;
    c.due = Date.now() + p.ms;
    c.reps++;
    if (grade === 0) c.lapses++;
    CC.touchToday();
    save();
  };

  /* ---------- Đọc tiếng Trung (Web Speech API) ---------- */
  var tts = (CC.tts = {});
  tts.supported = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
  tts.voices = [];
  var warned = false, seqToken = 0;

  function refreshVoices() {
    try { tts.voices = window.speechSynthesis.getVoices() || []; } catch (e) { tts.voices = []; }
  }
  if (tts.supported) {
    refreshVoices();
    try { window.speechSynthesis.addEventListener("voiceschanged", refreshVoices); }
    catch (e) { window.speechSynthesis.onvoiceschanged = refreshVoices; }
  }

  tts.zhVoices = function () {
    return tts.voices.filter(function (v) { return /^(zh|cmn)/i.test(v.lang); });
  };

  tts.pick = function () {
    var zh = tts.zhVoices(), name = state.settings.voice;
    if (name) {
      var m = zh.filter(function (v) { return v.name === name; })[0];
      if (m) return m;
    }
    var cn = zh.filter(function (v) { return /zh[-_]CN|cmn[-_]Hans/i.test(v.lang); })[0];
    return cn || zh[0] || null;
  };

  function warnNoVoice() {
    if (warned) return;
    warned = true;
    CC.toast("Chưa có giọng đọc tiếng Trung trên thiết bị này. Vào Cài đặt → Giọng đọc để xem cách khắc phục.");
  }

  var hinted = false;
  function hintSilent() {
    if (hinted) return;
    hinted = true;
    CC.toast("Không nghe thấy âm thanh? Vào Cài đặt → Giọng đọc để kiểm tra nguyên nhân.");
  }

  /** Kết quả lần phát gần nhất: queued → started → ended, hoặc error / silent (trình duyệt im lặng). */
  tts.last = null;
  tts.onChange = null;
  function changed() { if (tts.onChange) { try { tts.onChange(); } catch (e) { /* bỏ qua */ } } }

  tts.diagnose = function () {
    var v = tts.pick();
    return { supported: tts.supported, total: tts.voices.length, zh: tts.zhVoices().length, picked: v ? v.name + " (" + v.lang + ")" : "", last: tts.last };
  };

  tts.stop = function () {
    seqToken++;
    if (tts.supported) { try { window.speechSynthesis.cancel(); } catch (e) { /* bỏ qua */ } }
  };

  tts.speak = function (text, opts) {
    if (!tts.supported) { warnNoVoice(); return Promise.resolve(false); }
    return new Promise(function (resolve) {
      var synth = window.speechSynthesis;
      refreshVoices();
      try { synth.cancel(); synth.resume(); } catch (e) { /* bỏ qua */ }
      var u = new window.SpeechSynthesisUtterance(text);
      var v = tts.pick();
      u.lang = "zh-CN";
      if (v) { u.voice = v; u.lang = v.lang; }
      else if (tts.voices.length) warnNoVoice();
      u.rate = (opts && opts.rate) || state.settings.rate || 0.85;
      u.volume = 1;
      var rec = (tts.last = { text: text, state: "queued", at: Date.now(), voice: v ? v.name : "" });
      u.onstart = function () { rec.state = "started"; changed(); };
      u.onend = function () { if (rec.state !== "error") rec.state = "ended"; changed(); resolve(true); };
      u.onerror = function (e) {
        var code = (e && e.error) || "unknown";
        if (code === "canceled" || code === "interrupted") { resolve(false); return; }
        rec.state = "error"; rec.error = code;
        if (code === "not-allowed") hintSilent(); else warnNoVoice();
        changed();
        resolve(false);
      };
      // Một số trình duyệt nhận lệnh nhưng không phát và không báo lỗi gì cả
      setTimeout(function () {
        if (rec.state === "queued") { rec.state = "silent"; hintSilent(); changed(); }
      }, 3000);
      setTimeout(function () {
        try { synth.speak(u); } catch (e) { rec.state = "error"; rec.error = "exception"; changed(); resolve(false); }
      }, 30);
    });
  };

  /** Đọc lần lượt nhiều câu; onStart(i) để làm nổi dòng đang đọc. */
  tts.speakSeq = function (texts, onStart, onEnd) {
    var token = ++seqToken, i = 0;
    function next() {
      if (token !== seqToken || i >= texts.length) { if (onEnd) onEnd(token === seqToken); return; }
      var idx = i++;
      if (onStart) onStart(idx);
      tts.speak(texts[idx]).then(function () {
        if (token !== seqToken) { if (onEnd) onEnd(false); return; }
        setTimeout(next, 350);
      });
    }
    next();
  };

  /* ---------- Áp dụng cài đặt giao diện ---------- */
  CC.applySettings = function () {
    var s = state.settings, root = document.documentElement;
    if (!window.CC_HOSTED) { // trong khung xuất bản, giao diện sáng/tối do trang chứa quyết định
      if (s.theme === "light" || s.theme === "dark") root.setAttribute("data-theme", s.theme);
      else root.removeAttribute("data-theme");
    }
    document.body.setAttribute("data-py", s.pinyin ? "1" : "0");
    document.body.setAttribute("data-vi", s.vi ? "1" : "0");
  };
})();
