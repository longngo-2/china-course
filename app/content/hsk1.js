/*
 * HSK 1 — Unit 1–3.
 * Từ vựng: [chữ, pinyin, Hán Việt, từ loại, nghĩa, ví dụ (zh), ví dụ (pinyin), ví dụ (nghĩa)]
 * Hội thoại: [người nói, zh, pinyin, nghĩa]
 * Ngữ pháp ví dụ: [zh, pinyin, nghĩa]; lỗi hay mắc: [sai, đúng, giải thích]
 * Nội dung do nhóm tự viết, không sao chép từ giáo trình có bản quyền.
 */

/* ======================= Unit 1 — Bài 1: Xin chào ======================= */
CC.addLesson({
  id: "h1-1-1",
  title: "Xin chào!",
  minutes: 30,
  objectives: [
    "Chào hỏi và hỏi thăm sức khỏe",
    "Dùng 吗 để đặt câu hỏi có/không",
    "Dùng 很 và 也 trong câu có tính từ"
  ],
  sections: [
    { type: "dialogue", title: "Hội thoại", groups: [
      { title: "1. Gặp bạn", lines: [
        ["A", "你好！", "Nǐ hǎo!", "Xin chào!"],
        ["B", "你好！", "Nǐ hǎo!", "Xin chào!"]
      ] },
      { title: "2. Chào thầy cô", lines: [
        ["学生", "老师好！", "Lǎoshī hǎo!", "Em chào thầy/cô ạ!"],
        ["老师", "你们好！", "Nǐmen hǎo!", "Chào các em!"]
      ] },
      { title: "3. Hỏi thăm", lines: [
        ["A", "你好吗？", "Nǐ hǎo ma?", "Bạn khỏe không?"],
        ["B", "我很好，你呢？", "Wǒ hěn hǎo, nǐ ne?", "Mình rất khỏe, còn bạn?"],
        ["A", "我也很好。", "Wǒ yě hěn hǎo.", "Mình cũng rất khỏe."]
      ] }
    ], note: "Nhớ biến điệu: 你好 viết là nǐ hǎo nhưng đọc là **ní hǎo** (thanh 3 + thanh 3)." },
    { type: "vocab", title: "Từ vựng", items: [
      ["你", "nǐ", "nhĩ", "đại từ", "bạn, anh/chị…", "你好！", "Nǐ hǎo!", "Xin chào!"],
      ["您", "nín", "—", "đại từ", "ngài, ông/bà (lịch sự)", "您好！", "Nín hǎo!", "Xin chào (lịch sự)!"],
      ["好", "hǎo", "hảo", "tính từ", "tốt, khỏe", "我很好。", "Wǒ hěn hǎo.", "Tôi khỏe."],
      ["你好", "nǐ hǎo", "—", "cụm từ", "xin chào", "你好！", "Nǐ hǎo!", "Xin chào!"],
      ["们", "men", "môn", "hậu tố", "(số nhiều chỉ người)", "你们好！", "Nǐmen hǎo!", "Chào các bạn!"],
      ["老师", "lǎoshī", "lão sư", "danh từ", "thầy/cô giáo", "老师好！", "Lǎoshī hǎo!", "Chào thầy/cô!"],
      ["同学", "tóngxué", "đồng học", "danh từ", "bạn học", "同学们好！", "Tóngxuémen hǎo!", "Chào các bạn học sinh!"],
      ["早上", "zǎoshang", "tảo thượng", "danh từ", "buổi sáng", "早上好！", "Zǎoshang hǎo!", "Chào buổi sáng!"],
      ["晚上", "wǎnshang", "vãn thượng", "danh từ", "buổi tối", "晚上好！", "Wǎnshang hǎo!", "Chào buổi tối!"],
      ["吗", "ma", "—", "trợ từ", "(trợ từ nghi vấn)", "你好吗？", "Nǐ hǎo ma?", "Bạn khỏe không?"],
      ["很", "hěn", "ngận", "phó từ", "rất", "我很好。", "Wǒ hěn hǎo.", "Tôi rất khỏe."],
      ["我", "wǒ", "ngã", "đại từ", "tôi, mình", "我很好。", "Wǒ hěn hǎo.", "Tôi khỏe."],
      ["也", "yě", "dã", "phó từ", "cũng", "我也很好。", "Wǒ yě hěn hǎo.", "Tôi cũng rất khỏe."],
      ["呢", "ne", "—", "trợ từ", "còn … thì sao?", "你呢？", "Nǐ ne?", "Còn bạn thì sao?"]
    ] },
    { type: "grammar", title: "Ngữ pháp", points: [
      {
        title: "Câu hỏi với 吗",
        structure: "Câu trần thuật + **吗**？",
        explain: [
          "Thêm **吗** vào cuối câu trần thuật để biến thành câu hỏi có/không. **Không đổi trật tự từ.**",
          "吗 đọc nhẹ (thanh nhẹ)."
        ],
        examples: [
          ["你好吗？", "Nǐ hǎo ma?", "Bạn khỏe không?"],
          ["你们好吗？", "Nǐmen hǎo ma?", "Các bạn khỏe không?"],
          ["老师好吗？", "Lǎoshī hǎo ma?", "Thầy/cô khỏe không?"]
        ],
        mistakes: [["吗你好？", "你好吗？", "吗 luôn đứng **cuối câu**, khác với “có … không” của tiếng Việt."]]
      },
      {
        title: "很 + tính từ",
        structure: "S + **很** + Adj",
        explain: [
          "Tính từ làm vị ngữ **không cần động từ “是”** (không nói “tôi là khỏe”).",
          "Thường thêm **很** trước tính từ. Ở đây 很 chủ yếu là “trợ lực” ngữ pháp, nghĩa “rất” đã yếu đi. Bỏ 很, câu nghe như **đang so sánh ngầm** hoặc chưa trọn câu."
        ],
        examples: [
          ["我很好。", "Wǒ hěn hǎo.", "Tôi khỏe."],
          ["老师很好。", "Lǎoshī hěn hǎo.", "Cô giáo rất tốt."],
          ["你们很好。", "Nǐmen hěn hǎo.", "Các bạn rất tốt."]
        ],
        mistakes: [
          ["我是很好。", "我很好。", "Tính từ làm vị ngữ không dùng 是."],
          ["我好。", "我很好。", "Thiếu 很: câu nghe như so sánh ngầm."]
        ]
      },
      {
        title: "也 (cũng) và 们 (số nhiều)",
        structure: "S + **也** + (很) + Adj / V",
        explain: [
          "**也** đứng **sau chủ ngữ, trước** động từ/tính từ. Khi có cả 很 thì thứ tự là **也 → 很**.",
          "**们** thêm sau đại từ/danh từ chỉ người để chỉ số nhiều: 你 → 你们; 老师 → 老师们."
        ],
        examples: [
          ["我也很好。", "Wǒ yě hěn hǎo.", "Tôi cũng rất khỏe."],
          ["你也好吗？", "Nǐ yě hǎo ma?", "Bạn cũng khỏe chứ?"],
          ["你们也很好。", "Nǐmen yě hěn hǎo.", "Các bạn cũng rất tốt."]
        ],
        mistakes: [
          ["我很也好。", "我也很好。", "也 phải đứng trước 很."],
          ["我好也。", "我也好。", "也 không đứng cuối câu."]
        ]
      }
    ] },
    { type: "text", title: "Cách chào thêm", body: [
      { table: { head: ["Tình huống", "Câu chào", "Pinyin"], rows: [
        ["Chào chung", "你好！", "Nǐ hǎo!"],
        ["Lịch sự, với người lớn tuổi/cần tôn trọng", "您好！", "Nín hǎo!"],
        ["Buổi sáng", "早上好！", "Zǎoshang hǎo!"],
        ["Buổi tối", "晚上好！", "Wǎnshang hǎo!"],
        ["Chào thầy cô", "老师好！", "Lǎoshī hǎo!"]
      ] } },
      { tip: "**您** là dạng lịch sự của **你**. Khi nghi ngờ nên dùng 您 với người lớn tuổi hoặc người mới gặp ở bối cảnh trang trọng." }
    ] },
    { type: "exercises", items: [
      { t: "choice", q: "“你好” có nghĩa là gì?", opts: ["Xin chào", "Tạm biệt", "Cảm ơn", "Xin lỗi"], a: 0, why: "你 (bạn) + 好 (tốt) = lời chào." },
      { t: "choice", q: "老师 (lǎoshī — lão sư) nghĩa là gì?", opts: ["Thầy/cô giáo", "Bạn học", "Học sinh", "Bác sĩ"], a: 0, why: "老师 = thầy/cô giáo." },
      { t: "choice", q: "Chọn câu hỏi “Bạn khỏe không?” đúng ngữ pháp:", opts: ["你好吗？", "吗你好？", "你吗好？", "你好是吗？"], a: 0, why: "吗 đứng cuối câu." },
      { t: "choice", q: "我___很好。（Tôi **cũng** rất khỏe）", opts: ["也", "们", "吗", "呢"], a: 0, why: "也 = cũng, đứng trước 很." },
      { t: "choice", q: "Chọn câu **SAI**:", opts: ["我很好。", "我是很好。", "我也很好。", "你们好。"], a: 1, why: "Tính từ làm vị ngữ không dùng 是." },
      { t: "order", q: "Sắp xếp: **Tôi cũng rất khỏe.**", words: ["我", "也", "很", "好"] },
      { t: "order", q: "Sắp xếp: **Bạn khỏe không?**", words: ["你", "好", "吗"] },
      { t: "listen", say: "早上好", q: "Nghe và chọn nghĩa đúng:", opts: ["Chào buổi sáng", "Chào buổi tối", "Tạm biệt", "Cảm ơn"], a: 0, why: "早上 = buổi sáng." }
    ] }
  ]
});

