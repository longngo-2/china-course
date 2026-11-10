/*
 * Chặng 0 — Nhập môn.
 * Định dạng bài học: xem app/content/README.md
 */

/* ---------- Bài 1: Pinyin ---------- */
CC.addLesson({
  id: "s0-l1",
  title: "Pinyin: thanh mẫu & vận mẫu",
  minutes: 30,
  objectives: [
    "Hiểu cấu tạo một âm tiết: thanh mẫu + vận mẫu + thanh điệu",
    "Nhận biết 21 thanh mẫu, đặc biệt các cặp bật hơi / không bật hơi",
    "Biết các quy tắc viết pinyin (ü, y/w, iu/ui/un)"
  ],
  sections: [
    { type: "text", title: "Pinyin là gì?", body: [
      "**Pinyin (拼音)** là hệ thống phiên âm bằng chữ Latinh của tiếng Trung. Mỗi âm tiết gồm **thanh mẫu** (phụ âm đầu) + **vận mẫu** (vần) + **thanh điệu**.",
      { table: { head: ["Âm tiết", "Thanh mẫu", "Vận mẫu", "Thanh điệu"], rows: [
        ["nǐ (你)", "n", "i", "thanh 3 (ˇ)"],
        ["hǎo (好)", "h", "ao", "thanh 3 (ˇ)"],
        ["ài (爱)", "— (không có)", "ai", "thanh 4 (ˋ)"]
      ] } },
      { tip: "Bạn đã biết chữ Latinh nên rất dễ **đọc nhầm theo thói quen tiếng Việt**. Ví dụ: **q** không đọc “quờ” mà gần “ch” bật hơi; **c** không phải “cờ” mà gần “ts” bật hơi; **x** nhẹ hơn “x” Việt. Hãy luôn nghe mẫu rồi mới nhại theo." }
    ] },
    { type: "pinyin-initials", title: "Thanh mẫu" },
    { type: "text", title: "Bật hơi hay không?", body: [
      "Đây là điểm khó nhất với người Việt: tiếng Việt không phân biệt bật hơi, nên “ba” và “pa” nghe như một. Tiếng Trung thì **phân biệt hoàn toàn** — 爸 **bà** (bố) khác 怕 **pà** (sợ).",
      { table: { head: ["Không bật hơi", "Bật hơi"], rows: [
        ["b", "p"], ["d", "t"], ["g", "k"], ["j", "q"], ["zh", "ch"], ["z", "c"]
      ] } },
      { tip: "Cách tự kiểm tra: đặt một tờ giấy mỏng trước miệng. Đọc **p, t, k, q, ch, c** thì tờ giấy bị thổi bay; đọc **b, d, g, j, zh, z** thì giấy gần như đứng yên." }
    ] },
    { type: "pinyin-finals", title: "Vận mẫu" },
    { type: "text", title: "Quy tắc viết pinyin", body: [
      "**1. Chữ ü.** Sau **j, q, x, y** thì ü viết thành **u** (nhưng đọc vẫn là ü): 月 yuè, 去 qù. Sau **n, l** thì giữ nguyên ü: 女 nǚ, 绿 lǜ.",
      "**2. Khi đứng đầu âm tiết (không có thanh mẫu)**, i, u, ü được viết thành y, w, yu:",
      { table: { head: ["Vần", "Viết khi đứng một mình", "Ví dụ"], rows: [
        ["i, ia, ie, ian, in, ing…", "yi, ya, ye, yan, yin, ying…", "一 yī, 也 yě, 英 yīng"],
        ["u, ua, uo, uai, uan, uang", "wu, wa, wo, wai, wan, wang", "五 wǔ, 我 wǒ, 晚 wǎn"],
        ["ü, üe, üan, ün", "yu, yue, yuan, yun", "鱼 yú, 月 yuè, 远 yuǎn"]
      ] } },
      "**3. Viết gọn:** khi có thanh mẫu đứng trước, **iou → iu**, **uei → ui**, **uen → un**: 六 liù, 对 duì, 春 chūn.",
      "**4. Dấu nháy (’)** tách âm tiết khi bị nhập nhằng: 西安 **Xī’ān** (hai âm tiết) khác 先 **xiān** (một âm tiết).",
      { warn: "Chữ **i** trong **zhi, chi, shi, ri, zi, ci, si** là một âm khác (không phải “i” thông thường): 是 shì đọc gần “sừ” chứ không phải “xi”." }
    ] },
    { type: "exercises", items: [
      { t: "choice", q: "Cặp nào là cặp **không bật hơi / bật hơi**?", opts: ["b – p", "b – d", "m – n", "f – h"], a: 0, why: "Có 6 cặp: b/p, d/t, g/k, j/q, zh/ch, z/c." },
      { t: "choice", q: "Thanh mẫu nào là âm **uốn lưỡi**?", opts: ["z", "c", "sh", "x"], a: 2, why: "Âm uốn lưỡi gồm zh, ch, sh, r." },
      { t: "choice", q: "Chữ 月 (tháng) viết pinyin là gì?", opts: ["yue", "yüe", "ue", "jue"], a: 0, why: "Đứng đầu âm tiết, üe viết thành yue." },
      { t: "choice", q: "六 liù thực chất là l + vần nào, được viết gọn lại?", opts: ["iou", "uei", "uen", "üan"], a: 0, why: "iou viết gọn thành iu khi có thanh mẫu đứng trước." },
      { t: "choice", q: "Chữ nào có âm **ü** (tròn môi như nói “i”)?", opts: ["女 nǚ", "你 nǐ", "不 bù", "好 hǎo"], a: 0, why: "Chỉ 女 nǚ có ü." },
      { t: "listen", say: "七", q: "Nghe và chọn **thanh mẫu** bạn nghe được:", opts: ["q", "x", "j", "ch"], a: 0, why: "七 đọc là qī — q bật hơi." },
      { t: "listen", say: "吃", q: "Nghe và chọn **thanh mẫu** bạn nghe được:", opts: ["zh", "ch", "sh", "r"], a: 1, why: "吃 đọc là chī — ch uốn lưỡi, bật hơi." }
    ] }
  ]
});

