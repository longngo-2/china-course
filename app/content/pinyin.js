/*
 * Dữ liệu bảng pinyin dùng cho bài học Chặng 0 và trang “Bảng pinyin”.
 * Mỗi mục: [ký hiệu, chữ Hán ví dụ, pinyin ví dụ, ghi chú gần đúng cho người Việt]
 * Ghi chú chỉ mang tính gần đúng — luôn nghe và nhại theo giọng đọc.
 */
CC.pinyin = {
  initials: [
    { name: "Âm môi (唇音)", items: [
      ["b", "爸", "bà", "Gần “p” trong “pa”, **không bật hơi**."],
      ["p", "怕", "pà", "Như b nhưng **bật hơi mạnh** (đặt tờ giấy trước miệng sẽ thấy rung)."],
      ["m", "妈", "mā", "Như “m” tiếng Việt."],
      ["f", "发", "fā", "Như “ph” tiếng Việt."]
    ] },
    { name: "Đầu lưỡi (舌尖音)", items: [
      ["d", "大", "dà", "Gần “t”, **không bật hơi**."],
      ["t", "他", "tā", "Gần “th”, **bật hơi**."],
      ["n", "你", "nǐ", "Như “n” tiếng Việt."],
      ["l", "来", "lái", "Như “l” tiếng Việt."]
    ] },
    { name: "Gốc lưỡi (舌根音)", items: [
      ["g", "哥", "gē", "Gần “c/k” (cơ), **không bật hơi**."],
      ["k", "可", "kě", "Như g nhưng **bật hơi mạnh**."],
      ["h", "喝", "hē", "Gần “h”, hơi ráp ở cổ họng (gần “kh”)."]
    ] },
    { name: "Mặt lưỡi (舌面音)", items: [
      ["j", "几", "jǐ", "Gần “chi”, đầu lưỡi chạm răng dưới, **không bật hơi**."],
      ["q", "七", "qī", "Như j nhưng **bật hơi mạnh**."],
      ["x", "西", "xī", "Gần “xi” nhẹ, hơi thoát qua khe giữa lưỡi và vòm."]
    ] },
    { name: "Âm uốn lưỡi (翘舌音)", items: [
      ["zh", "这", "zhè", "Gần “tr”, **uốn lưỡi**, không bật hơi."],
      ["ch", "吃", "chī", "Như zh nhưng **bật hơi mạnh**."],
      ["sh", "是", "shì", "Gần “s”, **uốn lưỡi**."],
      ["r", "人", "rén", "Uốn lưỡi, gần “r” tiếng Anh — **không rung lưỡi** như “r” Việt."]
    ] },
    { name: "Đầu lưỡi răng (舌尖前音)", items: [
      ["z", "在", "zài", "Gần “ts”, đầu lưỡi chạm răng trên, không bật hơi."],
      ["c", "菜", "cài", "Như z nhưng **bật hơi mạnh**."],
      ["s", "三", "sān", "Gần “x/s” lưỡi phẳng, hơi thoát qua khe răng."]
    ] }
  ],

  // Cặp không bật hơi / bật hơi — điểm khó nhất của người Việt
  aspirated: ["p", "t", "k", "q", "ch", "c"],
  unaspirated: ["b", "d", "g", "j", "zh", "z"],

  finals: [
    { name: "Vận đơn (单韵母)", items: [
      ["a", "妈", "mā", "Như “a”."],
      ["o", "波", "bō", "Gần “ô”, môi tròn (thực tế thoáng “uô”)."],
      ["e", "喝", "hē", "Gần “ơ”, lưỡi lùi sau, miệng hơi mở."],
      ["i", "你", "nǐ", "Như “i”."],
      ["u", "不", "bù", "Như “u”."],
      ["ü", "女", "nǚ", "Nói “i” nhưng **tròn môi** (gần “uy” kéo dài)."]
    ] },
    { name: "Vận kép (复韵母)", items: [
      ["ai", "爱", "ài", "Gần “ai”."],
      ["ei", "没", "méi", "Gần “ây”."],
      ["ao", "好", "hǎo", "Gần “ao”."],
      ["ou", "都", "dōu", "Gần “âu”."]
    ] },
    { name: "Vận mũi (鼻韵母)", items: [
      ["an", "三", "sān", "Kết thúc bằng “n”."],
      ["en", "人", "rén", "Gần “ân”."],
      ["ang", "上", "shàng", "Kết thúc bằng “ng” (mở miệng)."],
      ["eng", "朋", "péng", "Gần “ơng”."],
      ["ong", "中", "zhōng", "Gần “ung”."]
    ] },
    { name: "Vận bắt đầu bằng i", items: [
      ["ia", "家", "jiā", ""],
      ["ie", "谢", "xiè", "Gần “iê”."],
      ["iao", "小", "xiǎo", ""],
      ["iu", "六", "liù", "Viết gọn của **iou**."],
      ["ian", "见", "jiàn", "Đọc gần “iên”."],
      ["in", "今", "jīn", ""],
      ["iang", "想", "xiǎng", ""],
      ["ing", "明", "míng", ""],
      ["iong", "熊", "xióng", ""]
    ] },
    { name: "Vận bắt đầu bằng u", items: [
      ["ua", "花", "huā", ""],
      ["uo", "国", "guó", "Gần “uô”."],
      ["uai", "快", "kuài", ""],
      ["ui", "对", "duì", "Viết gọn của **uei**."],
      ["uan", "关", "guān", ""],
      ["un", "春", "chūn", "Viết gọn của **uen**."],
      ["uang", "床", "chuáng", ""]
    ] },
    { name: "Vận bắt đầu bằng ü", items: [
      ["üe", "月", "yuè", "Viết **ue** sau j, q, x, y."],
      ["üan", "远", "yuǎn", "Viết **uan** sau j, q, x, y."],
      ["ün", "云", "yún", "Viết **un** sau j, q, x, y."]
    ] },
    { name: "Vận cuốn lưỡi", items: [
      ["er", "二", "èr", "Cuốn đầu lưỡi lên khi đọc “ơ”."]
    ] }
  ],

  // Bộ 4 thanh để luyện nghe phân biệt
  toneSets: [
    { name: "ma", items: [["妈", "mā", "mẹ"], ["麻", "má", "gai; tê"], ["马", "mǎ", "ngựa"], ["骂", "mà", "mắng"]], neutral: ["吗", "ma", "trợ từ nghi vấn"] },
    { name: "shi", items: [["诗", "shī", "thơ"], ["十", "shí", "mười"], ["史", "shǐ", "lịch sử"], ["是", "shì", "là"]] },
    { name: "yi", items: [["衣", "yī", "áo"], ["姨", "yí", "dì"], ["椅", "yǐ", "ghế"], ["意", "yì", "ý nghĩa"]] }
  ],

  tones: [
    { n: 1, mark: "ā", name: "Thanh 1 — ngang cao", desc: "Giữ giọng **cao và đều**.", vn: "gần thanh ngang đọc cao" },
    { n: 2, mark: "á", name: "Thanh 2 — lên", desc: "Từ giữa **đi lên** cao, như hỏi “hả?”.", vn: "gần dấu sắc" },
    { n: 3, mark: "ǎ", name: "Thanh 3 — xuống rồi lên", desc: "Hạ **thấp**, rồi hơi nâng lên. Trong câu thường chỉ đọc nửa đầu (xuống thấp).", vn: "gần dấu hỏi, nhưng trầm và dài hơn" },
    { n: 4, mark: "à", name: "Thanh 4 — xuống", desc: "Từ cao **rơi nhanh** xuống thấp, dứt khoát.", vn: "gần dấu huyền/nặng, nhưng bắt đầu từ cao" },
    { n: 0, mark: "a", name: "Thanh nhẹ", desc: "**Ngắn và nhẹ**, không đánh dấu (vd: māma, ma).", vn: "" }
  ]
};