/* ======================= Unit 1 — Bài 2: Cảm ơn, xin lỗi, tạm biệt ======================= */
CC.addLesson({
  id: "h1-1-2",
  title: "Cảm ơn, xin lỗi, tạm biệt",
  minutes: 30,
  objectives: [
    "Nói cảm ơn, xin lỗi, tạm biệt và đáp lại đúng ngữ cảnh",
    "Dùng 不 để phủ định, nhớ biến điệu bù → bú",
    "Hẹn gặp bằng cấu trúc “thời điểm + 见”"
  ],
  sections: [
    { type: "dialogue", title: "Hội thoại", groups: [
      { title: "1. Cảm ơn", lines: [
        ["A", "谢谢！", "Xièxie!", "Cảm ơn!"],
        ["B", "不客气！", "Bú kèqi!", "Không có chi!"]
      ] },
      { title: "2. Xin lỗi", lines: [
        ["A", "对不起，老师！", "Duìbuqǐ, lǎoshī!", "Em xin lỗi thầy/cô!"],
        ["老师", "没关系。", "Méi guānxi.", "Không sao đâu."]
      ] },
      { title: "3. Tạm biệt", lines: [
        ["A", "老师再见！", "Lǎoshī zàijiàn!", "Em chào thầy/cô, hẹn gặp lại ạ!"],
        ["老师", "明天见！", "Míngtiān jiàn!", "Mai gặp lại nhé!"],
        ["A", "明天见！", "Míngtiān jiàn!", "Mai gặp lại ạ!"]
      ] }
    ] },
    { type: "vocab", title: "Từ vựng", items: [
      ["谢谢", "xièxie", "tạ tạ", "động từ", "cảm ơn", "谢谢你！", "Xièxie nǐ!", "Cảm ơn bạn!"],
      ["不客气", "bù kèqi", "bất khách khí", "cụm từ", "đừng khách sáo, không có chi", "不客气！", "Bú kèqi!", "Không có chi!"],
      ["对不起", "duìbuqǐ", "đối bất khởi", "cụm từ", "xin lỗi", "对不起，老师。", "Duìbuqǐ, lǎoshī.", "Em xin lỗi thầy/cô."],
      ["没关系", "méi guānxi", "một quan hệ", "cụm từ", "không sao đâu", "没关系！", "Méi guānxi!", "Không sao đâu!"],
      ["再见", "zàijiàn", "tái kiến", "động từ", "tạm biệt (hẹn gặp lại)", "老师再见！", "Lǎoshī zàijiàn!", "Chào thầy/cô, hẹn gặp lại!"],
      ["请问", "qǐngwèn", "thỉnh vấn", "động từ", "xin hỏi", "请问，你好吗？", "Qǐngwèn, nǐ hǎo ma?", "Xin hỏi, bạn khỏe không?"],
      ["不", "bù", "bất", "phó từ", "không", "我不好。", "Wǒ bù hǎo.", "Tôi không khỏe."],
      ["明天", "míngtiān", "minh thiên", "danh từ", "ngày mai", "明天见！", "Míngtiān jiàn!", "Mai gặp nhé!"],
      ["见", "jiàn", "kiến", "động từ", "gặp", "晚上见！", "Wǎnshang jiàn!", "Tối gặp nhé!"]
    ] },
    { type: "text", title: "Đáp lời đúng ngữ cảnh", body: [
      { table: { head: ["Người kia nói", "Bạn đáp", "Ý nghĩa"], rows: [
        ["谢谢！", "不客气！", "Cảm ơn! → Không có chi!"],
        ["对不起！", "没关系！", "Xin lỗi! → Không sao!"],
        ["再见！", "再见！/ 明天见！", "Tạm biệt! → Tạm biệt!/Mai gặp!"]
      ] } },
      { tip: "Đừng nhầm: **不客气** chỉ đáp lại lời cảm ơn; **没关系** chỉ đáp lại lời xin lỗi." },
      "Về văn hóa: với người thân trong gia đình hoặc bạn rất thân, người Trung Quốc thường ít nói 谢谢 hơn người Việt hay nghĩ; nói quá nhiều đôi khi tạo cảm giác xa cách. Với người lạ, nhân viên phục vụ, người lớn tuổi thì nói 谢谢 là lịch sự."
    ] },
    { type: "grammar", title: "Ngữ pháp", points: [
      {
        title: "Phủ định với 不",
        structure: "S + **不** + Adj / V",
        explain: [
          "**不** (bù) đặt trước tính từ hoặc động từ để phủ định: 不好 (không tốt).",
          "**Biến điệu:** 不 đứng trước âm tiết **thanh 4** thì đọc thành **bú**: 不客气 → bú kèqi. Trước thanh 1, 2, 3 vẫn đọc **bù**: 不好 bù hǎo."
        ],
        examples: [
          ["我不好。", "Wǒ bù hǎo.", "Tôi không khỏe."],
          ["不客气。", "Bú kèqi.", "Đừng khách sáo."],
          ["你不好吗？", "Nǐ bù hǎo ma?", "Bạn không khỏe à?"]
        ],
        mistakes: [["不客气 đọc là bù kèqi", "bú kèqi", "Quên biến điệu: 不 + thanh 4 → bú."]]
      },
      {
        title: "Hẹn gặp: thời điểm + 见",
        structure: "**Thời điểm** + **见**！",
        explain: [
          "Đặt một thời điểm trước **见** để hẹn lần gặp tiếp theo: 明天见 (mai gặp), 晚上见 (tối gặp).",
          "**再见** là “tạm biệt”, nghĩa đen là “lại gặp” (再 = lại, nữa) — nói chung chung, không hẹn giờ cụ thể."
        ],
        examples: [
          ["明天见！", "Míngtiān jiàn!", "Mai gặp lại nhé!"],
          ["晚上见！", "Wǎnshang jiàn!", "Tối gặp nhé!"],
          ["老师再见！", "Lǎoshī zàijiàn!", "Em chào thầy/cô ạ!"]
        ],
        mistakes: [["见明天！", "明天见！", "Thời điểm đứng **trước** 见."]]
      }
    ] },
    { type: "exercises", items: [
      { t: "choice", q: "Ai đó nói **谢谢！** — bạn đáp lại:", opts: ["不客气！", "没关系！", "再见！", "对不起！"], a: 0, why: "Đáp lời cảm ơn: 不客气." },
      { t: "choice", q: "Ai đó nói **对不起！** — bạn đáp lại:", opts: ["不客气！", "没关系！", "谢谢！", "明天见！"], a: 1, why: "Đáp lời xin lỗi: 没关系." },
      { t: "choice", q: "不客气 đọc đúng là:", opts: ["bù kèqi", "bú kèqi", "bǔ kèqi", "bū kèqi"], a: 1, why: "不 + thanh 4 (客 kè) → bú." },
      { t: "choice", q: "“明天见” nghĩa là gì?", opts: ["Mai gặp lại", "Chào buổi sáng", "Cảm ơn nhé", "Tối nay gặp"], a: 0, why: "明天 = ngày mai, 见 = gặp." },
      { t: "choice", q: "Chọn câu **SAI**:", opts: ["明天见！", "见明天！", "晚上见！", "再见！"], a: 1, why: "Thời điểm phải đứng trước 见." },
      { t: "order", q: "Sắp xếp: **Cảm ơn thầy/cô!**", words: ["谢谢", "老师"] },
      { t: "order", q: "Sắp xếp: **Tôi không khỏe.**", words: ["我", "不", "好"] },
      { t: "listen", say: "对不起", q: "Nghe và chọn nghĩa đúng:", opts: ["Xin lỗi", "Cảm ơn", "Tạm biệt", "Không sao"], a: 0, why: "对不起 = xin lỗi." },
      { t: "listen", say: "再见", q: "Nghe và chọn nghĩa đúng:", opts: ["Cảm ơn", "Tạm biệt", "Xin chào", "Xin lỗi"], a: 1, why: "再见 = tạm biệt." }
    ] }
  ]
});

