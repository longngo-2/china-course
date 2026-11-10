# Trang luyện viết chữ Hán

Trang web tĩnh để luyện viết chữ Hán bằng **chuột, touchpad hoặc màn hình cảm ứng**, dùng thư viện
[Hanzi Writer](https://hanziwriter.org). Trang kiểm tra từng nét: đúng thứ tự, đúng hướng, gần đúng hình dạng.

## Tính năng

| Chế độ | Mô tả |
|---|---|
| **Xem mẫu** | Hoạt hình thứ tự nét, lặp lại; bộ thủ được tô màu |
| **Tập tô** | Viết đè lên chữ mờ; sai 3 lần ở một nét thì hiện gợi ý |
| **Tự viết** | Không có chữ mờ, chỉ hiện pinyin + nghĩa — viết từ trí nhớ |

- Bộ chữ có sẵn: Nhập môn (20 chữ), Bộ thủ biến thể (18), HSK 1 unit 1–6.
- **Tự nhập chữ** bất kỳ để luyện.
- Thanh tiến độ đánh dấu kết quả từng chữ: 🟢 không lỗi · 🟡 1–2 lỗi · 🔴 ≥ 3 lỗi.
- **★ Chữ cần ôn**: chữ viết sai ≥ 3 lần ở chế độ *Tự viết* được lưu lại (trong trình duyệt), viết lại không lỗi thì gỡ ra.
- Phím tắt: `←` `→` chuyển chữ, `R` viết lại, `D` xem nét.
- Hỗ trợ điện thoại và chế độ tối.

## Mở trang

- **Trên máy:** mở trực tiếp file `tools/luyen-viet/index.html` bằng trình duyệt (cần mạng để tải thư viện và dữ liệu nét từ jsDelivr).
- **GitHub Pages:** bật Pages cho repo (Settings → Pages → Deploy from a branch → chọn nhánh, thư mục `/ (root)`), sau đó trang có ở:
  `https://<tên-tài-khoản>.github.io/china-course/tools/luyen-viet/`

## Tham số URL

Dùng để tạo link luyện viết từ bài học:

| Tham số | Ví dụ | Ý nghĩa |
|---|---|---|
| `chu` | `?chu=你好谢谢` | Luyện các chữ này (bỏ trùng, bỏ ký tự không phải chữ Hán) |
| `bo` | `?bo=hsk1-u2` | Mở bộ chữ có sẵn theo `id` trong `data.js` |
| `che-do` | `?che-do=viet` | `xem` · `to` · `viet` |

Ví dụ: `.../tools/luyen-viet/?chu=你叫什么名字&che-do=to`

## Thêm bộ chữ

Thêm một phần tử vào `CHAR_SETS` trong [`data.js`](data.js):

```js
{
  id: "hsk1-u7",
  name: "HSK 1 · Unit 7 — Mua sắm",
  chars: [
    ["买", "mǎi", "mãi", "mua"],
    // [chữ, pinyin, Hán Việt, nghĩa]
  ]
}
```

Số nét và thứ tự nét được lấy tự động. Pinyin và Hán Việt viết theo [quy chuẩn](../../docs/huong-dan-viet.md).
Chữ tự nhập không có trong `data.js` vẫn luyện được, chỉ không hiện pinyin/Hán Việt/nghĩa.

## Cấu trúc

```
tools/luyen-viet/
├── index.html   # giao diện
├── style.css    # giao diện sáng/tối, responsive
├── app.js       # logic: chế độ, tiến độ, chữ cần ôn, tham số URL
└── data.js      # các bộ chữ
```

## Giấy phép dữ liệu

- [Hanzi Writer](https://github.com/chanind/hanzi-writer) — MIT.
- Dữ liệu nét [hanzi-writer-data](https://github.com/chanind/hanzi-writer-data), lấy từ
  [Make Me a Hanzi](https://github.com/skishore/makemeahanzi) — dựa trên font Arphic (Arphic Public License). Xem license của từng repo trước khi tự lưu trữ dữ liệu.
