# Hướng dẫn viết bài học

Quy chuẩn chung để mọi bài học trong repo thống nhất về cấu trúc, cách ghi chữ Hán, pinyin, Hán Việt và cách trình bày.
Mỗi bài mới bắt đầu bằng cách sao chép [templates/bai-hoc.md](../templates/bai-hoc.md).

---

## 1. Đặt tên và vị trí file

```
lessons/<chặng>/<unit>/<bài>.md
lessons/01-hsk1/unit-02-gioi-thieu-ban-than/bai-01-ban-ten-gi.md
```

- Tên thư mục và file: **chữ thường, không dấu, nối bằng `-`**.
- Đánh số 2 chữ số: `unit-01`, `bai-01` để sắp xếp đúng thứ tự.
- Mỗi unit có `README.md` liệt kê các bài và mục tiêu của unit.
- Audio/hình ảnh đặt cạnh bài trong thư mục `assets/` của unit: `unit-02-.../assets/bai-01-hoi-thoai.mp3`.

## 2. Front matter (bắt buộc)

Đầu mỗi bài có khối metadata để sau này tự động liên kết với [`data/`](../data):

```yaml
---
level: hsk1            # nhap-mon | hsk1 … hsk6 | hsk7-9
unit: 2
lesson: 1
title: "Bạn tên gì?"
duration: 45           # phút
objectives:
  - Hỏi và nói tên của mình
  - Hỏi quốc tịch
vocab: [叫, 什么, 名字, 哪, 国, 人]
grammar: [hsk1-g05, hsk1-g06]   # id trong data/grammar/*.csv
---
```

## 3. Chữ Hán

- Dùng **giản thể** (简体字) làm mặc định.
- Phồn thể chỉ ghi ở bảng từ vựng / bảng chữ Hán, trong cột riêng hoặc ngoặc: `学 (學)`.
- Dùng **dấu câu toàn khổ** trong câu tiếng Trung: `，。？！：；“”《》、` — không dùng `,.?!` của tiếng Anh.
- Không chèn dấu cách giữa các chữ Hán.

## 4. Pinyin

| Quy tắc | Đúng | Sai |
|---|---|---|
| Dùng dấu thanh, không dùng số | `nǐ hǎo` | `ni3 hao3` |
| Viết liền theo **từ**, cách nhau theo từ | `Wǒ shì xuésheng.` | `Wǒ shì xué sheng.` |
| Thanh nhẹ không đánh dấu | `xuésheng`, `māma` | `xuéshēng` |
| `ü` giữ nguyên sau n/l | `nǚ`, `lǜ` | `nu`, `lv` |
| Dấu nháy khi âm tiết bắt đầu bằng a/o/e | `Xī'ān`, `Tiān'ānmén` | `Xīān` |
| Viết hoa đầu câu và tên riêng | `Běijīng`, `Wáng lǎoshī` | `běijīng` |

**Biến điệu:** bảng từ vựng ghi **thanh gốc** (`bù`, `yī`, `nǐ hǎo`). Biến điệu (`bú shì`, `yí gè`, `ní hǎo`) chỉ ghi chú riêng ở phần phát âm hoặc khi bài học về biến điệu.

## 5. Âm Hán Việt

- Viết thường, các âm tiết cách nhau bằng dấu cách: `học sinh`, `đồ thư quán`.
- Tra và đối chiếu từ điển Hán Việt; không chắc chắn thì ghi `?` và nêu trong PR.
- Từ không có âm Hán Việt (từ thuần Trung, phiên âm nước ngoài, chữ mới) ghi `—`.
- **“Bạn giả”** (Hán Việt dễ gây hiểu nhầm) đánh dấu ⚠️ và giải thích:
  > ⚠️ 爱人 *ái nhân* — nghĩa là **vợ/chồng**, không phải “người yêu”.

## 6. Dịch tiếng Việt

- Dịch **tự nhiên** như người Việt nói, không dịch từng chữ.
- Khi cấu trúc tiếng Trung khác hẳn, thêm nghĩa đen trong ngoặc vuông:
  `你叫什么名字？` — Bạn tên là gì? *[nghĩa đen: bạn gọi là tên gì]*