/* ---------- Bài 2: Thanh điệu ---------- */
CC.addLesson({
  id: "s0-l2",
  title: "Thanh điệu & biến điệu",
  minutes: 30,
  objectives: [
    "Nghe và đọc đúng 4 thanh + thanh nhẹ",
    "Đặt dấu thanh đúng vị trí",
    "Nắm quy tắc biến điệu của thanh 3, 不 và 一"
  ],
  sections: [
    { type: "text", title: "4 thanh và thanh nhẹ", body: [
      "Tiếng Trung phổ thông có **4 thanh điệu** và **thanh nhẹ**. Thay đổi thanh là thay đổi nghĩa: **mā** 妈 (mẹ) · **má** 麻 (gai) · **mǎ** 马 (ngựa) · **mà** 骂 (mắng).",
      { tones: true },
      { tip: "Tiếng Việt cũng có thanh điệu nên bạn có lợi thế hơn nhiều người học khác. Chỉ cần nhớ: các thanh **gần giống** chứ không trùng khít — đường nét cao độ của tiếng Trung khác tiếng Việt." },
      { warn: "Lỗi hay gặp: đọc thanh 3 như dấu hỏi ngắn; lẫn thanh 2 và thanh 3; không **hạ đủ thấp** ở thanh 3 và không **rơi dứt khoát** ở thanh 4." }
    ] },
    { type: "tones", title: "Luyện nghe 4 thanh" },
    { type: "text", title: "Đặt dấu thanh ở đâu?", body: [
      { ul: [
        "Có **a** → đánh dấu trên **a**: hǎo, bāo, jiàn.",
        "Không có a → đánh dấu trên **o** hoặc **e**: dōu, méi, xiè, guó.",
        "**iu** và **ui** → đánh dấu trên **chữ cái đứng sau**: liù, duì.",
        "Chữ **i** mang dấu thì bỏ chấm: nǐ, bì."
      ] },
      "Mẹo nhớ thứ tự ưu tiên: **a > o, e > chữ cái cuối của iu / ui**."
    ] },
    { type: "text", title: "Biến điệu (变调)", body: [
      "Trong lời nói, một số thanh **đọc khác** với dấu ghi ở từ điển:",
      { table: { head: ["Quy tắc", "Ví dụ", "Thực tế đọc"], rows: [
        ["Thanh 3 + thanh 3 → thanh 2 + thanh 3", "你好 nǐ hǎo", "**ní** hǎo (vẫn viết nǐ hǎo)"],
        ["不 + thanh 4 → **bú**", "不是 bù shì · 不客气", "**bú** shì · **bú** kèqi"],
        ["不 + thanh 1, 2, 3 → giữ **bù**", "不好 · 不来 · 不吃", "bù hǎo · bù lái · bù chī"],
        ["一 + thanh 4 → **yí**", "一个 yī gè", "**yí** gè"],
        ["一 + thanh 1, 2, 3 → **yì**", "一天 · 一年 · 一起", "**yì** tiān · **yì** nián · **yì** qǐ"],
        ["一 đứng một mình / số thứ tự → giữ **yī**", "一, 第一", "yī, dì yī"]
      ] } },
      { tip: "Quy ước trong khóa này: **不** và **一** được ghi pinyin theo cách đọc thật trong hội thoại (bú, yí, yì); bảng từ vựng ghi thanh gốc. Biến điệu 3 + 3 thì không ghi lại, như sách giáo khoa." }
    ] },
    { type: "exercises", items: [
      { t: "choice", q: "Chọn âm tiết mang **thanh 3**:", opts: ["má", "mǎ", "mà", "mā"], a: 1, why: "Thanh 3 có dấu ˇ." },
      { t: "choice", q: "Dấu thanh đặt ở chữ cái nào trong “liu” (六)?", opts: ["l", "i", "u", "Không cần dấu"], a: 2, why: "Với iu / ui, dấu đặt ở chữ cái đứng sau: liù." },
      { t: "choice", q: "Dấu thanh trong “hao” (好) đặt ở đâu?", opts: ["h", "a", "o", "Cả a và o"], a: 1, why: "Có a thì dấu luôn đặt trên a: hǎo." },
      { t: "choice", q: "你好 (nǐ hǎo) thực tế đọc thành:", opts: ["ní hǎo", "nǐ háo", "nī hǎo", "nì hǎo"], a: 0, why: "Hai thanh 3 liền nhau: thanh 3 đầu đọc thành thanh 2." },
      { t: "choice", q: "不是 đọc là:", opts: ["bú shì", "bù shì", "bǔ shì", "bū shì"], a: 0, why: "不 đứng trước thanh 4 (是 shì) thì đọc thành bú." },
      { t: "choice", q: "一个 đọc là:", opts: ["yí gè", "yī gè", "yì gè", "yǐ gè"], a: 0, why: "一 đứng trước thanh 4 (个 gè) thì đọc yí." },
      { t: "choice", q: "一天 đọc là:", opts: ["yì tiān", "yí tiān", "yī tiān", "yǐ tiān"], a: 0, why: "一 đứng trước thanh 1 thì đọc yì." },
      { t: "listen", say: "马", q: "Nghe và chọn thanh điệu:", opts: ["mā", "má", "mǎ", "mà"], a: 2, why: "马 là mǎ (thanh 3)." },
      { t: "listen", say: "骂", q: "Nghe và chọn thanh điệu:", opts: ["mā", "má", "mǎ", "mà"], a: 3, why: "骂 là mà (thanh 4)." },
      { t: "listen", say: "麻", q: "Nghe và chọn thanh điệu:", opts: ["mā", "má", "mǎ", "mà"], a: 1, why: "麻 là má (thanh 2)." }
    ] }
  ]
});

