/* Các màn hình của ứng dụng. Mỗi view trả về chuỗi HTML; sự kiện xử lý ở main.js. */
(function () {
  "use strict";

  var esc = CC.esc, fmt = CC.fmt;
  var V = (CC.views = {});

  /* Trạng thái tạm của phiên hiện tại */
  CC.L = null; // bài học đang mở
  CC.R = null; // phiên ôn thẻ

  /* ---------- Biểu tượng ---------- */
  var ICONS = {
    sound: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/><path d="M16.5 8.5a5 5 0 010 7M19 6a8.5 8.5 0 010 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    pen: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M4 20l1-4L16.5 4.5a2 2 0 012.8 0l.2.2a2 2 0 010 2.8L8 19l-4 1z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
    check: '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    play: '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M7 4.5v15l12-7.5z" fill="currentColor"/></svg>'
  };
  V.icons = ICONS;

  function sayBtn(text, cls) {
    return '<button type="button" class="say ' + (cls || "") + '" data-act="say" data-t="' + esc(text) + '" aria-label="Nghe phát âm">' + ICONS.sound + "</button>";
  }

  function writeBtn(chars, label, set) {
    if (window.CC_HOSTED) { // khung xuất bản không cho nhúng trang khác: mở tab mới bằng liên kết thật
      return '<a class="btn" href="' + esc(CC.writeUrl(set ? { set: set } : { chars: chars })) + '" target="_blank" rel="noopener">' + ICONS.pen + " " + esc(label || "Luyện viết") + "</a>";
    }
    var attr = set ? 'data-set="' + esc(set) + '"' : 'data-chars="' + esc(chars) + '"';
    return '<button type="button" class="btn" data-act="write" ' + attr + ">" + ICONS.pen + " " + esc(label || "Luyện viết") + "</button>";
  }

  /* ---------- Khối nội dung chung ---------- */
  function table(t) {
    var h = '<div class="table-wrap"><table>';
    if (t.head) h += "<thead><tr>" + t.head.map(function (c) { return "<th>" + fmt(c) + "</th>"; }).join("") + "</tr></thead>";
    h += "<tbody>" + t.rows.map(function (r) {
      return "<tr>" + r.map(function (c) { return "<td>" + fmt(c) + "</td>"; }).join("") + "</tr>";
    }).join("") + "</tbody></table></div>";
    return h;
  }

  function toneSvg(n) {
    var paths = {
      1: "M6 8 L54 8",
      2: "M6 30 L54 8",
      3: "M6 18 L24 36 L54 12",
      4: "M6 6 L54 36",
      0: "M22 24 L38 24"
    };
    return '<svg viewBox="0 0 60 44" width="60" height="44" class="tone-svg" aria-hidden="true"><path d="' + paths[n] +
      '" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"' + (n === 0 ? ' stroke-dasharray="2 7"' : "") + "/></svg>";
  }

  function tonesTable() {
    return '<div class="tone-grid">' + CC.pinyin.tones.map(function (t) {
      return '<div class="tone-card">' + toneSvg(t.n) + "<div><b>" + esc(t.name) + '</b> <span class="mark">' + esc(t.mark) + "</span><p>" +
        fmt(t.desc) + (t.vn ? ' <span class="muted">(' + esc(t.vn) + ")</span>" : "") + "</p></div></div>";
    }).join("") + "</div>";
  }

  function body(items) {
    return items.map(function (b) {
      if (typeof b === "string") return "<p>" + fmt(b) + "</p>";
      if (b.ul) return "<ul>" + b.ul.map(function (x) { return "<li>" + fmt(x) + "</li>"; }).join("") + "</ul>";
      if (b.table) return table(b.table);
      if (b.tip) return '<div class="callout tip"><b>💡 Mẹo</b><p>' + fmt(b.tip) + "</p></div>";
      if (b.warn) return '<div class="callout warn"><b>⚠️ Lưu ý</b><p>' + fmt(b.warn) + "</p></div>";
      if (b.tones) return tonesTable();
      if (b.write) {
        return '<p class="actions-row">' + (b.write.set
          ? writeBtn("", b.write.label, b.write.set)
          : writeBtn(b.write.chars, b.write.label)) + "</p>";
      }
      return "";
    }).join("");
  }

  /* ---------- Bảng pinyin ---------- */
  function chart(groups, kind) {
    var asp = CC.pinyin.aspirated;
    var h = '<div class="chart" data-kind="' + kind + '">';
    groups.forEach(function (g) {
      h += '<h4 class="chart-group">' + esc(g.name) + '</h4><div class="tiles">';
      g.items.forEach(function (it) {
        var isAsp = kind === "initials" && asp.indexOf(it[0]) !== -1;
        h += '<button type="button" class="tile' + (isAsp ? " asp" : "") + '" data-act="tile" data-t="' + esc(it[1]) +
          '" data-sym="' + esc(it[0]) + '" data-py="' + esc(it[2]) + '" data-hint="' + esc(it[3]) + '" aria-label="' + esc(it[0] + ", ví dụ " + it[1] + " " + it[2]) + '">' +
          "<b>" + esc(it[0]) + '</b><span class="ex"><span lang="zh">' + esc(it[1]) + "</span> " + esc(it[2]) + "</span></button>";
      });
      h += "</div>";
    });
    h += '<div class="detail" aria-live="polite">Nhấn vào một ô để nghe phát âm.</div></div>';
    return h;
  }

  function initialsHtml() {
    return (CC.pinyin.initials ? chart(CC.pinyin.initials, "initials") : "") +
      '<p class="legend-note"><span class="tile-dot"></span> Ô có chấm cam = âm <b>bật hơi</b> (p, t, k, q, ch, c). Ghi chú “gần giống” chỉ mang tính tham khảo — hãy nghe và nhại theo.</p>';
  }

  function finalsHtml() { return chart(CC.pinyin.finals, "finals"); }

  function toneSetsHtml() {
    return CC.pinyin.toneSets.map(function (s) {
      var h = '<div class="tone-set"><div class="tone-row">';
      s.items.forEach(function (it) {
        h += '<button type="button" class="tone-btn" data-act="say" data-t="' + esc(it[0]) + '"><span class="py">' + esc(it[1]) +
          '</span><span class="zh" lang="zh">' + esc(it[0]) + '</span><span class="vi">' + esc(it[2]) + "</span></button>";
      });
      if (s.neutral) {
        h += '<button type="button" class="tone-btn neutral" data-act="say" data-t="' + esc(s.neutral[0]) + '"><span class="py">' + esc(s.neutral[1]) +
          '</span><span class="zh" lang="zh">' + esc(s.neutral[0]) + '</span><span class="vi">' + esc(s.neutral[2]) + "</span></button>";
      }
      return h + "</div></div>";
    }).join("");
  }

  /* ---------- Điều hướng bài học ---------- */
  var TYPE_LABEL = {
    dialogue: "Hội thoại", vocab: "Từ vựng", grammar: "Ngữ pháp", exercises: "Luyện tập",
    "pinyin-initials": "Thanh mẫu", "pinyin-finals": "Vận mẫu", tones: "Thanh điệu", text: "Bài đọc"
  };

  function stepsOf(l) {
    var a = [{ type: "intro", title: "Mở đầu" }];
    l.sections.forEach(function (s) { a.push({ type: s.type, title: s.title || TYPE_LABEL[s.type], sec: s }); });
    return a;
  }
  V.stepsOf = stepsOf;

  function nextLessonId(id) {
    var o = CC.order(), i = o.indexOf(id);
    return i !== -1 && i < o.length - 1 ? o[i + 1] : null;
  }

  function countOf(l, type, key) {
    var n = 0;
    l.sections.forEach(function (s) { if (s.type === type) n += (s[key] || []).length; });
    return n;
  }

  /* ---------- Trang chủ ---------- */
  V.home = function () {
    var order = CC.order(), st = CC.state();
    var doneN = order.filter(CC.isDone).length;
    var next = order.filter(function (id) { return !CC.isDone(id); })[0];
    var due = CC.srs.dueCount();
    var h = "";

    // Hero
    h += '<section class="hero">';
    if (!doneN && !CC.L) {
      h += "<p class=\"eyebrow\">Chào mừng!</p><h1>Bắt đầu học tiếng Trung</h1>" +
        "<p>Lộ trình từ con số 0, bám theo chuẩn HSK 3.0, viết cho người Việt. Mỗi bài khoảng 30 phút: hội thoại → từ vựng → ngữ pháp → luyện tập.</p>" +
        '<div class="hero-actions"><a class="btn primary big" href="#bai-' + order[0] + '">Bắt đầu: ' + esc(CC.lessons[order[0]].title) + '</a>' +
        '<a class="btn big" href="#bai-h1-1-1">Tôi đã biết pinyin → HSK 1</a></div>';
    } else if (next) {
      var nl = CC.lessons[next], loc = CC.locate(next);
      h += '<p class="eyebrow">Tiếp tục học</p><h1>' + esc(nl.title) + "</h1>" +
        "<p class=\"muted\">" + esc(loc ? loc.stage.title + " · " + loc.unit.title : "") + " · khoảng " + nl.minutes + " phút</p>" +
        '<div class="hero-actions"><a class="btn primary big" href="#bai-' + next + '">Học tiếp</a></div>';
    } else {
      h += '<p class="eyebrow">Tuyệt vời!</p><h1>Bạn đã học hết nội dung hiện có 🎉</h1>' +
        "<p>Các bài mới sẽ được bổ sung theo lộ trình. Trong lúc chờ, hãy ôn từ vựng và luyện viết.</p>" +
        '<div class="hero-actions"><a class="btn primary big" href="#on-tap">Ôn từ vựng</a><a class="btn big" href="#luyen-viet">Luyện viết</a></div>';
    }
    h += "</section>";

    // Nhắc ôn
    if (due > 0) {
      h += '<a class="due-card" href="#on-tap"><span class="due-n">' + due + '</span><span><b>Thẻ cần ôn hôm nay</b><br><small>Ôn đều mỗi ngày để nhớ lâu — chỉ mất vài phút.</small></span><span class="go">Ôn ngay →</span></a>';
    }

    // Thống kê
    h += '<section class="stats" aria-label="Thống kê">' +
      stat("🔥", CC.streak(), "ngày liên tiếp") +
      stat("✅", doneN + "/" + order.length, "bài đã học") +
      stat("📚", CC.srs.count(), "từ trong bộ thẻ") +
      "</section>";

    if (!CC.storageOK) {
      h += '<div class="callout warn"><b>⚠️ Không lưu được tiến độ</b><p>Trình duyệt đang chặn lưu dữ liệu (chế độ riêng tư?). Tiến độ sẽ mất khi đóng trang. Bạn có thể xuất/nhập tiến độ trong phần Cài đặt.</p></div>';
    }

    // Lộ trình
    h += '<section class="roadmap"><h2>Lộ trình</h2>';
    CC.stages.forEach(function (s) {
      var ids = [];
      s.units.forEach(function (u) { ids = ids.concat((u.lessons || []).filter(function (id) { return CC.lessons[id]; })); });
      var d = ids.filter(CC.isDone).length;
      var open = ids.length && (ids.indexOf(next) !== -1 || (!next && s === CC.stages[0]));
      h += '<details class="stage' + (ids.length ? "" : " soon") + '"' + (open ? " open" : "") + ">" +
        '<summary><div class="st-head"><span class="st-title">' + esc(s.title) + '</span><span class="st-sub">' + esc(s.sub) + "</span></div>" +
        '<span class="st-meta">' + (ids.length ? '<span class="pill' + (d === ids.length ? " ok" : "") + '">' + d + "/" + ids.length + " bài</span>" : '<span class="pill">Sắp có</span>') +
        '<span class="st-time">' + esc(s.time) + "</span></span></summary><div class=\"units\">";
      s.units.forEach(function (u) {
        if (u.soon || !u.lessons.length) {
          if (ids.length) h += '<div class="unit soon"><span class="u-title">' + esc(u.title) + '</span><span class="pill">Sắp có</span></div>';
          return;
        }
        h += '<div class="unit"><div class="u-title">' + esc(u.title) + "</div>";
        u.lessons.forEach(function (id) {
          var l = CC.lessons[id];
          if (!l) return;
          var done = CC.isDone(id), best = st.best[id];
          h += '<a class="lrow' + (done ? " done" : "") + (id === next ? " next" : "") + '" href="#bai-' + id + '">' +
            '<span class="ck">' + (done ? ICONS.check : "") + "</span>" +
            '<span class="lt">' + esc(l.title) + "<small>" + CC.lessonVocab(l).length + " từ · " + l.minutes + " phút" +
            (best != null ? " · điểm " + Math.round(best * 100) + "%" : "") + "</small></span>" +
            '<span class="go">' + (id === next ? "Học tiếp" : done ? "Học lại" : "Mở") + " →</span></a>";
        });
        h += "</div>";
      });
      h += "</div></details>";
    });
    h += "</section>";

    // Công cụ
    h += '<section class="tools"><h2>Công cụ luyện tập</h2><div class="tool-grid">' +
      '<a class="tool" href="#pinyin"><b>Bảng pinyin</b><span>Nghe từng thanh mẫu, vận mẫu và thanh điệu</span></a>' +
      '<a class="tool" href="#luyen-viet"><b>Luyện viết chữ Hán</b><span>Vẽ từng nét bằng chuột hoặc ngón tay</span></a>' +
      '<a class="tool" href="#on-tap"><b>Ôn từ vựng</b><span>Thẻ ghi nhớ ngắt quãng, nhớ lâu hơn</span></a>' +
      "</div></section>";
    return h;
  };

  function stat(icon, value, label) {
    return '<div class="stat"><span class="stat-i" aria-hidden="true">' + icon + '</span><b>' + esc(value) + "</b><span>" + esc(label) + "</span></div>";
  }

  /* ---------- Bài học ---------- */
  V.lesson = function (id) {
    var l = CC.lessons[id];
    if (!l) return V.notFound();
    if (!CC.L || CC.L.id !== id) CC.L = { id: id, step: 0, ex: null };
    var L = CC.L, steps = stepsOf(l), st = steps[L.step], loc = CC.locate(id);
    var last = L.step === steps.length - 1;

    var h = '<article class="lesson">' +
      '<nav class="crumb" aria-label="Vị trí"><a href="#hoc">Lộ trình</a> › ' + esc(loc ? loc.stage.title : "") + (loc ? " › " + esc(loc.unit.title) : "") + "</nav>" +
      "<h1>" + esc(l.title) + "</h1>";

    h += '<ol class="steps" aria-label="Các bước">' + steps.map(function (s, i) {
      return '<li><button type="button" class="step' + (i === L.step ? " cur" : "") + (i < L.step ? " past" : "") + '" data-act="goto" data-i="' + i + '" title="' + esc(s.title) + '"' + (i === L.step ? ' aria-current="step"' : "") + ">" + (i + 1) + "</button></li>";
    }).join("") + "</ol>" +
      '<div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="' + (steps.length - 1) + '" aria-valuenow="' + L.step + '"><i style="width:' + Math.round(L.step / (steps.length - 1) * 100) + '%"></i></div>';

    h += '<section class="step-body"><h2 class="step-title">' + esc(st.title) + "</h2>" + stepBody(l, st) + "</section>";

    // Điều hướng
    h += '<div class="step-nav">';
    h += '<button type="button" class="btn" data-act="step" data-d="-1"' + (L.step === 0 ? " disabled" : "") + ">← Trước</button>";
    if (st.type === "exercises") h += "<span></span>";
    else if (last) h += '<button type="button" class="btn primary" data-act="finish-nolesson">Hoàn thành bài ✓</button>';
    else h += '<button type="button" class="btn primary" data-act="step" data-d="1">Tiếp: ' + esc(steps[L.step + 1].title) + " →</button>";
    h += "</div></article>";
    return h;
  };

  function stepBody(l, st) {
    switch (st.type) {
      case "intro": return introHtml(l);
      case "text": return body(st.sec.body);
      case "dialogue": return dialogueHtml(st.sec);
      case "vocab": return vocabHtml(l, st.sec);
      case "grammar": return grammarHtml(st.sec);
      case "pinyin-initials": return initialsHtml();
      case "pinyin-finals": return finalsHtml();
      case "tones": return toneSetsHtml() + '<p class="muted">Nhấn từng ô để nghe, và nhại theo. Chú ý đường nét cao độ của từng thanh.</p>';
      case "exercises": return exercisesHtml(l, st.sec);
    }
    return "";
  }

  function introHtml(l) {
    var v = CC.lessonVocab(l).length, g = countOf(l, "grammar", "points"), q = countOf(l, "exercises", "items");
    var h = "<p><b>Sau bài này bạn sẽ có thể:</b></p><ul class=\"checklist\">" +
      l.objectives.map(function (o) { return "<li>" + fmt(o) + "</li>"; }).join("") + "</ul>" +
      '<div class="chips-row">' +
      '<span class="pill">⏱ ~' + l.minutes + " phút</span>" +
      (v ? '<span class="pill">📚 ' + v + " từ vựng</span>" : "") +
      (g ? '<span class="pill">🧩 ' + g + " điểm ngữ pháp</span>" : "") +
      (q ? '<span class="pill">✍️ ' + q + " câu luyện tập</span>" : "") + "</div>";
    h += '<div class="callout tip"><b>💡 Trước khi bắt đầu</b><p>Bật loa để nghe phát âm (nút <span class="inline-ic">' + ICONS.sound + "</span>). " +
      (CC.tts.supported ? "" : "<b>Trình duyệt này không hỗ trợ đọc tiếng Trung</b> — hãy dùng Chrome, Edge hoặc Safari để nghe. ") +
      "Đọc to theo mỗi câu — nhại giọng là cách nhanh nhất để có thanh điệu chuẩn.</p></div>";
    return h;
  }

  function dialogueHtml(sec) {
    var st = CC.settings();
    var h = '<div class="chips-row" role="group" aria-label="Hiển thị">' +
      '<button type="button" class="chip" data-act="toggle" data-k="pinyin" aria-pressed="' + st.pinyin + '">Pinyin</button>' +
      '<button type="button" class="chip" data-act="toggle" data-k="vi" aria-pressed="' + st.vi + '">Bản dịch</button></div>';
    sec.groups.forEach(function (g, gi) {
      h += '<section class="dlg" data-g="' + gi + '"><header><h3>' + esc(g.title) + '</h3><button type="button" class="btn small" data-act="play-dlg" data-g="' + gi + '">' + ICONS.play + " Nghe cả đoạn</button></header><ol>";
      g.lines.forEach(function (ln, i) {
        h += '<li class="line" data-i="' + i + '"><span class="sp">' + esc(ln[0]) + '</span><div class="txt">' +
          '<div class="zh" lang="zh">' + esc(ln[1]) + "</div>" +
          '<div class="py">' + esc(ln[2]) + "</div>" +
          '<div class="vi" data-act="reveal">' + esc(ln[3]) + "</div></div>" + sayBtn(ln[1]) + "</li>";
      });
      h += "</ol></section>";
    });
    if (sec.note) h += '<div class="callout tip"><b>💡 Ghi nhớ</b><p>' + fmt(sec.note) + "</p></div>";
    return h;
  }

  function vocabHtml(l, sec) {
    var chars = CC.hanChars(sec.items.map(function (v) { return v[0]; }).join(""));
    var h = '<p class="actions-row"><button type="button" class="btn" data-act="play-vocab">' + ICONS.play + " Nghe tất cả</button>" +
      writeBtn(chars.join(""), "Luyện viết " + chars.length + " chữ trong bài") + "</p>" +
      '<ul class="vlist">';
    sec.items.forEach(function (v) {
      h += '<li class="vitem"><div class="v-main"><div class="v-zh" lang="zh">' + esc(v[0]) + '</div><div class="v-info"><div class="v-line"><span class="v-py">' + esc(v[1]) + "</span>" +
        (v[2] && v[2] !== "—" ? '<span class="hv" title="Âm Hán Việt">' + esc(v[2]) + "</span>" : "") +
        '<span class="pos">' + esc(v[3]) + '</span></div><div class="v-vi">' + esc(v[4]) + "</div></div>" + sayBtn(v[0]) + "</div>" +
        '<button type="button" class="v-ex" data-act="say" data-t="' + esc(v[5]) + '"><span class="zh" lang="zh">' + esc(v[5]) + '</span><span class="py">' + esc(v[6]) + '</span><span class="vi">' + esc(v[7]) + "</span></button></li>";
    });
    return h + "</ul>" + '<p class="muted">Khi hoàn thành bài, các từ này tự động được thêm vào bộ thẻ ôn.</p>';
  }

  function grammarHtml(sec) {
    return sec.points.map(function (p, i) {
      var h = '<article class="gcard"><h3><span class="gn">' + (i + 1) + "</span> " + esc(p.title) + "</h3>" +
        '<div class="structure">' + fmt(p.structure) + "</div>" +
        p.explain.map(function (e) { return "<p>" + fmt(e) + "</p>"; }).join("");
      h += '<h4>Ví dụ</h4><ul class="examples">' + p.examples.map(function (e) {
        return '<li><button type="button" class="ex-line" data-act="say" data-t="' + esc(e[0]) + '"><span class="zh" lang="zh">' + esc(e[0]) + '</span><span class="py">' + esc(e[1]) + '</span><span class="vi">' + esc(e[2]) + "</span></button></li>";
      }).join("") + "</ul>";
      if (p.mistakes && p.mistakes.length) {
        h += "<h4>Lỗi hay mắc</h4><ul class=\"mistakes\">" + p.mistakes.map(function (m) {
          return '<li><div><span class="bad">✗ <span lang="zh">' + esc(m[0]) + '</span></span> → <span class="good">✓ <span lang="zh">' + esc(m[1]) + "</span></span></div><small>" + fmt(m[2]) + "</small></li>";
        }).join("") + "</ul>";
      }
      return h + "</article>";
    }).join("");
  }

  /* ---------- Bài tập ---------- */
  function newEx(items) {
    return { n: items.length, i: 0, res: [], perm: {}, ord: {}, locked: false, spoken: {}, done: false, saved: false, added: 0 };
  }

  function exercisesHtml(l, sec) {
    var L = CC.L;
    if (!L.ex) L.ex = newEx(sec.items);
    var ex = L.ex;
    if (ex.done) return exSummary(l, sec);
    var q = sec.items[ex.i];
    var h = '<div class="ex-head"><span>Câu ' + (ex.i + 1) + "/" + ex.n + '</span><div class="bar slim"><i style="width:' + Math.round(ex.i / ex.n * 100) + '%"></i></div></div>';
    h += '<div class="qcard"><p class="q">' + fmt(q.q) + "</p>";
    var r = ex.res[ex.i];

    if (q.t === "choice" || q.t === "listen") {
      if (!ex.perm[ex.i]) ex.perm[ex.i] = CC.shuffle(q.opts.map(function (_, i) { return i; }));
      var perm = ex.perm[ex.i];
      if (q.t === "listen") {
        h += '<div class="listen-box"><button type="button" class="btn big" data-act="say" data-t="' + esc(q.say) + '">' + ICONS.sound + " Nghe</button>" +
          '<button type="button" class="btn small" data-act="say-slow" data-t="' + esc(q.say) + '">🐢 Nghe chậm</button></div>';
      }
      h += '<div class="opts" role="group">' + perm.map(function (oi, k) {
        var cls = "opt";
        if (r) {
          if (oi === q.a) cls += " correct";
          else if (r.pick === k) cls += " wrong";
        }
        return '<button type="button" class="' + cls + '" data-act="pick" data-k="' + k + '"' + (r ? " disabled" : "") + ">" + fmt(q.opts[oi]) + "</button>";
      }).join("") + "</div>";
      if (q.t === "listen" && !r) h += '<button type="button" class="linkish" data-act="skip">Không nghe được? Bỏ qua câu này</button>';
    } else if (q.t === "order") {
      if (!ex.ord[ex.i]) {
        var idx = q.words.map(function (_, i) { return i; });
        ex.ord[ex.i] = { bank: CC.shuffle(idx, idx), ans: [] };
      }
      var o = ex.ord[ex.i];
      var okCls = r ? (r.ok ? " correct" : " wrong") : "";
      h += '<div class="ord-ans' + okCls + '" aria-label="Câu của bạn">' + (o.ans.length ? o.ans.map(function (wi) {
        return '<button type="button" class="tok" data-act="ord-back" data-w="' + wi + '"' + (r ? " disabled" : "") + ' lang="zh">' + esc(q.words[wi]) + "</button>";
      }).join("") : '<span class="placeholder">Nhấn các từ bên dưới theo đúng thứ tự</span>') + "</div>" +
        '<div class="ord-bank" aria-label="Các từ">' + o.bank.map(function (wi) {
          return '<button type="button" class="tok" data-act="ord-add" data-w="' + wi + '"' + (r ? " disabled" : "") + ' lang="zh">' + esc(q.words[wi]) + "</button>";
        }).join("") + "</div>";
      if (!r) {
        h += '<div class="ord-actions"><button type="button" class="btn" data-act="ord-clear"' + (o.ans.length ? "" : " disabled") + '>Xóa</button>' +
          '<button type="button" class="btn primary" data-act="ord-check"' + (o.ans.length === q.words.length ? "" : " disabled") + ">Kiểm tra</button></div>";
      }
    }

    if (r) {
      var correct = q.t === "order" ? q.words.join("") : null;
      h += '<div class="feedback ' + (r.skip ? "skip" : r.ok ? "ok" : "no") + '" role="status"><b>' +
        (r.skip ? "Đã bỏ qua." : r.ok ? "✓ Chính xác!" : "✗ Chưa đúng.") + "</b>" +
        (correct ? ' Đáp án: <span class="zh" lang="zh">' + esc(correct) + "</span> " + sayBtn(correct, "inline") : "") +
        (q.why ? "<p>" + fmt(q.why) + "</p>" : "") + "</div>" +
        '<div class="step-nav"><span></span><button type="button" class="btn primary" data-act="ex-next">' + (ex.i === ex.n - 1 ? "Xem kết quả" : "Câu tiếp →") + "</button></div>";
    }
    return h + "</div>";
  }

  function scoreOf(ex) {
    var answered = ex.res.filter(function (r) { return r && !r.skip; });
    var correct = answered.filter(function (r) { return r.ok; }).length;
    return { correct: correct, total: answered.length, pct: answered.length ? correct / answered.length : 1 };
  }
  V.scoreOf = scoreOf;

  function exSummary(l, sec) {
    var ex = CC.L.ex, s = scoreOf(ex), pass = s.pct >= 0.6, id = l.id;
    var next = nextLessonId(id);
    var h = '<div class="summary ' + (pass ? "pass" : "retry") + '"><div class="score">' + Math.round(s.pct * 100) + '%</div><div><b>' +
      (pass ? (s.pct === 1 ? "Xuất sắc! Trả lời đúng tất cả." : "Làm tốt lắm!") : "Chưa đạt — hãy xem lại và làm lại nhé.") + "</b><p>" +
      s.correct + "/" + s.total + " câu đúng" + (ex.n - s.total ? " (" + (ex.n - s.total) + " câu bỏ qua)" : "") + ".</p></div></div>";
    if (pass) {
      var hasVocab = CC.lessonVocab(l).length > 0;
      h += '<div class="callout ok"><b>✅ Đã hoàn thành bài này</b><p>' +
        (ex.added ? "Đã thêm <b>" + ex.added + " từ</b> vào bộ thẻ ôn. " : hasVocab ? "Từ vựng của bài đã có trong bộ thẻ ôn. " : "") +
        "Hãy xem lại bài sau 1 ngày để nhớ lâu.</p></div>";
    }
    var wrong = [];
    sec.items.forEach(function (q, i) {
      var r = ex.res[i];
      if (r && !r.ok && !r.skip) wrong.push(q);
    });
    if (wrong.length) {
      h += "<h3>Các câu cần xem lại</h3><ul class=\"review-list\">" + wrong.map(function (q) {
        var ans = q.t === "order" ? q.words.join("") : q.opts[q.a];
        return "<li><div>" + fmt(q.q) + '</div><div class="good">→ ' + fmt(ans) + "</div>" + (q.why ? "<small>" + fmt(q.why) + "</small>" : "") + "</li>";
      }).join("") + "</ul>";
    }
    h += '<div class="hero-actions">';
    if (pass) {
      h += '<a class="btn primary" href="#on-tap">Ôn từ vựng ngay</a>';
      if (next) h += '<a class="btn" href="#bai-' + next + '">Bài tiếp theo: ' + esc(CC.lessons[next].title) + " →</a>";
      else h += '<a class="btn" href="#hoc">Về lộ trình</a>';
    } else {
      h += '<button type="button" class="btn primary" data-act="ex-retry">Làm lại</button>' +
        '<button type="button" class="btn" data-act="ex-force">Vẫn đánh dấu hoàn thành</button>';
    }
    if (pass) h += '<button type="button" class="btn" data-act="ex-retry">Làm lại bài tập</button>';
    h += writeBtn(CC.lessonChars(l).join(""), "Luyện viết các chữ trong bài") + "</div>";
    return h;
  }

  /* ---------- Ôn thẻ ---------- */
  V.review = function () {
    var total = CC.srs.count(), st = CC.settings();
    if (!total) {
      return '<section class="page"><h1>Ôn từ vựng</h1><div class="empty"><p class="big">🗂️</p><p><b>Chưa có thẻ nào.</b></p>' +
        "<p>Hoàn thành bài học đầu tiên và từ vựng của bài sẽ tự động được thêm vào đây.</p>" +
        '<a class="btn primary" href="#hoc">Bắt đầu học</a></div></section>';
    }
    var R = CC.R;
    if (R && R.finished) return reviewDone(R);
    if (R && R.queue && R.queue.length) return reviewCard(R);

    var due = CC.srs.due(), cards = CC.srs.all();
    var nNew = cards.filter(function (c) { return c.reps === 0; }).length;
    var nMature = cards.filter(function (c) { return c.box >= 4; }).length;
    var nLearn = total - nNew - nMature;
    var h = '<section class="page"><h1>Ôn từ vựng</h1>' +
      '<div class="stats"><div class="stat"><b>' + due.length + '</b><span>cần ôn bây giờ</span></div><div class="stat"><b>' + total + '</b><span>tổng số thẻ</span></div><div class="stat"><b>' + nMature + "</b><span>đã nhớ chắc</span></div></div>" +
      '<div class="dist" aria-label="Phân bố thẻ"><i class="d-new" style="flex:' + nNew + '"></i><i class="d-learn" style="flex:' + nLearn + '"></i><i class="d-ok" style="flex:' + nMature + '"></i></div>' +
      '<p class="legend"><span><i class="dot d-new"></i>Mới ' + nNew + '</span><span><i class="dot d-learn"></i>Đang học ' + nLearn + '</span><span><i class="dot d-ok"></i>Nhớ chắc ' + nMature + "</span></p>";
    h += '<div class="field-row"><span>Kiểu thẻ</span><div class="seg" role="radiogroup" aria-label="Kiểu thẻ">' +
      '<button type="button" role="radio" data-act="dir" data-v="zh-vi" aria-checked="' + (st.dir !== "vi-zh") + '">Chữ Hán → nghĩa</button>' +
      '<button type="button" role="radio" data-act="dir" data-v="vi-zh" aria-checked="' + (st.dir === "vi-zh") + '">Nghĩa → chữ Hán</button></div></div>';
    if (due.length) {
      h += '<div class="hero-actions"><button type="button" class="btn primary big" data-act="rv-start" data-m="due">Bắt đầu ôn ' + Math.min(due.length, 20) + " thẻ</button></div>" +
        (due.length > 20 ? '<p class="muted">Mỗi lượt tối đa 20 thẻ; còn ' + (due.length - 20) + " thẻ cho lượt sau.</p>" : "");
    } else {
      var up = CC.srs.upcoming(1)[0];
      h += '<div class="callout ok"><b>🎉 Hôm nay không còn thẻ cần ôn.</b><p>' + (up ? "Thẻ kế tiếp đến hạn sau " + CC.srs.label(Math.max(60000, up.due - Date.now())) + ". " : "") +
        "Bạn có thể ôn trước một ít, hoặc học bài mới.</p></div>" +
        '<div class="hero-actions"><button type="button" class="btn primary" data-act="rv-start" data-m="ahead">Ôn trước 10 thẻ</button><a class="btn" href="#hoc">Học bài mới</a></div>';
    }
    return h + "</section>";
  };

  function reviewCard(R) {
    var c = CC.state().cards[R.queue[R.idx]];
    if (!c) { R.idx++; return V.review(); }
    var dir = CC.settings().dir, total = R.total, done = R.idx;
    var h = '<section class="page review"><div class="ex-head"><span>Thẻ ' + Math.min(done + 1, total) + "/" + total + '</span><div class="bar slim"><i style="width:' + Math.round(done / total * 100) + '%"></i></div>' +
      '<button type="button" class="linkish" data-act="rv-end">Kết thúc</button></div>';
    h += '<div class="flash' + (R.flipped ? " flipped" : "") + '" data-act="flip" tabindex="0" role="button" aria-label="Lật thẻ">';
    if (dir === "vi-zh") {
      h += '<div class="f-front"><p class="muted">' + esc(c.pos) + '</p><div class="f-vi">' + esc(c.vi) + "</div>" +
        (R.flipped ? "" : '<p class="muted hint">Nhớ chữ Hán và cách đọc, rồi lật thẻ</p>') + "</div>";
      if (R.flipped) {
        h += '<div class="f-back"><div class="f-zh" lang="zh">' + esc(c.zh) + "</div><div class=\"f-py\">" + esc(c.py) + "</div>" + (c.hv && c.hv !== "—" ? '<div class="hv">Hán Việt: ' + esc(c.hv) + "</div>" : "") + exBlock(c) + "</div>";
      }
    } else {
      h += '<div class="f-front"><div class="f-zh" lang="zh">' + esc(c.zh) + "</div>" + (R.flipped ? "" : '<p class="muted hint">Nhớ nghĩa và cách đọc, rồi lật thẻ</p>') + "</div>";
      if (R.flipped) {
        h += '<div class="f-back"><div class="f-py">' + esc(c.py) + "</div>" + (c.hv && c.hv !== "—" ? '<div class="hv">Hán Việt: ' + esc(c.hv) + "</div>" : "") +
          '<div class="f-vi">' + esc(c.vi) + '</div><p class="muted">' + esc(c.pos) + "</p>" + exBlock(c) + "</div>";
      }
    }
    h += "</div>";
    h += '<p class="actions-row center">' + sayBtn(c.zh, "big") + writeBtn(c.zh, "Luyện viết") + "</p>";
    if (!R.flipped) {
      h += '<div class="rate"><button type="button" class="btn primary big" data-act="flip">Lật thẻ <kbd>Space</kbd></button></div>';
    } else {
      var names = ["Quên", "Khó", "Nhớ", "Dễ"], cls = ["r0", "r1", "r2", "r3"];
      h += '<div class="rate four">' + names.map(function (n, g) {
        var p = CC.srs.preview(c, g);
        return '<button type="button" class="rbtn ' + cls[g] + '" data-act="rate" data-g="' + g + '"><b>' + n + "</b><small>" + CC.srs.label(p.ms) + " · phím " + (g + 1) + "</small></button>";
      }).join("") + "</div>";
    }
    return h + "</section>";
  }

  function exBlock(c) {
    if (!c.ex || !c.ex[0]) return "";
    return '<div class="f-ex"><span class="zh" lang="zh">' + esc(c.ex[0]) + '</span><span class="py">' + esc(c.ex[1]) + '</span><span class="vi">' + esc(c.ex[2]) + "</span></div>";
  }

  function reviewDone(R) {
    var s = R.stats;
    return '<section class="page"><h1>Hoàn thành lượt ôn</h1><div class="summary pass"><div class="score">' + (R.unique || R.total) + '</div><div><b>thẻ đã ôn</b><p>' +
      "Quên " + s[0] + " · Khó " + s[1] + " · Nhớ " + s[2] + " · Dễ " + s[3] + (s[0] ? " (thẻ quên được hỏi lại trong lượt này)" : "") + "</p></div></div>" +
      '<div class="hero-actions"><button type="button" class="btn primary" data-act="rv-reset">Xong</button><a class="btn" href="#hoc">Học bài mới</a></div></section>';
  }

  /* ---------- Bảng pinyin ---------- */
  V.pinyin = function () {
    return '<section class="page"><h1>Bảng pinyin</h1><p class="muted">Nhấn vào từng ô để nghe phát âm (cần giọng đọc tiếng Trung của trình duyệt).</p>' +
      "<h2>Thanh mẫu — phụ âm đầu</h2>" + initialsHtml() +
      "<h2>Vận mẫu — vần</h2>" + finalsHtml() +
      "<h2>Thanh điệu</h2>" + tonesTable() + toneSetsHtml() +
      '<p class="muted">Muốn học bài bản? Xem <a href="#bai-s0-l1">Chặng 0 — Nhập môn</a>.</p></section>';
  };

  /* ---------- Luyện viết ---------- */
  V.write = function () {
    var head = '<section class="page write-page"><h1>Luyện viết chữ Hán</h1>' +
      '<p class="muted">Vẽ từng nét bằng chuột hoặc ngón tay. Trang tự kiểm tra thứ tự và hướng nét.</p>';
    if (window.CC_HOSTED) {
      var sets = window.CHAR_SETS || [];
      return head + '<div class="tool-grid">' + sets.map(function (st) {
        return '<a class="tool" href="' + esc(CC.writeUrl({ set: st.id })) + '" target="_blank" rel="noopener"><b>' + esc(st.name) + "</b><span>" + st.chars.length + " chữ · mở trong tab mới</span></a>";
      }).join("") + "</div></section>";
    }
    return head + '<iframe class="write-frame" src="' + esc(CC.writeUrl({ set: "nhap-mon" })) + '" title="Trang luyện viết chữ Hán"></iframe></section>';
  };

  /* ---------- Cài đặt ---------- */
  V.settings = function () {
    var s = CC.settings(), zh = CC.tts.zhVoices();
    var h = '<section class="page settings"><h1>Cài đặt</h1>';
    if (!CC.storageOK) h += '<div class="callout warn"><b>⚠️ Không lưu được tiến độ</b><p>Trình duyệt đang chặn lưu dữ liệu. Hãy xuất tiến độ để sao lưu.</p></div>';

    h += "<h2>Hiển thị trong bài học</h2>" +
      toggleRow("pinyin", "Hiện pinyin", "Tắt để tự thử đọc chữ Hán trước", s.pinyin) +
      toggleRow("vi", "Hiện bản dịch tiếng Việt", "Tắt thì nhấn vào dòng để xem dịch", s.vi);

    h += "<h2>Giọng đọc</h2>";
    if (!CC.tts.supported) h += '<div class="callout warn"><p>Trình duyệt này không hỗ trợ đọc văn bản. Hãy dùng Chrome, Edge hoặc Safari.</p></div>';
    else if (!zh.length) h += '<div class="callout warn"><p>Chưa tìm thấy giọng tiếng Trung trên thiết bị. Trên Windows/Android/iOS/macOS thường có sẵn hoặc cài thêm trong phần ngôn ngữ của hệ thống.</p></div>';
    h += '<label class="field-row"><span>Tốc độ: <b id="rate-val">' + s.rate.toFixed(2) + '×</b></span><input type="range" id="rate" min="0.5" max="1.2" step="0.05" value="' + s.rate + '" data-act="rate-set"></label>' +
      '<label class="field-row"><span>Giọng</span><select id="voice" data-act="voice-set"><option value="">Tự động</option>' + zh.map(function (v) {
        return '<option value="' + esc(v.name) + '"' + (v.name === s.voice ? " selected" : "") + ">" + esc(v.name + " (" + v.lang + ")") + "</option>";
      }).join("") + "</select></label>" +
      '<p><button type="button" class="btn" data-act="say" data-t="你好！我是你的中文老师。">' + ICONS.sound + " Thử giọng đọc</button></p>";

    if (!window.CC_HOSTED) {
      h += '<h2>Giao diện</h2><label class="field-row"><span>Chủ đề màu</span><select id="theme" data-act="theme-set">' +
        [["auto", "Theo hệ thống"], ["light", "Sáng"], ["dark", "Tối"]].map(function (o) {
          return '<option value="' + o[0] + '"' + (o[0] === s.theme ? " selected" : "") + ">" + o[1] + "</option>";
        }).join("") + "</select></label>";
    }

    h += "<h2>Dữ liệu của bạn</h2><p class=\"muted\">Tiến độ được lưu <b>trong trình duyệt này</b>. Hãy xuất ra để sao lưu hoặc chuyển sang thiết bị khác.</p>" +
      '<div class="hero-actions"><button type="button" class="btn" data-act="export" aria-expanded="' + CC.ui.exportOpen + '">' + (CC.ui.exportOpen ? "Ẩn dữ liệu xuất" : "Xuất tiến độ") + "</button>" +
      '<label class="btn">Nhập từ tệp<input type="file" accept="application/json,.json" data-act="import" hidden></label>' +
      '<button type="button" class="btn danger" data-act="reset">' + (CC.ui.resetArmed ? "Bấm lần nữa để xóa hết" : "Xóa toàn bộ tiến độ") + "</button></div>";
    if (CC.ui.exportOpen) {
      h += '<div class="export-box"><label for="export-text"><b>Sao lưu</b> — sao chép đoạn này và lưu lại ở nơi an toàn:</label>' +
        '<textarea id="export-text" readonly rows="6">' + esc(CC.exportJSON()) + '</textarea>' +
        '<p><button type="button" class="btn small" data-act="copy-export">Sao chép</button></p>' +
        '<label for="import-text"><b>Khôi phục</b> — dán nội dung đã sao lưu vào đây:</label>' +
        '<textarea id="import-text" rows="4" placeholder="Dán nội dung tiến độ"></textarea>' +
        '<p><button type="button" class="btn small" data-act="import-text">Nhập</button></p></div>';
    }

    h += '<h2>Giới thiệu</h2><p class="muted">China Course — lộ trình học tiếng Trung cho người Việt, bám theo HSK 3.0. Nội dung bài học tự biên soạn. Dữ liệu nét chữ: Hanzi Writer / Make Me a Hanzi.</p></section>';
    return h;
  };

  function toggleRow(k, title, sub, on) {
    return '<div class="field-row toggle"><span><b>' + esc(title) + "</b><small>" + esc(sub) + '</small></span><button type="button" class="switch" role="switch" data-act="toggle" data-k="' + k + '" aria-checked="' + on + '" aria-label="' + esc(title) + '"><i></i></button></div>';
  }

  V.notFound = function () {
    return '<section class="page"><h1>Không tìm thấy trang</h1><p><a class="btn primary" href="#hoc">Về trang chủ</a></p></section>';
  };
})();