/* ======================= Unit 2 — Bài 1: Tên của bạn ======================= */
CC.addLesson({
  id: "h1-2-1",
  title: "Bạn tên là gì?",
  minutes: 35,
  objectives: [
    "Hỏi và nói tên, họ của mình và người khác",
    "Dùng từ để hỏi 什么 (không thêm 吗)",
    "Dùng 是 nối hai danh từ và phủ định bằng 不是"
  ],
  sections: [
    { type: "dialogue", title: "Hội thoại", groups: [
      { title: "1. Làm quen", lines: [
        ["A", "你好！你叫什么名字？", "Nǐ hǎo! Nǐ jiào shénme míngzi?", "Chào bạn! Bạn tên là gì?"],
        ["B", "我叫王明。你呢？", "Wǒ jiào Wáng Míng. Nǐ ne?", "Mình tên Vương Minh. Còn bạn?"],
        ["A", "我叫李华。认识你很高兴！", "Wǒ jiào Lǐ Huá. Rènshi nǐ hěn gāoxìng!", "Mình tên Lý Hoa. Rất vui được làm quen!"],
        ["B", "我也很高兴。", "Wǒ yě hěn gāoxìng.", "Mình cũng rất vui."]
      ] },
      { title: "2. Hỏi lịch sự", lines: [
        ["A", "请问，您贵姓？", "Qǐngwèn, nín guìxìng?", "Xin hỏi, ngài họ gì ạ?"],
        ["B", "我姓王，叫王明。", "Wǒ xìng Wáng, jiào Wáng Míng.", "Tôi họ Vương, tên là Vương Minh."]
      ] },
      { title: "3. Nói về người khác", lines: [
        ["A", "他叫什么名字？", "Tā jiào shénme míngzi?", "Anh ấy tên là gì?"],
        ["B", "他叫王明，她叫李华。", "Tā jiào Wáng Míng, tā jiào Lǐ Huá.", "Anh ấy tên Vương Minh, cô ấy tên Lý Hoa."]
      ] }
    ] },
    { type: "vocab", title: "Từ vựng", items: [
      ["叫", "jiào", "khiếu", "động từ", "gọi, tên là", "我叫王明。", "Wǒ jiào Wáng Míng.", "Tôi tên là Vương Minh."],
      ["什么", "shénme", "thập ma", "đại từ", "gì, cái gì", "你叫什么名字？", "Nǐ jiào shénme míngzi?", "Bạn tên là gì?"],
      ["名字", "míngzi", "danh tự", "danh từ", "tên", "他叫什么名字？", "Tā jiào shénme míngzi?", "Anh ấy tên là gì?"],
      ["姓", "xìng", "tính", "động từ", "họ; mang họ", "我姓李。", "Wǒ xìng Lǐ.", "Tôi họ Lý."],
      ["贵姓", "guìxìng", "quý tính", "cụm từ", "quý danh (hỏi họ lịch sự)", "您贵姓？", "Nín guìxìng?", "Ngài họ gì ạ?"],
      ["是", "shì", "thị", "động từ", "là", "他是老师。", "Tā shì lǎoshī.", "Anh ấy là giáo viên."],
      ["认识", "rènshi", "nhận thức", "động từ", "quen biết, làm quen", "认识你，我很高兴。", "Rènshi nǐ, wǒ hěn gāoxìng.", "Được quen bạn, tôi rất vui."],
      ["高兴", "gāoxìng", "cao hứng", "tính từ", "vui", "我很高兴。", "Wǒ hěn gāoxìng.", "Tôi rất vui."],
      ["他", "tā", "tha", "đại từ", "anh ấy, ông ấy", "他叫王明。", "Tā jiào Wáng Míng.", "Anh ấy tên là Vương Minh."],
      ["她", "tā", "tha", "đại từ", "cô ấy, bà ấy", "她是老师。", "Tā shì lǎoshī.", "Cô ấy là giáo viên."]
    ] },
    { type: "text", title: "Họ của người Việt trong tiếng Trung", body: [
      "Khi giới thiệu tên mình bằng tiếng Trung, bạn có thể dùng **chữ Hán tương ứng** của họ (đọc theo pinyin):",
      { table: { head: ["Họ", "Chữ Hán", "Pinyin"], rows: [
        ["Nguyễn", "阮", "Ruǎn"],
        ["Trần", "陈", "Chén"],
        ["Lê", "黎", "Lí"],
        ["Phạm", "范", "Fàn"],
        ["Hoàng", "黄", "Huáng"],
        ["Ngô", "吴", "Wú"]
      ] } },
      { tip: "Trong tiếng Trung, **họ đứng trước, tên đứng sau** (giống tiếng Việt): 王明 = họ Vương (王), tên Minh (明). Người Trung Quốc thường gọi đủ cả họ tên hoặc gọi tên." }
    ] },
    { type: "grammar", title: "Ngữ pháp", points: [
      {
        title: "Từ để hỏi 什么",
        structure: "S + 叫 + **什么名字**？",
        explain: [
          "Từ để hỏi (什么, 哪, 谁…) **đứng đúng vị trí của thông tin cần hỏi**, không đảo lên đầu câu.",
          "Câu có từ để hỏi **không thêm 吗**. Trả lời bằng cách thay 什么名字 bằng tên: 我叫王明。"
        ],
        examples: [
          ["你叫什么名字？", "Nǐ jiào shénme míngzi?", "Bạn tên là gì?"],
          ["他叫什么名字？", "Tā jiào shénme míngzi?", "Anh ấy tên là gì?"],
          ["她叫什么名字？", "Tā jiào shénme míngzi?", "Cô ấy tên là gì?"]
        ],
        mistakes: [
          ["你叫什么名字吗？", "你叫什么名字？", "Câu có từ để hỏi không thêm 吗."],
          ["什么你叫名字？", "你叫什么名字？", "Giữ nguyên trật tự câu trần thuật."]
        ]
      },
      {
        title: "姓 và 叫",
        structure: "我**姓** + Họ。我**叫** + (Họ +) Tên。",
        explain: [
          "**姓** chỉ **họ**; **叫** chỉ **tên** (thường kèm cả họ).",
          "Hỏi lịch sự: **您贵姓？** (hỏi họ). Chữ **贵** là kính ngữ, chỉ dùng khi hỏi **người khác**; nói về mình dùng 我姓…"
        ],
        examples: [
          ["我姓王。", "Wǒ xìng Wáng.", "Tôi họ Vương."],
          ["我叫王明。", "Wǒ jiào Wáng Míng.", "Tôi tên là Vương Minh."],
          ["您贵姓？", "Nín guìxìng?", "Ngài họ gì ạ?"]
        ],
        mistakes: [["我贵姓王。", "我姓王。", "贵 là kính ngữ cho người khác, không dùng cho mình."]]
      },
      {
        title: "是 — “là”",
        structure: "A + **是** + B　·　A + **不是** + B",
        explain: [
          "**是** nối hai danh từ: A là B. Phủ định là **不是** (đọc bú shì).",
          "Nhắc lại: **tính từ không dùng 是** — nói 我很高兴, không nói 我是高兴."
        ],
        examples: [
          ["他是老师。", "Tā shì lǎoshī.", "Anh ấy là giáo viên."],
          ["她不是老师。", "Tā bú shì lǎoshī.", "Cô ấy không phải giáo viên."],
          ["我很高兴。", "Wǒ hěn gāoxìng.", "Tôi rất vui."]
        ],
        mistakes: [["我是高兴。", "我很高兴。", "Tính từ không cần 是."]]
      }
    ] },
    { type: "exercises", items: [
      { t: "choice", q: "“你叫什么名字？” hỏi điều gì?", opts: ["Tên bạn là gì", "Bạn bao nhiêu tuổi", "Bạn ở đâu", "Bạn khỏe không"], a: 0, why: "名字 = tên." },
      { t: "choice", q: "Chọn câu hỏi tên **đúng ngữ pháp**:", opts: ["你叫什么名字？", "你叫什么名字吗？", "你什么叫名字？", "什么你叫名字？"], a: 0, why: "Có từ để hỏi thì không thêm 吗, và giữ nguyên trật tự." },
      { t: "choice", q: "我___王，叫王明。", opts: ["姓", "是", "叫", "也"], a: 0, why: "姓 chỉ họ: 我姓王." },
      { t: "choice", q: "Hỏi họ của người lớn tuổi một cách lịch sự:", opts: ["您贵姓？", "你姓吗？", "我贵姓？", "他贵姓我？"], a: 0, why: "您贵姓？là câu hỏi họ lịch sự." },
      { t: "choice", q: "Chọn câu **SAI**:", opts: ["他是老师。", "我是高兴。", "她不是老师。", "我姓王。"], a: 1, why: "Tính từ làm vị ngữ không dùng 是: 我很高兴." },
      { t: "order", q: "Sắp xếp: **Tôi tên là Vương Minh.**", words: ["我", "叫", "王明"] },
      { t: "order", q: "Sắp xếp: **Bạn tên là gì?**", words: ["你", "叫", "什么", "名字"] },
      { t: "order", q: "Sắp xếp: **Cô ấy không phải giáo viên.**", words: ["她", "不是", "老师"] },
      { t: "listen", say: "很高兴认识你", q: "Nghe và chọn nghĩa đúng:", opts: ["Rất vui được quen bạn", "Bạn tên là gì", "Tạm biệt", "Mai gặp lại"], a: 0, why: "高兴 = vui, 认识 = quen biết." }
    ] }
  ]
});

