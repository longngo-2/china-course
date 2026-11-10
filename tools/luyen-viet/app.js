/* Trang luyện viết chữ Hán — dùng Hanzi Writer (https://hanziwriter.org). */
(function () {
  "use strict";

  var DATA_URL = "https://cdn.jsdelivr.net/npm/hanzi-writer-data@2.0.1/";
  var REVIEW_KEY = "china-course:luyen-viet:can-on";
  var MODE_KEY = "china-course:luyen-viet:che-do";
  var REVIEW_SET_ID = "can-on";
  var REVIEW_THRESHOLD = 3; // số lỗi (chế độ Tự viết) để đưa vào "Chữ cần ôn"

  var $ = function (id) { return document.getElementById(id); };
  var els = {
    setSelect: $("set-select"),
    board: $("board"),
    boardMsg: $("board-msg"),
    glyph: $("glyph"),
    pinyin: $("pinyin"),
    hanviet: $("hanviet"),
    meaning: $("meaning"),
    strokes: $("strokes"),
    status: $("status"),
    counter: $("counter"),
    strip: $("strip"),
    summary: $("summary"),
    customForm: $("custom-form"),
    customInput: $("custom-input")
  };

  var state = {
    setId: null,
    list: [],          // [{c, py, hv, nghia}]
    idx: 0,
    mode: "to",        // xem | to | viet
    results: {},       // chữ -> số lỗi (phiên hiện tại)
    writer: null,
    totalStrokes: 0,
    mistakes: 0,
    done: false
  };

  /* ---------- Lưu trữ cục bộ (có thể không dùng được) ---------- */
  function load(key, fallback) {
    try {
      var v = localStorage.getItem(key);
      return v == null ? fallback : JSON.parse(v);
    } catch (e) { return fallback; }
  }
  function save(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* bỏ qua */ }
  }

  /* ---------- Dữ liệu ---------- */
  var SETS = (window.CHAR_SETS || []).map(function (s) {
    return {
      id: s.id,
      name: s.name,
      chars: s.chars.map(function (a) { return { c: a[0], py: a[1], hv: a[2], nghia: a[3] }; })
    };
  });

  var INDEX = {};
  SETS.forEach(function (s) {
    s.chars.forEach(function (e) { if (!INDEX[e.c]) INDEX[e.c] = e; });
  });

  function lookup(ch) {
    return INDEX[ch] || { c: ch, py: "—", hv: "—", nghia: "—" };
  }

  function hanChars(text) {
    var out = [];
    var re;
    try { re = /\p{Script=Han}|[⺀-⿟]/u; } catch (e) { re = /[⺀-⿟㐀-鿿]/; }
    Array.from(text || "").forEach(function (ch) {
      if (re.test(ch) && out.indexOf(ch) === -1) out.push(ch);
    });
    return out;
  }

  function reviewList() { return load(REVIEW_KEY, []); }

  function updateReview(ch, mistakes) {
    var list = reviewList();
    var i = list.indexOf(ch);
    if (mistakes >= REVIEW_THRESHOLD && i === -1) list.push(ch);
    if (mistakes === 0 && i !== -1) list.splice(i, 1);
    save(REVIEW_KEY, list);
    renderSetOptions();
  }

  /* ---------- Bộ chữ ---------- */
  function renderSetOptions() {
    var current = state.setId;
    var html = SETS.map(function (s) {
      return '<option value="' + s.id + '">' + escapeHtml(s.name) + " (" + s.chars.length + ")</option>";
    });
    var review = reviewList();
    html.push('<option value="' + REVIEW_SET_ID + '"' + (review.length ? "" : " disabled") + ">★ Chữ cần ôn (" + review.length + ")</option>");
    if (current === "tu-nhap") html.push('<option value="tu-nhap">Tự nhập</option>');
    els.setSelect.innerHTML = html.join("");
    if (current) els.setSelect.value = current;
  }

  function useSet(id, customChars) {
    var list;
    if (id === "tu-nhap") {
      list = customChars.map(lookup);
    } else if (id === REVIEW_SET_ID) {
      list = reviewList().map(lookup);
    } else {
      var set = SETS.filter(function (s) { return s.id === id; })[0] || SETS[0];
      id = set.id;
      list = set.chars.slice();
    }
    if (!list.length) return;
    state.setId = id;
    state.list = list;
    state.idx = 0;
    state.results = {};
    renderSetOptions();
    updateUrl();
    renderStrip();
    showChar(0);
  }

  function updateUrl() {
    try {
      var params = new URLSearchParams();
      if (state.setId === "tu-nhap") params.set("chu", state.list.map(function (e) { return e.c; }).join(""));
      else if (state.setId !== REVIEW_SET_ID) params.set("bo", state.setId);
      params.set("che-do", state.mode);
      history.replaceState(null, "", "?" + params.toString());
    } catch (e) { /* file:// hoặc sandbox */ }
  }

  /* ---------- Chế độ ---------- */
  function setMode(mode) {
    if (["xem", "to", "viet"].indexOf(mode) === -1) mode = "to";
    state.mode = mode;
    save(MODE_KEY, mode);
    document.querySelectorAll(".seg button").forEach(function (b) {
      b.setAttribute("aria-checked", String(b.dataset.mode === mode));
    });
    updateUrl();
  }

  /* ---------- Bảng viết ---------- */
  function boardSize() {
    var avail = Math.min(window.innerWidth - 32, 360);
    return Math.max(240, Math.floor(avail));
  }

  function cssVar(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  function setStatus(text, cls) {
    els.status.textContent = text;
    els.status.className = "status" + (cls ? " " + cls : "");
  }

  function strokeLabel(n) {
    return state.totalStrokes ? "Nét " + n + " / " + state.totalStrokes : "";
  }

  function showChar(i) {
    if (!state.list.length) return;
    state.idx = (i + state.list.length) % state.list.length;
    state.mistakes = 0;
    state.done = false;
    state.totalStrokes = 0;

    var e = state.list[state.idx];
    els.glyph.textContent = state.mode === "viet" ? "？" : e.c;
    els.glyph.classList.toggle("hidden", state.mode === "viet");
    els.pinyin.textContent = e.py;
    els.hanviet.textContent = e.hv;
    els.meaning.textContent = e.nghia;
    els.strokes.textContent = "…";
    els.counter.textContent = (state.idx + 1) + " / " + state.list.length;
    els.boardMsg.hidden = true;
    setStatus("");
    markCurrent();
    createWriter(e.c);
  }

  function createWriter(ch) {
    if (state.writer) {
      try { state.writer.cancelQuiz(); } catch (e) { /* ignore */ }
      try { state.writer.pauseAnimation(); } catch (e) { /* ignore */ }
    }
    var size = boardSize();
    els.board.style.setProperty("--board-size", size + "px");
    els.board.innerHTML = "";

    var token = {};
    state.token = token;

    state.writer = HanziWriter.create(els.board, ch, {
      width: size,
      height: size,
      padding: Math.round(size * 0.06),
      showCharacter: false,
      showOutline: state.mode !== "viet",
      strokeColor: cssVar("--stroke"),
      outlineColor: cssVar("--outline"),
      drawingColor: cssVar("--accent"),
      highlightColor: cssVar("--ok"),
      radicalColor: state.mode === "xem" ? cssVar("--accent") : null,
      drawingWidth: Math.max(6, Math.round(size / 40)),
      strokeAnimationSpeed: 1,
      delayBetweenStrokes: 250,
      delayBetweenLoops: 1500,
      showHintAfterMisses: 3,
      highlightOnComplete: true,
      charDataLoader: function (c, onLoad, onError) {
        fetch(DATA_URL + encodeURIComponent(c) + ".json")
          .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
          .then(onLoad, onError);
      },
      onLoadCharDataSuccess: function (data) {
        if (state.token !== token) return;
        state.totalStrokes = data.strokes.length;
        els.strokes.textContent = data.strokes.length;
        start();
      },
      onLoadCharDataError: function () {
        if (state.token !== token) return;
        els.strokes.textContent = "—";
        els.boardMsg.textContent = "Không tải được dữ liệu nét cho chữ “" + ch + "”. Kiểm tra kết nối mạng, hoặc chữ này chưa có trong bộ dữ liệu.";
        els.boardMsg.hidden = false;
      }
    });
  }

  function start() {
    var w = state.writer;
    if (!w) return;
    if (state.mode === "xem") {
      setStatus("Đang xem thứ tự nét…");
      w.loopCharacterAnimation();
    } else {
      startQuiz();
    }
  }

  function startQuiz() {
    var w = state.writer;
    var token = state.token;
    state.mistakes = 0;
    state.done = false;
    w.hideCharacter();
    if (state.mode === "viet") w.hideOutline(); else w.showOutline();
    setStatus(strokeLabel(1));

    w.quiz({
      onCorrectStroke: function (d) {
        if (state.token !== token) return;
        if (d.strokesRemaining > 0) setStatus(strokeLabel(d.strokeNum + 2));
      },
      onMistake: function (d) {
        if (state.token !== token) return;
        state.mistakes = d.totalMistakes;
        els.board.classList.remove("shake");
        void els.board.offsetWidth;
        els.board.classList.add("shake");
        var hint = d.mistakesOnStroke >= 3 ? " — xem gợi ý nét" : "";
        setStatus("Chưa đúng nét " + (d.strokeNum + 1) + hint + " (" + d.totalMistakes + " lỗi)", "warn");
      },
      onComplete: function (s) {
        if (state.token !== token) return;
        finish(s.character, s.totalMistakes);
      }
    });
  }

  function finish(ch, mistakes) {
    state.done = true;
    state.results[ch] = mistakes;
    els.glyph.textContent = ch;
    els.glyph.classList.remove("hidden");
    if (state.mode === "viet") {
      state.writer.showOutline();
      updateReview(ch, mistakes);
    }
    var cls = resultClass(mistakes);
    var msg = mistakes === 0 ? "Hoàn hảo! Không lỗi." : "Hoàn thành — " + mistakes + " lỗi.";
    setStatus(msg + " Nhấn → để sang chữ tiếp.", cls);
    renderStrip();
    renderSummary();
  }

  function resultClass(m) { return m === 0 ? "ok" : m < 3 ? "warn" : "bad"; }

  function demo() {
    var w = state.writer;
    if (!w || !state.totalStrokes) return;
    state.token = {};
    var token = state.token;
    try { w.cancelQuiz(); } catch (e) { /* ignore */ }
    w.showOutline();
    w.hideCharacter();
    setStatus("Đang xem thứ tự nét…");
    w.animateCharacter({
      onComplete: function () {
        if (state.token !== token) return;
        if (state.mode === "xem") { w.loopCharacterAnimation(); return; }
        setTimeout(function () {
          if (state.token !== token) return;
          state.token = {};
          startQuiz();
        }, 600);
      }
    });
  }

  /* ---------- Thanh tiến độ ---------- */
  function renderStrip() {
    els.strip.innerHTML = state.list.map(function (e, i) {
      var r = state.results[e.c];
      var res = r == null ? "" : ' data-res="' + resultClass(r) + '"';
      var title = e.c + " " + e.py + " — " + e.nghia + (r == null ? "" : " (" + r + " lỗi)");
      return '<li><button type="button" lang="zh" data-i="' + i + '"' + res + ' title="' + escapeHtml(title) + '">' + e.c + "</button></li>";
    }).join("");
    markCurrent();
  }

  function markCurrent() {
    els.strip.querySelectorAll("button").forEach(function (b) {
      b.setAttribute("aria-current", String(Number(b.dataset.i) === state.idx));
    });
  }

  function renderSummary() {
    var chars = state.list.map(function (e) { return e.c; });
    var doneChars = chars.filter(function (c) { return state.results[c] != null; });
    if (doneChars.length < chars.length) { els.summary.hidden = true; return; }
    var perfect = doneChars.filter(function (c) { return state.results[c] === 0; }).length;
    var weak = doneChars.filter(function (c) { return state.results[c] >= REVIEW_THRESHOLD; });
    els.summary.textContent = "Xong bộ " + chars.length + " chữ: " + perfect + " chữ không lỗi" +
      (weak.length ? "; nên luyện lại: " + weak.join(" ") : "") + ".";
    els.summary.hidden = false;
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ---------- Sự kiện ---------- */
  els.setSelect.addEventListener("change", function () { useSet(els.setSelect.value); });

  document.querySelectorAll(".seg button").forEach(function (b) {
    b.addEventListener("click", function () {
      setMode(b.dataset.mode);
      showChar(state.idx);
    });
  });

  els.customForm.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var chars = hanChars(els.customInput.value);
    if (!chars.length) { setStatus("Hãy nhập ít nhất một chữ Hán.", "warn"); return; }
    useSet("tu-nhap", chars);
  });

  $("prev").addEventListener("click", function () { showChar(state.idx - 1); });
  $("next").addEventListener("click", function () { showChar(state.idx + 1); });
  $("reset").addEventListener("click", function () { showChar(state.idx); });
  $("demo").addEventListener("click", demo);

  els.strip.addEventListener("click", function (ev) {
    var b = ev.target.closest("button[data-i]");
    if (b) showChar(Number(b.dataset.i));
  });

  document.addEventListener("keydown", function (ev) {
    var t = ev.target;
    if (t && (t.tagName === "INPUT" || t.tagName === "SELECT" || t.tagName === "TEXTAREA")) return;
    if (ev.ctrlKey || ev.metaKey || ev.altKey) return;
    if (ev.key === "ArrowRight") showChar(state.idx + 1);
    else if (ev.key === "ArrowLeft") showChar(state.idx - 1);
    else if (ev.key === "r" || ev.key === "R") showChar(state.idx);
    else if (ev.key === "d" || ev.key === "D") demo();
    else return;
    ev.preventDefault();
  });

  var lastSize = boardSize();
  window.addEventListener("resize", function () {
    clearTimeout(state.resizeTimer);
    state.resizeTimer = setTimeout(function () {
      var s = boardSize();
      if (s !== lastSize) { lastSize = s; showChar(state.idx); }
    }, 200);
  });

  if (window.matchMedia) {
    var mq = window.matchMedia("(prefers-color-scheme: dark)");
    var onScheme = function () { if (state.list.length) showChar(state.idx); };
    if (mq.addEventListener) mq.addEventListener("change", onScheme);
  }

  /* ---------- Khởi động ---------- */
  if (typeof HanziWriter === "undefined") {
    els.boardMsg.textContent = "Không tải được thư viện Hanzi Writer. Kiểm tra kết nối mạng rồi tải lại trang.";
    els.boardMsg.hidden = false;
    return;
  }

  var params;
  try { params = new URLSearchParams(location.search); } catch (e) { params = { get: function () { return null; } }; }
  setMode(params.get("che-do") || load(MODE_KEY, "to"));

  var custom = hanChars(params.get("chu"));
  if (custom.length) {
    els.customInput.value = custom.join("");
    useSet("tu-nhap", custom);
  } else {
    useSet(params.get("bo") || SETS[0].id);
  }
})();
