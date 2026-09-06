# wafer's design — Production Rule Sheet

กฎสำหรับงาน production ทุกชิ้น ใช้คู่กับ `MANIFESTO.md` และ CSS tokens

---

## 1. Color rules

### Core palette (always available)

| Token | Role | Feel |
|---|---|---|
| `--wafer-yellow` | energy, highlight, brand warmth | fresh lemon |
| `--wafer-red` | accent, emphasis, heart | vivid coral-red |
| `--wafer-green` | success, calm pop, growth | bright mint |
| `--wafer-blue` | trust, link, cool balance | clear sky |

### Neutrals

| Token | Role |
|---|---|
| `--wafer-ink` | primary text |
| `--wafer-ink-soft` | secondary text |
| `--wafer-paper` / `--wafer-cream` | cream surfaces (`#fdfcf0`) |
| `--wafer-stage` | charcoal stage for link-bio / dark frames |
| `--wafer-mist` | subtle panels / washes |

### Signature shadows

| Token | Use |
|---|---|
| `--shadow-wafer-y/r/g/b` | hard offset color shadows (no blur) |
| `.w-slab` | cream card with wafer shadow |

### Rules

1. ใช้สีหลักอย่างน้อย 2 สีต่อหน้า + neutrals
2. พื้นหลังต้องมี atmosphere (gradient / soft wash / stage) — ห้าม flat ขาวล้วนทั้งหน้า
3. สีสดมีชีวิต = ลายเซ็น · ถ้าจางเกินให้ดัน chroma ขึ้น · ห้าม neon จ้าตา
4. ข้อความบนสี: contrast อ่านง่ายเสมอ
5. ห้ามม่วงเป็นสีหลัก · ห้าม neon · ห้ามเงาเทา blur แทน wafer shadow ในชิ้นลายเซ็น
6. Reference: [ilovewafer.com](https://ilovewafer.com) — borrow language, don't clone content

---

## 2. Typography rules

| Role | Token / class | Guidance |
|---|---|---|
| Brand / hero | `.w-display` | กลม นุ่ม มีตัวตน · ห้ามเล็กเกินใน hero |
| Title | `.w-title` | ชัด เป็นมิตร |
| Body | `.w-body` | อ่านง่าย line-height สบาย |
| Label / meta | `.w-label` | นุ่ม ไม่ sharp corporate |

### Rules

1. Brand name ในหน้า branded ต้องเป็น hero-level signal
2. หน้าแรก: brand + 1 headline + 1 supporting + CTA group — ไม่ยัดสถิติ/รายการ
3. ห้าม Inter / Roboto / Arial / system เป็นตัวหลัก
4. ภาษาไทย/อังกฤษ: ช่องไฟและขนาดต้องอ่านสบายทั้งคู่

---

## 3. Spacing & density

| Token | Use |
|---|---|
| `--space-1` … `--space-8` | scale คงที่ |

### Rules

1. Density = **medium** — มีของตกแต่ง มีลมหายใจ
2. ห้ามโล่งแบบ gallery ว่าง · ห้ามแน่นแบบ dashboard ยัด
3. แต่ละ section: หนึ่งจุดประสงค์ · หนึ่ง headline · ประโยครองสั้น
4. ระยะระหว่างบล็อกสัมพันธ์กับขนาดตัวอักษร (rhythm)

---

## 4. Shape & radius

- Radius มาตรฐาน: `--radius-m` (มนปานกลาง)
- ชิ้นเล็ก: `--radius-s` · ชิ้นใหญ่/surface: `--radius-l`
- ห้าม rounded-full ทุกอย่างแบบยาเม็ดล้นจอ
- ของตกแต่งเรขาคณิตใช้ชุดจาก decoration components เท่านั้น

---

## 5. Decoration (ลายเซ็น)

ใช้เฉพาะ components ในระบบ:

| Component | Use |
|---|---|
| `.w-geo` | วงกลม / แคปซูล / rounded square / soft triangle |
| `.w-stroke` | เส้นโค้งหรือเส้นตรงบาง เชื่อมจังหวะ |
| `.w-orbit` | กลุ่ม geo จัดระเบียบรอบจุดโฟกัส |
| `.w-ribbon` | แถบสี 2–4 โทน เป็นลายเซ็นเบา ๆ |

### Rules

1. ตกแต่งต้อง **จัดแกน** — ซ้าย/ขวา/มุม ตาม grid จินตนาการ ไม่สุ่ม
2. สูงสุด ~3–5 decorative accents ต่อ viewport แรก
3. ของตกแต่งช่วยลำดับสายตา ไม่ขโมยข้อความ
4. ห้าม sticker / badge ลอยทับ hero media แบบโปรโมท

---

## 6. Motion

| Motion | When |
|---|---|
| `w-float` | geo / soft accents |
| hover soft lift | interactive only |
| page enter fade-up | optional, once |

### Rules

1. Float เบา — amplitude ต่ำ · duration ช้า
2. ห้ามกระพริบแรง / bounce เด็กนิทาน / glow pulse ม่วง
3. อย่างน้อย 2 motion intentional ต่องาน visually-led · ไม่เกินจนรำคาญ

---

## 7. Components usage

### Buttons

- Primary: สีหลักหนึ่งสี + หมึกตัดชัด
- Secondary: outline / soft wash
- มุมมนปานกลาง · ไม่ pill ยาวเกินเหตุ

### Inputs

- ขอบบาง นุ่ม · focus ring สี blue/yellow อ่อน
- label อ่านง่าย อยู่เหนือช่อง

### Surfaces

- Default: **ไม่ใช้การ์ด**
- การ์ดอนุญาตเมื่อเป็นภาชนะของ interaction (form, selectable item)
- ถ้าเอา border/shadow/radius ออกแล้วยังเข้าใจ — ไม่ต้องเป็น card

### Navigation

- โล่ง ชัด · brand เด่น
- ห้าม nav อย่างเดียวเป็นสัญญาณแบรนด์ทั้งหน้า

---

## 8. Template rules by context

### Landing / portfolio

- Hero full-bleed atmosphere
- Brand เป็นสัญญาณหลัก
- Decoration มีระเบียบใน hero
- หนึ่ง CTA group

### Social

- โครงชัด อ่านใน 1 วินาที
- สี 2–3 โทน + geo accent
- ข้อความสั้น · hierarchy ชัด

### App shell

- โครง Apple-like ชัด
- accent สี wafer ที่ nav / FAB / empty state
- ไม่ทำให้แอพกลายเป็น carnival

---

## 9. Pre-ship checklist

- [ ] รู้ทันทีว่าเป็น wafer's design (YRGB สด + ความนุ่ม + geo/line)
- [ ] ดูแพงและสดใสพร้อมกัน
- [ ] อ่านง่ายทั้ง headline และ body
- [ ] ตกแต่งมี แต่ไม่รก
- [ ] ไม่เหมือน AI template / corporate / นิทาน
- [ ] โมชันเบา ไม่กวน
- [ ] ใช้ได้ทั้ง desktop และ mobile