/* ---------- Bài 3: Nét chữ & bộ thủ ---------- */
CC.addLesson({
  id: "s0-l3",
  title: "Nét chữ, thứ tự nét & bộ thủ",
  minutes: 35,
  objectives: [
    "Gọi tên và viết đúng 8 nét cơ bản",
    "Áp dụng quy tắc thứ tự nét",
    "Nhận biết 12 bộ thủ thường gặp và biến thể"
  ],
  sections: [
    { type: "text", title: "8 nét cơ bản (基本笔画)", body: [
      "Mọi chữ Hán đều được tạo từ các nét. Đếm số nét = đếm số lần **nhấc bút** (một nét gập hay móc vẫn tính là 1 nét).",
      { table: { head: ["Nét", "Tên", "Pinyin", "Hướng viết", "Ví dụ"], rows: [
        ["一", "ngang", "héng", "trái → phải", "一 二 三"],
        ["丨", "sổ", "shù", "trên → dưới", "十 中"],
        ["丿", "phẩy", "piě", "phải trên → trái dưới", "人 八"],
        ["丶", "chấm", "diǎn", "trên → phải dưới, ngắn", "六 主"],
        ["㇏", "mác", "nà", "trái trên → phải dưới", "人 大"],
        ["㇀", "hất", "tí", "trái dưới → phải trên", "打 冷"],
        ["㇕", "gập", "zhé", "đổi hướng đột ngột", "口 日"],
        ["亅", "móc", "gōu", "cuối nét hất lên", "小 了"]
      ] } }
    ] },
    { type: "text", title: "7 quy tắc thứ tự nét", body: [
      { ul: [
        "**Ngang trước, sổ sau**: 十, 王",
        "**Phẩy trước, mác sau**: 人, 八",
        "**Trên trước, dưới sau**: 三, 字",
        "**Trái trước, phải sau**: 川, 明",
        "**Ngoài trước, trong sau**: 月, 同",
        "**Vào nhà rồi mới đóng cửa**: 日, 回, 国 (nét đóng đáy viết cuối)",
        "**Giữa trước, hai bên sau**: 小, 水"
      ] },
      { tip: "Không cần thuộc hết ngoại lệ. Khi gặp chữ mới, hãy xem hoạt hình thứ tự nét — vài trăm chữ sau bạn sẽ tự “cảm” được." }
    ] },
    { type: "text", title: "Bộ thủ thường gặp (部首)", body: [
      "**Bộ thủ** thường gợi nghĩa của chữ. Nhiều bộ khi đứng bên trái hoặc phía trên sẽ đổi dạng:",
      { table: { head: ["Bộ", "Gốc", "Hán Việt", "Ý nghĩa", "Ví dụ"], rows: [
        ["亻", "人", "nhân đứng", "người", "你 他 休"],
        ["氵", "水", "ba chấm thủy", "nước", "河 洗 汉"],
        ["扌", "手", "thủ", "tay, hành động", "打 找 拿"],
        ["忄", "心", "tâm đứng", "tình cảm", "忙 快 慢"],
        ["讠", "言", "ngôn", "lời nói", "说 话 请"],
        ["艹", "艸", "thảo", "cỏ cây", "茶 花 草"],
        ["辶", "辵", "sước", "đi lại", "这 道 远"],
        ["钅", "金", "kim", "kim loại", "钱 银 错"],
        ["口", "—", "khẩu", "miệng", "吃 喝 叫"],
        ["女", "—", "nữ", "phụ nữ", "妈 好 姐"],
        ["木", "—", "mộc", "cây, gỗ", "树 桌 校"],
        ["日", "—", "nhật", "mặt trời, thời gian", "明 时 晚"]
      ] } },
      { warn: "Bộ **月** ở bên trái chữ (脸, 腿, 胖) thường là bộ **nhục** (thịt, cơ thể), không phải “mặt trăng”." }
    ] },
    { type: "text", title: "Thực hành viết", body: [
      "Dùng trang luyện viết để **vẽ từng nét bằng chuột hoặc ngón tay**; trang kiểm tra thứ tự và hướng nét. Bắt đầu với 20 chữ cơ bản (人 大 口 日 月 山 水 火 木 女…).",
      { write: { set: "nhap-mon", label: "Luyện viết 20 chữ cơ bản" } },
      { write: { set: "bo-thu", label: "Luyện viết các bộ thủ biến thể" } }
    ] },
    { type: "exercises", items: [
      { t: "choice", q: "Chữ **人** có mấy nét?", opts: ["2", "3", "4", "5"], a: 0, why: "Phẩy + mác = 2 nét." },
      { t: "choice", q: "Chữ **大** có mấy nét?", opts: ["2", "3", "4", "5"], a: 1, why: "Ngang + phẩy + mác = 3 nét." },
      { t: "choice", q: "Chữ **口** có mấy nét?", opts: ["2", "3", "4", "5"], a: 1, why: "Sổ, ngang-gập, ngang = 3 nét (không phải 4)." },
      { t: "choice", q: "Chữ **日** có mấy nét?", opts: ["2", "3", "4", "5"], a: 2, why: "Sổ, ngang-gập, ngang, ngang = 4 nét." },
      { t: "choice", q: "Chữ **女** có mấy nét?", opts: ["2", "3", "4", "5"], a: 1, why: "Phẩy-chấm, phẩy, ngang = 3 nét." },
      { t: "choice", q: "Trong chữ **十**, nét nào viết trước?", opts: ["Ngang", "Sổ"], a: 0, why: "Quy tắc: ngang trước, sổ sau." },
      { t: "choice", q: "Trong chữ **人**, nét nào viết trước?", opts: ["Phẩy (丿)", "Mác (㇏)"], a: 0, why: "Quy tắc: phẩy trước, mác sau." },
      { t: "choice", q: "Bộ **氵** là biến thể của bộ nào?", opts: ["水 (thủy)", "火 (hỏa)", "人 (nhân)", "心 (tâm)"], a: 0, why: "氵 là dạng đứng bên trái của 水." },
      { t: "choice", q: "Chữ **好** gồm những bộ nào?", opts: ["女 + 子", "口 + 子", "女 + 马", "木 + 子"], a: 0, why: "好 = 女 (phụ nữ) + 子 (con): hội ý." }
    ] }
  ]
});

