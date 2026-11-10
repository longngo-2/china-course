/*
 * Bộ chữ luyện viết. Mỗi chữ: [chữ, pinyin, Hán Việt, nghĩa].
 * Thêm bộ mới: thêm một phần tử vào CHAR_SETS (id không dấu, duy nhất).
 * Số nét và thứ tự nét lấy tự động từ hanzi-writer-data, không cần nhập.
 */
window.CHAR_SETS = [
  {
    id: "nhap-mon",
    name: "Nhập môn — 20 chữ cơ bản",
    chars: [
      ["人", "rén", "nhân", "người"],
      ["大", "dà", "đại", "to, lớn"],
      ["口", "kǒu", "khẩu", "miệng"],
      ["日", "rì", "nhật", "mặt trời, ngày"],
      ["月", "yuè", "nguyệt", "mặt trăng, tháng"],
      ["山", "shān", "sơn", "núi"],
      ["水", "shuǐ", "thủy", "nước"],
      ["火", "huǒ", "hỏa", "lửa"],
      ["木", "mù", "mộc", "cây, gỗ"],
      ["女", "nǚ", "nữ", "nữ, phụ nữ"],
      ["子", "zǐ", "tử", "con"],
      ["手", "shǒu", "thủ", "tay"],
      ["心", "xīn", "tâm", "tim, lòng"],
      ["目", "mù", "mục", "mắt"],
      ["田", "tián", "điền", "ruộng"],
      ["土", "tǔ", "thổ", "đất"],
      ["中", "zhōng", "trung", "giữa"],
      ["上", "shàng", "thượng", "trên"],
      ["下", "xià", "hạ", "dưới"],
      ["小", "xiǎo", "tiểu", "nhỏ"]
    ]
  },
  {
    id: "bo-thu",
    name: "Bộ thủ biến thể",
    chars: [
      ["亻", "(人) rén", "nhân đứng", "người"],
      ["氵", "(水) shuǐ", "ba chấm thủy", "nước"],
      ["扌", "(手) shǒu", "thủ", "tay"],
      ["忄", "(心) xīn", "tâm đứng", "tình cảm"],
      ["讠", "(言) yán", "ngôn", "lời nói"],
      ["钅", "(金) jīn", "kim", "kim loại"],
      ["饣", "(食) shí", "thực", "ăn uống"],
      ["纟", "(糸) mì", "mịch", "tơ, sợi"],
      ["灬", "(火) huǒ", "hỏa", "lửa"],
      ["刂", "(刀) dāo", "đao", "dao"],
      ["艹", "(艸) cǎo", "thảo", "cỏ"],
      ["辶", "(辵) chuò", "sước", "đi lại"],
      ["礻", "(示) shì", "thị", "thần linh"],
      ["衤", "(衣) yī", "y", "quần áo"],
      ["犭", "(犬) quǎn", "khuyển", "thú vật"],
      ["阝", "(阜/邑)", "phụ / ấp", "địa hình / vùng đất"],
      ["宀", "mián", "miên", "mái nhà"],
      ["疒", "nè", "nạch", "bệnh tật"]
    ]
  },
  {
    id: "hsk1-u1",
    name: "HSK 1 · Unit 1 — Chào hỏi",
    chars: [
      ["你", "nǐ", "nhĩ", "bạn"],
      ["好", "hǎo", "hảo", "tốt"],
      ["谢", "xiè", "tạ", "cảm ơn"],
      ["再", "zài", "tái", "lại"],
      ["见", "jiàn", "kiến", "gặp, thấy"],
      ["不", "bù", "bất", "không"],
      ["客", "kè", "khách", "khách"],
      ["气", "qì", "khí", "khí"],
      ["对", "duì", "đối", "đúng"],
      ["起", "qǐ", "khởi", "dậy, lên"],
      ["没", "méi", "một", "không có"],
      ["关", "guān", "quan", "đóng, liên quan"],
      ["系", "xì", "hệ", "hệ, liên hệ"]
    ]
  },
  {
    id: "hsk1-u2",
    name: "HSK 1 · Unit 2 — Giới thiệu bản thân",
    chars: [
      ["我", "wǒ", "ngã", "tôi"],
      ["是", "shì", "thị", "là"],
      ["叫", "jiào", "khiếu", "gọi, tên là"],
      ["什", "shén", "thập", "(什么) gì"],
      ["么", "me", "ma", "(什么) gì"],
      ["名", "míng", "danh", "tên"],
      ["字", "zì", "tự", "chữ"],
      ["国", "guó", "quốc", "nước"],
      ["人", "rén", "nhân", "người"],
      ["中", "zhōng", "trung", "giữa"],
      ["吗", "ma", "ma", "trợ từ nghi vấn"],
      ["呢", "ne", "ni", "trợ từ nghi vấn"]
    ]
  },
  {
    id: "hsk1-u3",
    name: "HSK 1 · Unit 3 — Gia đình",
    chars: [
      ["家", "jiā", "gia", "nhà"],
      ["爸", "bà", "ba", "bố"],
      ["妈", "mā", "ma", "mẹ"],
      ["有", "yǒu", "hữu", "có"],
      ["几", "jǐ", "kỷ", "mấy"],
      ["口", "kǒu", "khẩu", "miệng; lượng từ người"],
      ["个", "gè", "cá", "cái, chiếc"],
      ["哥", "gē", "ca", "anh trai"],
      ["姐", "jiě", "thư", "chị"],
      ["弟", "dì", "đệ", "em trai"],
      ["妹", "mèi", "muội", "em gái"]
    ]
  },
  {
    id: "hsk1-u4",
    name: "HSK 1 · Unit 4 — Số đếm, tuổi, tiền",
    chars: [
      ["一", "yī", "nhất", "một"],
      ["二", "èr", "nhị", "hai"],
      ["三", "sān", "tam", "ba"],
      ["四", "sì", "tứ", "bốn"],
      ["五", "wǔ", "ngũ", "năm"],
      ["六", "liù", "lục", "sáu"],
      ["七", "qī", "thất", "bảy"],
      ["八", "bā", "bát", "tám"],
      ["九", "jiǔ", "cửu", "chín"],
      ["十", "shí", "thập", "mười"],
      ["钱", "qián", "tiền", "tiền"],
      ["多", "duō", "đa", "nhiều"],
      ["少", "shǎo", "thiểu", "ít"],
      ["岁", "suì", "tuế", "tuổi"]
    ]
  },
  {
    id: "hsk1-u5",
    name: "HSK 1 · Unit 5 — Ngày tháng, giờ giấc",
    chars: [
      ["年", "nián", "niên", "năm"],
      ["月", "yuè", "nguyệt", "tháng"],
      ["日", "rì", "nhật", "ngày"],
      ["号", "hào", "hiệu", "ngày (trong tháng), số"],
      ["星", "xīng", "tinh", "sao"],
      ["期", "qī", "kỳ", "kỳ (星期: tuần)"],
      ["今", "jīn", "kim", "nay"],
      ["天", "tiān", "thiên", "trời, ngày"],
      ["明", "míng", "minh", "sáng; (明天) mai"],
      ["点", "diǎn", "điểm", "giờ, điểm"],
      ["分", "fēn", "phân", "phút"],
      ["现", "xiàn", "hiện", "hiện (现在: bây giờ)"],
      ["在", "zài", "tại", "ở, đang"]
    ]
  },
  {
    id: "hsk1-u6",
    name: "HSK 1 · Unit 6 — Ăn uống",
    chars: [
      ["吃", "chī", "ngật", "ăn"],
      ["喝", "hē", "hát", "uống"],
      ["饭", "fàn", "phạn", "cơm"],
      ["茶", "chá", "trà", "trà"],
      ["水", "shuǐ", "thủy", "nước"],
      ["想", "xiǎng", "tưởng", "muốn, nghĩ"],
      ["要", "yào", "yếu", "muốn, cần"],
      ["米", "mǐ", "mễ", "gạo"],
      ["菜", "cài", "thái", "món ăn, rau"]
    ]
  }
];
