# SubManager Landing Page (Phase 1)

Landing page สำหรับพิสูจน์ **Value Moment** และเพิ่ม **Affiliate CTR** ของโปรเจกต์ SubManager
ด้วยสแต็ก **Next.js + Tailwind CSS**.

## Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS
- ESLint + TypeScript

## Run Locally

```bash
npm install
npm run dev
```

เปิดที่ `http://localhost:3000`

## Production Check

```bash
npm run lint
npm run build
npm run start
```

---

## Step-by-step: Deploy to Vercel

> เหมาะที่สุดสำหรับโปรเจกต์ Next.js นี้ และตั้งค่าไม่ซับซ้อน

### 0) สิ่งที่ต้องมี

- Git repository ของโปรเจกต์นี้ (GitHub/GitLab/Bitbucket)
- Vercel account (สมัครฟรีได้)
- โค้ดล่าสุดถูก push ขึ้น remote แล้ว

---

### 1) เตรียมโปรเจกต์ก่อน Deploy

รันเช็คในเครื่องก่อน:

```bash
npm install
npm run lint
npm run build
```

ถ้า 3 คำสั่งนี้ผ่าน โอกาส deploy ผ่านบน Vercel จะสูงมาก

---

### 2) Deploy ผ่าน Vercel Dashboard (แนะนำ)

1. เข้า https://vercel.com/new
2. Sign in ด้วยบัญชีที่ต้องการใช้
3. เลือก Git provider (เช่น GitHub) และ authorize ถ้ายังไม่เคยเชื่อม
4. เลือก repository: `SubManager`
5. หน้า **Configure Project** ให้ตรวจค่า:
   - **Framework Preset**: `Next.js` (Vercel จะ detect ให้อัตโนมัติ)
   - **Build Command**: `next build` (default)
   - **Install Command**: `npm install` (หรือ `npm ci`)
   - **Output Directory**: เว้นว่าง (default ของ Next.js)
6. ถ้ามี Environment Variables (ตอนนี้ยังไม่มีจำเป็นสำหรับ landing page) ให้เพิ่มในส่วน **Environment Variables**
7. กด **Deploy**
8. รอ build เสร็จ แล้วเปิด URL ที่ได้ เช่น `https://submanager-xxxxx.vercel.app`

---

### 3) ตั้ง Production Domain (ถ้าต้องการ)

1. เข้าโปรเจกต์ใน Vercel
2. ไปที่ **Settings → Domains**
3. ใส่โดเมนที่ต้องการ (เช่น `submanager.yourdomain.com`)
4. ทำ DNS ตามที่ Vercel แนะนำ (CNAME/A record)
5. รอ SSL ออกอัตโนมัติ แล้วทดสอบเข้าเว็บผ่านโดเมนจริง

---

### 4) Deploy ผ่าน Vercel CLI (ทางเลือก)

ติดตั้ง/ล็อกอิน:

```bash
npm i -g vercel
vercel login
```

สร้างโปรเจกต์ครั้งแรก (interactive):

```bash
vercel
```

Deploy production:

```bash
vercel --prod
```

---

### 5) Workflow ที่แนะนำหลังจากนี้

- ทุกครั้งที่ push เข้า branch หลัก (`main`/`master`) ให้ Vercel auto-deploy production
- ทุกครั้งที่เปิด PR ให้ Vercel สร้าง Preview URL สำหรับรีวิวก่อน merge

---

## Troubleshooting ที่พบบ่อย

- **Build failed ที่ Vercel**
  - ลองรัน `npm run build` ในเครื่องก่อน แล้วแก้ให้ผ่าน
- **Environment variable หาย**
  - ไปเพิ่มที่ Vercel → Settings → Environment Variables
- **Deploy ผ่าน CLI ไม่ได้**
  - ตรวจว่า login แล้ว (`vercel login`) และ token ถูกต้อง

---

## Optional: Docker Deploy

ถ้าต้อง deploy บน VM/Container platform (เช่น Railway, Fly.io, ECS):

```bash
npm ci
npm run build
npm run start
```

และ expose port `3000`.