/* ---------- Bài 4: Âm Hán Việt ---------- */
CC.addLesson({
  id: "s0-l4",
  title: "Âm Hán Việt — lợi thế của bạn",
  minutes: 20,
  objectives: [
    "Dùng âm Hán Việt để đoán nghĩa và cách đọc",
    "Nhận ra phần chỉ âm trong chữ hình thanh",
    "Cẩn thận với các “bạn giả” Hán Việt"
  ],
  sections: [
    { type: "text", title: "Hán Việt giúp gì cho bạn?", body: [
      "Một phần rất lớn từ vựng tiếng Việt có gốc Hán. Nhiều từ tiếng Trung bạn **đã biết nghĩa** nếu nghe được âm Hán Việt:",
      { table: { head: ["Chữ Hán", "Pinyin", "Hán Việt", "Nghĩa"], rows: [
        ["学生", "xuésheng", "học sinh", "học sinh"],
        ["老师", "lǎoshī", "lão sư", "thầy/cô giáo"],
        ["国家", "guójiā", "quốc gia", "đất nước"],
        ["大学", "dàxué", "đại học", "đại học"],
        ["电话", "diànhuà", "điện thoại", "điện thoại"],
        ["医院", "yīyuàn", "y viện", "bệnh viện"],
        ["图书馆", "túshūguǎn", "đồ thư quán", "thư viện"],
        ["欢迎", "huānyíng", "hoan nghênh", "chào mừng"]
      ] } },
      { tip: "Cách dùng: mỗi từ mới, hãy thử đoán nghĩa từ âm Hán Việt **trước khi** xem nghĩa. Đoán đúng thì nhớ rất lâu." }
    ] },
    { type: "text", title: "Đoán cách đọc qua phần chỉ âm", body: [
      "Phần lớn chữ Hán là chữ **hình thanh**: một phần chỉ **nghĩa** (bộ thủ), một phần chỉ **âm**. Các chữ chung phần chỉ âm thường có cách đọc gần nhau — và **âm Hán Việt cũng vậy**:",
      { table: { head: ["Phần chỉ âm", "Chữ", "Pinyin", "Hán Việt", "Nghĩa"], rows: [
        ["青 qīng", "清", "qīng", "thanh", "trong, sạch"],
        ["", "请", "qǐng", "thỉnh", "mời"],
        ["", "晴", "qíng", "tình", "nắng"],
        ["", "情", "qíng", "tình", "tình cảm"],
        ["马 mǎ", "妈", "mā", "—", "mẹ"],
        ["", "吗", "ma", "—", "trợ từ nghi vấn"],
        ["", "码", "mǎ", "mã", "mã số"],
        ["", "骂", "mà", "mạ", "mắng"]
      ] } }
    ] },
    { type: "text", title: "“Bạn giả” — Hán Việt dễ gây hiểu nhầm", body: [
      "Một số từ có âm Hán Việt quen thuộc nhưng **nghĩa đã khác**. Đánh dấu ⚠️ khi gặp:",
      { table: { head: ["Chữ Hán", "Pinyin", "Hán Việt", "Nghĩa thật"], rows: [
        ["⚠️ 爱人", "àiren", "ái nhân", "**vợ/chồng** (không phải “người yêu”)"],
        ["⚠️ 东西", "dōngxi", "đông tây", "**đồ vật**, thứ (không phải hướng đông tây)"],
        ["⚠️ 新闻", "xīnwén", "tân văn", "**tin tức**"],
        ["⚠️ 老婆", "lǎopo", "lão bà", "**vợ** (không phải bà già)"],
        ["⚠️ 汤", "tāng", "thang", "**canh, súp** (không phải thuốc thang)"],
        ["⚠️ 走", "zǒu", "tẩu", "**đi** (không phải chạy trốn)"]
      ] } }
    ] },
    { type: "exercises", items: [
      { t: "choice", q: "新闻 (xīnwén — tân văn) nghĩa là gì?", opts: ["Tin tức", "Văn học mới", "Tân sinh viên", "Báo cáo"], a: 0, why: "Bạn giả: 新闻 là tin tức." },
      { t: "choice", q: "爱人 (àiren — ái nhân) nghĩa là gì?", opts: ["Vợ/chồng", "Người yêu", "Người thân", "Bạn bè"], a: 0, why: "爱人 là vợ/chồng." },
      { t: "choice", q: "东西 (dōngxi) nghĩa là gì?", opts: ["Đồ vật, thứ", "Hướng đông tây", "Phương Đông", "Phương Tây"], a: 0, why: "东西 đọc nhẹ âm sau nghĩa là “đồ vật”." },
      { t: "choice", q: "图书馆 (túshūguǎn — đồ thư quán) là nơi nào?", opts: ["Thư viện", "Hiệu sách", "Bảo tàng", "Quán cà phê"], a: 0, why: "Đồ thư quán = thư viện." },
      { t: "choice", q: "汤 (tāng) trong bữa ăn là gì?", opts: ["Canh, súp", "Thuốc", "Nước chấm", "Cơm"], a: 0, why: "汤 là canh/súp." },
      { t: "choice", q: "清 qīng (trong, sạch) cùng phần chỉ âm 青 thanh. Âm Hán Việt của 清 là?", opts: ["thanh", "tình", "thỉnh", "tinh"], a: 0, why: "清 = thanh (thanh khiết)." },
      { t: "choice", q: "请 qǐng (mời) có âm Hán Việt là?", opts: ["thỉnh", "thanh", "tình", "thính"], a: 0, why: "请 = thỉnh (thỉnh cầu)." }
    ] }
  ]
});