/* ======================= Unit 2 — Bài 2: Quốc tịch & nghề nghiệp ======================= */
CC.addLesson({
  id: "h1-2-2",
  title: "Bạn là người nước nào?",
  minutes: 35,
  objectives: [
    "Nói và hỏi quốc tịch, nghề nghiệp",
    "Trả lời câu hỏi “是…吗？” bằng 是 / 不是",
    "Dùng 都 (đều) và thứ tự 也都"
  ],
  sections: [
    { type: "dialogue", title: "Hội thoại", groups: [
      { title: "1. Quốc tịch", lines: [
        ["A", "你是哪国人？", "Nǐ shì nǎ guó rén?", "Bạn là người nước nào?"],
        ["B", "我是越南人。你呢？", "Wǒ shì Yuènán rén. Nǐ ne?", "Mình là người Việt Nam. Còn bạn?"],
        ["A", "我是中国人。", "Wǒ shì Zhōngguó rén.", "Mình là người Trung Quốc."]
      ] },
      { title: "2. Nghề nghiệp", lines: [
        ["A", "你是学生吗？", "Nǐ shì xuésheng ma?", "Bạn là học sinh à?"],
        ["B", "是，我是学生。你也是学生吗？", "Shì, wǒ shì xuésheng. Nǐ yě shì xuésheng ma?", "Vâng, mình là học sinh. Bạn cũng là học sinh à?"],
        ["A", "不是，我是老师。", "Bú shì, wǒ shì lǎoshī.", "Không, mình là giáo viên."]
      ] },
      { title: "3. Cả nhóm", lines: [
        ["A", "你们是同学吗？", "Nǐmen shì tóngxué ma?", "Các bạn là bạn học à?"],
        ["B", "是，我们都是学生。", "Shì, wǒmen dōu shì xuésheng.", "Vâng, chúng mình đều là học sinh."]
      ] }
    ] },
    { type: "vocab", title: "Từ vựng", items: [
      ["国", "guó", "quốc", "danh từ", "nước, quốc gia", "你是哪国人？", "Nǐ shì nǎ guó rén?", "Bạn là người nước nào?"],
      ["人", "rén", "nhân", "danh từ", "người", "我是越南人。", "Wǒ shì Yuènán rén.", "Tôi là người Việt Nam."],
      ["中国", "Zhōngguó", "Trung Quốc", "danh từ", "Trung Quốc", "他是中国人。", "Tā shì Zhōngguó rén.", "Anh ấy là người Trung Quốc."],
      ["越南", "Yuènán", "Việt Nam", "danh từ", "Việt Nam", "我们都是越南人。", "Wǒmen dōu shì Yuènán rén.", "Chúng tôi đều là người Việt Nam."],
      ["美国", "Měiguó", "Mỹ quốc", "danh từ", "Mỹ, Hoa Kỳ", "她是美国人。", "Tā shì Měiguó rén.", "Cô ấy là người Mỹ."],
      ["日本", "Rìběn", "Nhật Bản", "danh từ", "Nhật Bản", "他不是日本人。", "Tā bú shì Rìběn rén.", "Anh ấy không phải người Nhật."],
      ["韩国", "Hánguó", "Hàn Quốc", "danh từ", "Hàn Quốc", "我不是韩国人。", "Wǒ bú shì Hánguó rén.", "Tôi không phải người Hàn Quốc."],
      ["哪", "nǎ", "nả", "đại từ", "nào", "你是哪国人？", "Nǐ shì nǎ guó rén?", "Bạn là người nước nào?"],
      ["学生", "xuésheng", "học sinh", "danh từ", "học sinh, sinh viên", "我是学生。", "Wǒ shì xuésheng.", "Tôi là học sinh."],
      ["医生", "yīshēng", "y sinh", "danh từ", "bác sĩ", "他是医生。", "Tā shì yīshēng.", "Anh ấy là bác sĩ."],
      ["都", "dōu", "đô", "phó từ", "đều", "我们都是学生。", "Wǒmen dōu shì xuésheng.", "Chúng tôi đều là học sinh."],
      ["我们", "wǒmen", "ngã môn", "đại từ", "chúng tôi, chúng ta", "我们是同学。", "Wǒmen shì tóngxué.", "Chúng tôi là bạn học."]
    ] },
    { type: "text", title: "Mở rộng: tên một số nước", body: [
      "Nhiều tên nước trong tiếng Trung **gần với âm Hán Việt**:",
      { table: { head: ["Chữ Hán", "Pinyin", "Hán Việt", "Nước"], rows: [
        ["英国", "Yīngguó", "Anh quốc", "Anh"],
        ["法国", "Fǎguó", "Pháp quốc", "Pháp"],
        ["德国", "Déguó", "Đức quốc", "Đức"],
        ["泰国", "Tàiguó", "Thái quốc", "Thái Lan"]
      ] } },
      { tip: "Công thức: **tên nước + 人** = người nước đó (越南人, 中国人, 美国人). Muốn nói “ngôn ngữ” hay “giáo viên người…” sẽ học ở các bài sau." }
    ] },
    { type: "grammar", title: "Ngữ pháp", points: [
      {
        title: "Quốc gia + 人",
        structure: "S + 是 + **Tên nước + 人**",
        explain: [
          "Ghép tên nước với **人** để chỉ người của nước đó: 越南人, 中国人, 美国人.",
          "Hỏi quốc tịch: **你是哪国人？** (哪 = nào, 哪国 = nước nào)."
        ],
        examples: [
          ["我是越南人。", "Wǒ shì Yuènán rén.", "Tôi là người Việt Nam."],
          ["她是美国人。", "Tā shì Měiguó rén.", "Cô ấy là người Mỹ."],
          ["你是哪国人？", "Nǐ shì nǎ guó rén?", "Bạn là người nước nào?"]
        ],
        mistakes: [["我是越南。", "我是越南人。", "Cần thêm 人: “Tôi là Việt Nam” là sai."]]
      },
      {
        title: "Câu hỏi 是…吗 và cách đáp",
        structure: "你是……吗？ → **是**，…… / **不是**，……",
        explain: [
          "Tiếng Trung không có từ “vâng/không” độc lập như tiếng Việt: thường **lặp lại động từ** để đáp.",
          "Khẳng định: **是**. Phủ định: **不是** (đọc bú shì)."
        ],
        examples: [
          ["你是学生吗？", "Nǐ shì xuésheng ma?", "Bạn là học sinh à?"],
          ["是，我是学生。", "Shì, wǒ shì xuésheng.", "Vâng, tôi là học sinh."],
          ["不是，我不是学生。", "Bú shì, wǒ bú shì xuésheng.", "Không, tôi không phải học sinh."]
        ],
        mistakes: [["你是学生吗？— 好。", "你是学生吗？— 是。", "Không dùng 好 (tốt/được) để đáp “vâng”."]]
      },
      {
        title: "都 — “đều”",
        structure: "S + **都** + V / Adj",
        explain: [
          "**都** đứng **trước động từ/tính từ**, nói về **tất cả** đối tượng đã nêu ở trước.",
          "Khi có cả 也 và 都, thứ tự là **也 → 都** (也都)."
        ],
        examples: [
          ["我们都是学生。", "Wǒmen dōu shì xuésheng.", "Chúng tôi đều là học sinh."],
          ["你们都是越南人吗？", "Nǐmen dōu shì Yuènán rén ma?", "Các bạn đều là người Việt Nam à?"],
          ["我们也都是学生。", "Wǒmen yě dōu shì xuésheng.", "Chúng tôi cũng đều là học sinh."]
        ],
        mistakes: [
          ["我们是都学生。", "我们都是学生。", "都 đứng trước 是."],
          ["我们都也是学生。", "我们也都是学生。", "Thứ tự là 也 → 都."]
        ]
      }
    ] },
    { type: "exercises", items: [
      { t: "choice", q: "“你是哪国人？” hỏi điều gì?", opts: ["Bạn là người nước nào", "Bạn tên là gì", "Bạn bao nhiêu tuổi", "Bạn khỏe không"], a: 0, why: "哪国人 = người nước nào." },
      { t: "choice", q: "“Tôi là người Việt Nam” viết đúng là:", opts: ["我是越南人。", "我是越南。", "我越南人是。", "是我越南人。"], a: 0, why: "Cần có 人 sau tên nước." },
      { t: "choice", q: "你是学生吗？ — Đáp **phủ định** đúng:", opts: ["不是，我不是学生。", "不好，我不学生。", "没是，我是学生。", "不吗，我是学生。"], a: 0, why: "Lặp lại động từ: 不是." },
      { t: "choice", q: "我们___是学生。（Chúng tôi **đều** là học sinh）", opts: ["都", "也", "吗", "哪"], a: 0, why: "都 = đều." },
      { t: "choice", q: "日本 (Rìběn — Nhật Bản) là nước nào?", opts: ["Nhật Bản", "Hàn Quốc", "Mỹ", "Trung Quốc"], a: 0, why: "日本 = Nhật Bản." },
      { t: "choice", q: "医生 (yīshēng — y sinh) nghĩa là:", opts: ["Bác sĩ", "Học sinh", "Giáo viên", "Bạn học"], a: 0, why: "医生 = bác sĩ." },
      { t: "order", q: "Sắp xếp: **Chúng tôi cũng đều là học sinh.**", words: ["我们", "也", "都", "是", "学生"] },
      { t: "order", q: "Sắp xếp: **Bạn là người nước nào?**", words: ["你", "是", "哪", "国", "人"] },
      { t: "listen", say: "我是越南人", q: "Nghe và chọn nghĩa đúng:", opts: ["Tôi là người Việt Nam", "Tôi là người Trung Quốc", "Tôi là học sinh", "Tôi là giáo viên"], a: 0, why: "越南人 = người Việt Nam." }
    ] }
  ]
});

