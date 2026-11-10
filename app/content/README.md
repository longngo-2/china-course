# Nội dung bài học của ứng dụng

Ứng dụng web (`app/index.html`) đọc nội dung từ các file JS trong thư mục này, nên chạy được cả khi mở trực tiếp bằng trình duyệt (không cần server hay build).

| File | Nội dung |
|---|---|
| `pinyin.js` | Bảng thanh mẫu, vận mẫu, bộ thanh điệu dùng cho bài học Chặng 0 và trang “Bảng pinyin” |
| `stage0.js` | Chặng 0 — Nhập môn (4 bài) |
| `hsk1.js` | HSK 1 — Unit 1–3 (5 bài) |
| `course.js` | **Cấu trúc lộ trình** hiển thị trên trang chủ (chặng → unit → danh sách id bài) |

Quy chuẩn viết (pinyin, Hán Việt, dịch, ngữ pháp, bản quyền) xem [docs/huong-dan-viet.md](../../docs/huong-dan-viet.md).

## Thêm một bài học mới

1. Trong file nội dung (ví dụ `hsk1.js`), thêm một lời gọi `CC.addLesson({...})`.
2. Thêm `id` của bài vào mảng `lessons` của unit tương ứng trong `course.js` (bỏ `soon: true` nếu unit đã có bài).
3. Mở `app/index.html`, làm thử bài từ đầu đến cuối.

```js
CC.addLesson({
  id: "h1-4-1",                 // duy nhất; dạng: chặng-unit-bài
  title: "Số đếm 1–10",
  minutes: 30,
  objectives: ["Đếm từ 1 đến 10", "…"],
  sections: [ /* xem bên dưới, theo thứ tự hiển thị */ ]
});
```

## Các loại `section`

**`dialogue`** — hội thoại, mỗi dòng `[người nói, zh, pinyin, nghĩa]`

```js
{ type: "dialogue", title: "Hội thoại", note: "Ghi chú tuỳ chọn", groups: [
  { title: "1. Gặp bạn", lines: [["A", "你好！", "Nǐ hǎo!", "Xin chào!"]] }
] }
```

**`vocab`** — từ vựng `[chữ, pinyin, Hán Việt, từ loại, nghĩa, ví dụ zh, ví dụ pinyin, ví dụ nghĩa]`. Dùng `"—"` nếu không có âm Hán Việt. Khi người học hoàn thành bài, các từ này tự động vào bộ thẻ ôn.

**`grammar`** — `points: [{ title, structure, explain: [...], examples: [[zh, pinyin, nghĩa]], mistakes: [[sai, đúng, giải thích]] }]`

**`text`** — bài đọc tự do, `body` là mảng gồm: chuỗi (đoạn văn), `{ ul: [...] }`, `{ table: { head, rows } }`, `{ tip: "..." }`, `{ warn: "..." }`, `{ write: { set: "nhap-mon" | chars: "你好", label } }` (nút mở trang luyện viết), `{ tones: true }`.
Trong chuỗi, `**đậm**` và `` `mã` `` được hỗ trợ.

**`pinyin-initials`**, **`pinyin-finals`**, **`tones`** — chèn bảng pinyin từ `pinyin.js`.

**`exercises`** — `items` gồm ba loại câu hỏi:

```js
{ t: "choice", q: "Câu hỏi", opts: ["đúng", "sai", "sai"], a: 0, why: "Giải thích" }   // a = chỉ số đáp án đúng trong opts; thứ tự hiển thị được xáo ngẫu nhiên
{ t: "order",  q: "Sắp xếp: **Tôi cũng khỏe.**", words: ["我", "也", "很", "好"] }     // words = thứ tự ĐÚNG
{ t: "listen", say: "早上好", q: "Nghe và chọn nghĩa", opts: [...], a: 0, why: "…" }     // đọc bằng giọng của trình duyệt
```

Làm đúng từ 60% trở lên thì bài được đánh dấu hoàn thành.

## Lưu ý

- Mọi nội dung phải **tự viết**; không chép nguyên văn từ giáo trình có bản quyền.
- Chữ trong bảng từ vựng sẽ được đưa sang trang luyện viết (`tools/luyen-viet`) qua nút “Luyện viết”. Trang đó lấy nét chữ từ `hanzi-writer-data` nên chỉ luyện được chữ Hán đơn lẻ.
- Tiến độ lưu trong `localStorage` của trình duyệt (khoá `china-course:app:v1`), nên đổi `id` bài đã phát hành sẽ làm mất dấu “đã học” của bài đó.