- Xưng hô trong hội thoại: mặc định *tôi – bạn*; đổi theo ngữ cảnh (*em – thầy*, *cháu – bác*) cho phù hợp.

## 7. Từ vựng

- Số từ mới mỗi bài: **sơ cấp 8–15**, **trung cấp 15–25**, **cao cấp 20–30**.
- Cột bắt buộc: `Chữ Hán | Pinyin | Hán Việt | Từ loại | Nghĩa | Ví dụ`.
- Từ loại dùng tên tiếng Việt thống nhất: *danh từ, động từ, tính từ, phó từ, lượng từ, giới từ, liên từ, trợ từ, đại từ, số từ, thán từ*.
- Ví dụ cho từ vựng là câu ngắn, chỉ dùng từ đã học.

## 8. Ngữ pháp

Mỗi điểm ngữ pháp trình bày đủ 4 phần:

1. **Cấu trúc** — dạng công thức: `S + 是 + N`
2. **Cách dùng** — 1–3 câu giải thích ngắn gọn bằng tiếng Việt.
3. **Ví dụ** — ít nhất 3 câu, có pinyin và nghĩa.
4. **Lỗi người Việt hay mắc** — có câu sai đánh dấu ✗ và câu sửa ✓:
   > ✗ 我是很高兴。 → ✓ 我很高兴。 *(tính từ làm vị ngữ không cần 是)*

Thuật ngữ ngữ pháp dùng thống nhất (lần đầu xuất hiện ghi kèm tiếng Trung):

| Tiếng Việt | Tiếng Trung |
|---|---|
| Bổ ngữ kết quả | 结果补语 |
| Bổ ngữ xu hướng | 趋向补语 |
| Bổ ngữ khả năng | 可能补语 |
| Bổ ngữ trình độ / trạng thái | 程度补语 / 状态补语 |
| Lượng từ | 量词 |
| Trợ từ ngữ khí | 语气助词 |
| Câu chữ 把 / Câu bị động 被 | 把字句 / 被字句 |

## 9. Hội thoại và bài đọc

- Độ dài: sơ cấp 6–12 lượt lời; trung cấp 150–400 chữ; cao cấp tài liệu thực tế (ghi nguồn).
- **Chỉ dùng từ đã học + từ mới của bài.** Từ ngoài phạm vi phải chú thích ngay dưới bài.
- Nhân vật dùng lại xuyên suốt khóa (để người học quen) — danh sách nhân vật sẽ ở `lessons/nhan-vat.md`.
- Pinyin và bản dịch đặt trong `<details>` để người học tự thử đọc trước.

## 10. Bài tập

- Mỗi bài có bài tập cho ít nhất 3 trong 4 kỹ năng (Nghe/Nói/Đọc/Viết); từ HSK 4 thêm Dịch.
- Đáp án luôn để trong `<details>` cuối bài.
- Dạng bài nên đa dạng: chọn đáp án, điền từ, sắp xếp câu, dịch, viết câu theo mẫu, shadowing.

## 11. Bản quyền

- **Không sao chép** nguyên văn hội thoại, bài đọc, bài tập từ giáo trình có bản quyền (Hán ngữ, Boya, HSK Standard Course…).
- Tự viết nội dung, hoặc dùng nguồn có license mở và **ghi nguồn + license** cuối bài.
- Audio tự thu hoặc dùng nguồn mở (xem [tai-nguyen.md](tai-nguyen.md)).

## 12. Checklist trước khi gửi

- [ ] Đúng tên file, vị trí thư mục, có front matter
- [ ] Chữ giản thể, dấu câu toàn khổ trong câu tiếng Trung
- [ ] Pinyin dùng dấu thanh, viết theo từ, thanh nhẹ không dấu
- [ ] Mọi từ mới có Hán Việt (hoặc `—`), bạn giả có ⚠️
- [ ] Hội thoại không dùng từ vượt cấp mà không chú thích
- [ ] Mỗi điểm ngữ pháp có ≥ 3 ví dụ và phần lỗi hay mắc
- [ ] Có bài tập + đáp án trong `<details>`
- [ ] Không chép nội dung có bản quyền; đã ghi nguồn
- [ ] Bảng Markdown hiển thị đúng trên GitHub (xem Preview)