/* ======================= Unit 3 — Bài 1: Gia đình ======================= */
CC.addLesson({
  id: "h1-3-1",
  title: "Gia đình của bạn",
  minutes: 40,
  objectives: [
    "Gọi tên các thành viên trong gia đình",
    "Dùng 有 / 没有 để nói có / không có",
    "Dùng số + lượng từ + danh từ (一个姐姐, 四口人) và 和"
  ],
  sections: [
    { type: "dialogue", title: "Hội thoại", groups: [
      { title: "1. Nhà có mấy người?", lines: [
        ["A", "你家有几口人？", "Nǐ jiā yǒu jǐ kǒu rén?", "Nhà bạn có mấy người?"],
        ["B", "我家有四口人：爸爸、妈妈、姐姐和我。", "Wǒ jiā yǒu sì kǒu rén: bàba, māma, jiějie hé wǒ.", "Nhà mình có bốn người: bố, mẹ, chị gái và mình."],
        ["A", "你有哥哥吗？", "Nǐ yǒu gēge ma?", "Bạn có anh trai không?"],
        ["B", "没有。我有一个姐姐，没有哥哥。", "Méiyǒu. Wǒ yǒu yí gè jiějie, méiyǒu gēge.", "Không. Mình có một chị gái, không có anh trai."]
      ] },
      { title: "2. Anh chị em", lines: [
        ["A", "你有弟弟吗？", "Nǐ yǒu dìdi ma?", "Bạn có em trai không?"],
        ["B", "有，我有一个弟弟，也有一个妹妹。", "Yǒu, wǒ yǒu yí gè dìdi, yě yǒu yí gè mèimei.", "Có, mình có một em trai và cũng có một em gái."]
      ] }
    ] },
    { type: "vocab", title: "Từ vựng", items: [
      ["家", "jiā", "gia", "danh từ", "nhà, gia đình", "我家有四口人。", "Wǒ jiā yǒu sì kǒu rén.", "Nhà tôi có bốn người."],
      ["爸爸", "bàba", "—", "danh từ", "bố, ba", "我爸爸是医生。", "Wǒ bàba shì yīshēng.", "Bố tôi là bác sĩ."],
      ["妈妈", "māma", "—", "danh từ", "mẹ", "我妈妈是老师。", "Wǒ māma shì lǎoshī.", "Mẹ tôi là giáo viên."],
      ["哥哥", "gēge", "ca ca", "danh từ", "anh trai", "我有一个哥哥。", "Wǒ yǒu yí gè gēge.", "Tôi có một anh trai."],
      ["姐姐", "jiějie", "tỷ tỷ", "danh từ", "chị gái", "我姐姐是学生。", "Wǒ jiějie shì xuésheng.", "Chị gái tôi là học sinh."],
      ["弟弟", "dìdi", "đệ đệ", "danh từ", "em trai", "我有一个弟弟。", "Wǒ yǒu yí gè dìdi.", "Tôi có một em trai."],
      ["妹妹", "mèimei", "muội muội", "danh từ", "em gái", "我妹妹很好。", "Wǒ mèimei hěn hǎo.", "Em gái tôi rất khỏe."],
      ["有", "yǒu", "hữu", "động từ", "có", "我有姐姐。", "Wǒ yǒu jiějie.", "Tôi có chị gái."],
      ["没有", "méiyǒu", "một hữu", "động từ", "không có", "我没有哥哥。", "Wǒ méiyǒu gēge.", "Tôi không có anh trai."],
      ["几", "jǐ", "kỷ", "đại từ", "mấy (số nhỏ)", "你家有几口人？", "Nǐ jiā yǒu jǐ kǒu rén?", "Nhà bạn có mấy người?"],
      ["口", "kǒu", "khẩu", "lượng từ", "(số người trong gia đình); miệng", "我家有四口人。", "Wǒ jiā yǒu sì kǒu rén.", "Nhà tôi có bốn người."],
      ["个", "gè", "cá", "lượng từ", "cái, chiếc, người… (lượng từ chung)", "我有一个姐姐。", "Wǒ yǒu yí gè jiějie.", "Tôi có một chị gái."],
      ["和", "hé", "hòa", "liên từ", "và", "爸爸和妈妈。", "Bàba hé māma.", "Bố và mẹ."],
      ["一", "yī", "nhất", "số từ", "một", "我有一个妹妹。", "Wǒ yǒu yí gè mèimei.", "Tôi có một em gái."],
      ["四", "sì", "tứ", "số từ", "bốn", "我家有四口人。", "Wǒ jiā yǒu sì kǒu rén.", "Nhà tôi có bốn người."]
    ] },
    { type: "text", title: "Ghi chú", body: [
      { ul: [
        "**Lặp âm tiết** (爸爸, 妈妈, 哥哥…) là cách gọi thân mật; âm tiết thứ hai đọc **thanh nhẹ**: bàba, māma, gēge.",
        "Tiếng Trung phân biệt **lớn tuổi hơn / nhỏ tuổi hơn**: 哥哥 / 姐姐 (anh, chị) và 弟弟 / 妹妹 (em trai, em gái).",
        "**几口人？** hỏi số thành viên trong gia đình; **几个人？** hỏi số người nói chung.",
        "Số đếm đầy đủ sẽ học kỹ ở Unit 4; ở đây bạn chỉ cần **一** và **四**."
      ] }
    ] },
    { type: "grammar", title: "Ngữ pháp", points: [
      {
        title: "有 và 没有",
        structure: "S + **有** + O　·　S + **没有** + O",
        explain: [
          "**有** = có. Phủ định của 有 là **没有** (méiyǒu) — **không bao giờ dùng “不有”**.",
          "Hỏi: 你有…吗？ Đáp: **有** / **没有**."
        ],
        examples: [
          ["我有姐姐。", "Wǒ yǒu jiějie.", "Tôi có chị gái."],
          ["我没有哥哥。", "Wǒ méiyǒu gēge.", "Tôi không có anh trai."],
          ["你有弟弟吗？", "Nǐ yǒu dìdi ma?", "Bạn có em trai không?"]
        ],
        mistakes: [["我不有哥哥。", "我没有哥哥。", "Phủ định của 有 luôn là 没有."]]
      },
      {
        title: "Số + lượng từ + danh từ",
        structure: "Số + **量词** + N",
        explain: [
          "Giữa số từ và danh từ **bắt buộc có lượng từ**: 一**个**姐姐, 四**口**人.",
          "**个** là lượng từ chung dùng được cho rất nhiều danh từ; **口** dùng cho số người trong **gia đình**.",
          "**几** hỏi số nhỏ (dưới 10): 几口人？几个姐姐？",
          "Biến điệu: 一 + 个 (thanh 4) → **yí gè**."
        ],
        examples: [
          ["我有一个姐姐。", "Wǒ yǒu yí gè jiějie.", "Tôi có một chị gái."],
          ["你家有几口人？", "Nǐ jiā yǒu jǐ kǒu rén?", "Nhà bạn có mấy người?"],
          ["我家有四口人。", "Wǒ jiā yǒu sì kǒu rén.", "Nhà tôi có bốn người."]
        ],
        mistakes: [["我有一姐姐。", "我有一个姐姐。", "Thiếu lượng từ 个 giữa số và danh từ."]]
      },
      {
        title: "和 — “và”",
        structure: "A **和** B　·　A、B **和** C",
        explain: [
          "**和** nối **danh từ/đại từ**: 爸爸和妈妈.",
          "Liệt kê nhiều mục: dùng dấu **、** giữa các mục, **和** đặt trước mục cuối: 爸爸、妈妈和我."
        ],
        examples: [
          ["爸爸和妈妈", "Bàba hé māma", "Bố và mẹ"],
          ["哥哥和姐姐", "Gēge hé jiějie", "Anh trai và chị gái"],
          ["爸爸、妈妈和我", "Bàba, māma hé wǒ", "Bố, mẹ và tôi"]
        ],
        mistakes: [["爸爸和妈妈和我。", "爸爸、妈妈和我。", "Không lặp 和 giữa mọi mục."]]
      }
    ] },
    { type: "exercises", items: [
      { t: "choice", q: "“你家有几口人？” hỏi điều gì?", opts: ["Nhà bạn có mấy người", "Bạn mấy tuổi", "Bạn ở nhà không", "Bạn là ai"], a: 0, why: "几口人 = mấy người (trong gia đình)." },
      { t: "choice", q: "Phủ định của 有 là:", opts: ["没有", "不有", "没", "不是"], a: 0, why: "有 chỉ phủ định bằng 没有." },
      { t: "choice", q: "Chọn câu **đúng**:", opts: ["我有一个姐姐。", "我有一姐姐。", "我有个一姐姐。", "我一个有姐姐。"], a: 0, why: "Số + lượng từ + danh từ." },
      { t: "choice", q: "“Anh trai” là:", opts: ["哥哥", "弟弟", "姐姐", "妹妹"], a: 0, why: "哥哥 = anh trai." },
      { t: "choice", q: "“Em gái” là:", opts: ["妹妹", "姐姐", "妈妈", "弟弟"], a: 0, why: "妹妹 = em gái." },
      { t: "choice", q: "一个 đọc là:", opts: ["yí gè", "yī gè", "yì gè", "yǐ gè"], a: 0, why: "一 + thanh 4 → yí." },
      { t: "order", q: "Sắp xếp: **Nhà tôi có bốn người.**", words: ["我", "家", "有", "四", "口", "人"] },
      { t: "order", q: "Sắp xếp: **Bố và mẹ.**", words: ["爸爸", "和", "妈妈"] },
      { t: "order", q: "Sắp xếp: **Tôi không có anh trai.**", words: ["我", "没有", "哥哥"] },
      { t: "listen", say: "你有哥哥吗", q: "Nghe và chọn nghĩa đúng:", opts: ["Bạn có anh trai không?", "Bạn có em gái không?", "Nhà bạn có mấy người?", "Bạn là người nước nào?"], a: 0, why: "哥哥 = anh trai." }
    ] }
  ]
});
