# Dữ liệu

Kế hoạch tổ chức dữ liệu (chưa nhập):

```
data/
├── vocab/hsk1.csv … hsk7-9.csv    # từ vựng
├── hanzi/hsk1.csv …               # chữ Hán
└── grammar/hsk1.csv …             # điểm ngữ pháp
```

## Schema đề xuất

**vocab/*.csv**
```
id,hanzi,traditional,pinyin,han_viet,pos,meaning_vi,example,example_vi,level,unit
```

**hanzi/*.csv**
```
hanzi,radical,strokes,pinyin,han_viet,meaning_vi,level
```

**grammar/*.csv**
```
id,pattern,level,explanation_vi,example,example_vi,unit
```

Nguồn dự kiến: xem [docs/tai-nguyen.md](../docs/tai-nguyen.md). Cột `han_viet` và `meaning_vi` cần bổ sung thủ công / đối chiếu từ điển Trung–Việt.
