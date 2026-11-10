/*
 * Cấu trúc lộ trình hiển thị trên trang chủ.
 * Bài chưa có nội dung: để lessons rỗng và đặt soon: true.
 * Thêm bài mới: CC.addLesson({...}) trong file nội dung rồi thêm id vào mảng lessons của unit.
 */
CC.stages = [
  {
    id: "s0", title: "Chặng 0 — Nhập môn", sub: "Pinyin · Thanh điệu · Nét chữ · Hán Việt",
    time: "2–3 tuần", level: "Nhập môn",
    units: [
      { id: "s0-u1", title: "Ngữ âm & chữ viết", lessons: ["s0-l1", "s0-l2", "s0-l3", "s0-l4"] }
    ]
  },
  {
    id: "hsk1", title: "Chặng 1 — HSK 1", sub: "300 chữ · 500 từ · giao tiếp tối thiểu",
    time: "1,5–2 tháng", level: "Sơ cấp",
    units: [
      { id: "h1-u1", title: "Unit 1 — Chào hỏi, cảm ơn, xin lỗi", lessons: ["h1-1-1", "h1-1-2"] },
      { id: "h1-u2", title: "Unit 2 — Giới thiệu bản thân", lessons: ["h1-2-1", "h1-2-2"] },
      { id: "h1-u3", title: "Unit 3 — Gia đình", lessons: ["h1-3-1"] },
      { id: "h1-u4", title: "Unit 4 — Số đếm, tuổi, tiền", lessons: [], soon: true },
      { id: "h1-u5", title: "Unit 5 — Ngày tháng, giờ giấc", lessons: [], soon: true },
      { id: "h1-u6", title: "Unit 6 — Ăn uống, gọi món", lessons: [], soon: true },
      { id: "h1-u7", title: "Unit 7 — Mua sắm, hỏi giá", lessons: [], soon: true },
      { id: "h1-u8", title: "Unit 8 — Vị trí, phương hướng", lessons: [], soon: true },
      { id: "h1-u9", title: "Unit 9 — Thời tiết", lessons: [], soon: true },
      { id: "h1-u10", title: "Unit 10 — Sở thích, kế hoạch", lessons: [], soon: true }
    ]
  },
  {
    id: "hsk2", title: "Chặng 2 — HSK 2", sub: "600 chữ · 1.272 từ · kể việc đã làm, so sánh",
    time: "2 tháng", level: "Sơ cấp",
    units: [{ id: "h2-soon", title: "Sắp có", lessons: [], soon: true }]
  },
  {
    id: "hsk3", title: "Chặng 3 — HSK 3", sub: "900 chữ · 2.245 từ · xử lý tình huống đời sống",
    time: "3 tháng", level: "Sơ cấp",
    units: [{ id: "h3-soon", title: "Sắp có", lessons: [], soon: true }]
  },
  {
    id: "hsk4", title: "Chặng 4 — HSK 4", sub: "1.200 chữ · 3.245 từ · thảo luận chủ đề xã hội",
    time: "4–5 tháng", level: "Trung cấp",
    units: [{ id: "h4-soon", title: "Sắp có", lessons: [], soon: true }]
  },
  {
    id: "hsk5", title: "Chặng 5 — HSK 5", sub: "1.500 chữ · 4.316 từ · đọc báo, trình bày quan điểm",
    time: "5–6 tháng", level: "Trung cấp",
    units: [{ id: "h5-soon", title: "Sắp có", lessons: [], soon: true }]
  },
  {
    id: "hsk6", title: "Chặng 6 — HSK 6", sub: "1.800 chữ · 5.456 từ · tranh luận, dịch đoạn văn",
    time: "6–8 tháng", level: "Trung cấp",
    units: [{ id: "h6-soon", title: "Sắp có", lessons: [], soon: true }]
  },
  {
    id: "hsk79", title: "Chặng 7 — HSK 7–9", sub: "3.000 chữ · 11.092 từ · học thuật, chuyên môn",
    time: "1–2 năm", level: "Cao cấp",
    units: [{ id: "h79-soon", title: "Sắp có", lessons: [], soon: true }]
  }
];
