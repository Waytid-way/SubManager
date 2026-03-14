"use client";

import { useMemo, useState } from "react";

type SubscriptionItem = {
  name: string;
  monthly: number;
};

type PackCard = {
  name: string;
  price: string;
  forWho: string;
  handlesBest: string;
  outcome: string;
  highlight: string;
};

const subscriptions: SubscriptionItem[] = [
  { name: "Netflix", monthly: 419 },
  { name: "Spotify", monthly: 139 },
  { name: "Canva Pro", monthly: 420 },
  { name: "Google One", monthly: 99 },
  { name: "YouTube Premium", monthly: 179 },
  { name: "Notion Plus", monthly: 189 },
];

const painPoints = [
  "สมัครไว้หลายแอป แต่จำไม่ได้ว่าอันไหนยังใช้อยู่จริง",
  "เงินโดนตัดอัตโนมัติจนงบรายเดือนบานโดยไม่ทันตั้งตัว",
  "รู้ตัวอีกทีคือตอนยอดรวมรายปีสูงเกินที่คิด",
];

const solutionOutcomes = [
  {
    title: "เห็นเงินที่ไหลออกทุกเดือนก่อนจะสาย",
    desc: "เปิดหน้าเดียวแล้วรู้ทันทีว่าตอนนี้จ่ายอะไรอยู่บ้าง เพื่อหยุดรายจ่ายที่ไม่คุ้มได้เร็วขึ้น",
  },
  {
    title: "ตัดสินใจยกเลิกได้ตรงเวลา",
    desc: "รับแจ้งเตือนก่อนรอบตัดบิล ทำให้มีเวลาเช็กว่าแอปนั้นยังจำเป็นอยู่ไหมก่อนเงินถูกตัด",
  },
  {
    title: "วางแผนงบรายเดือนแบบไม่เดา",
    desc: "เห็นภาพรวมรายเดือนและรายปีชัดเจน จัดสัดส่วนค่าใช้จ่าย subscription ให้บาลานซ์กับเป้าหมายการเรียนและงาน",
  },
];

const howItWorks = [
  {
    step: "Step 1",
    title: "เพิ่ม subscription ที่ใช้อยู่",
    desc: "เลือกบริการที่คุณจ่ายอยู่ตอนนี้เพื่อให้เห็นภาพค่าใช้จ่ายจริงทันที",
  },
  {
    step: "Step 2",
    title: "ดูยอดรวมรายเดือนและรายปีทันที",
    desc: "ระบบรวมตัวเลขให้ในหน้าเดียว คุณจึงรู้ว่าตอนนี้งบไหลออกเท่าไร",
  },
  {
    step: "Step 3",
    title: "รับแจ้งเตือนก่อนถึงรอบตัดบิล",
    desc: "เตือนล่วงหน้าผ่าน LINE เพื่อให้คุณตัดสินใจก่อนเงินถูกตัดอัตโนมัติ",
  },
];

const packCards: PackCard[] = [
  {
    name: "Student Focus",
    price: "฿299/เดือน",
    forWho: "สำหรับสายเรียนที่ต้องการคุม productivity tools และ cloud storage ให้ชัด",
    handlesBest: "เหมาะกับชุดเครื่องมือเรียน/ทำงาน เช่น Notion, Google One, Spotify",
    outcome: "ช่วยให้เห็นงบที่ใช้กับการเรียนชัดขึ้น และกันเงินรั่วจากแอปที่ไม่ได้ใช้",
    highlight: "ลดความคลุมเครืองบได้ทันที",
  },
  {
    name: "Creator Boost",
    price: "฿699/เดือน",
    forWho: "สำหรับคนทำคอนเทนต์ที่จ่ายหลายเครื่องมือรายเดือนและต้องการเห็นภาพรวม",
    handlesBest: "เหมาะกับ Canva, AI tools, เครื่องมือจัดการงานและไฟล์",
    outcome: "ช่วยคุมต้นทุนคอนเทนต์รายเดือนให้สม่ำเสมอและรู้ว่าควรตัดตัวไหนก่อน",
    highlight: "เห็นต้นทุนคอนเทนต์รวมในหน้าเดียว",
  },
  {
    name: "Dev Stack",
    price: "฿899/เดือน",
    forWho: "สำหรับ developer ที่ต้องควบคุม recurring SaaS และ infra subscriptions",
    handlesBest: "เหมาะกับเครื่องมือ dev, cloud, monitoring และ AI coding subscriptions",
    outcome: "ช่วยคุม recurring cost ของสแตกให้ไม่บานปลายเมื่อโปรเจกต์โตขึ้น",
    highlight: "คุม recurring SaaS/infra ให้ชัดเจน",
  },
];

const faqs = [
  {
    q: "ต้องผูกบัตรไหม",
    a: "ไม่ต้องผูกบัตร และไม่ต้องเชื่อมบัญชีธนาคาร คุณเพิ่มรายการ subscription ด้วยตัวเองเพื่อรับการเตือนล่วงหน้าได้เลย",
  },
  {
    q: "รองรับแอปอะไรบ้าง",
    a: "รองรับการติดตาม subscription ที่ใช้บ่อย เช่นสตรีมมิง, productivity, cloud และ SaaS อื่น ๆ โดยเพิ่มรายการเองในระบบ",
  },
  {
    q: "แจ้งเตือนผ่าน LINE ยังไง",
    a: "เมื่อกำหนดรอบบิลแล้ว ระบบจะส่งข้อความเตือนก่อนถึงวันตัดบิลผ่าน LINE เพื่อให้คุณมีเวลาตรวจสอบก่อนจ่าย",
  },
  {
    q: "ใช้งานฟรีไหม",
    a: "มีแพ็กให้เลือกตามรูปแบบการใช้งาน และมีทางเลือกเริ่มต้นฟรีเพื่อดูภาพรวมค่าใช้จ่ายก่อนตัดสินใจอัปเกรด",
  },
  {
    q: "ถ้าไม่ได้เชื่อมบัตร ระบบเตือนได้ยังไง",
    a: "ระบบอิงจากรอบบิลที่คุณบันทึกไว้ จึงส่งเตือนได้โดยไม่ต้องเข้าถึงข้อมูลบัตรหรือบัญชีธนาคาร",
  },
  {
    q: "ข้อมูลปลอดภัยแค่ไหน",
    a: "Sub Manager อยู่ในช่วง prototype — ยังไม่ได้เชื่อมต่อระบบชำระเงินจริง และออกแบบให้เก็บเฉพาะข้อมูลที่จำเป็นต่อการเตือนเท่านั้น",
  },
];

export default function Home() {
  const focusVisibleRing =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

  const [selected, setSelected] = useState<string[]>(["Netflix", "Canva Pro", "Notion Plus"]);

  const monthlyTotal = useMemo(
    () =>
      subscriptions
        .filter((item) => selected.includes(item.name))
        .reduce((sum, item) => sum + item.monthly, 0),
    [selected],
  );

  const yearlyLeakage = monthlyTotal * 12;

  const toggleApp = (name: string) => {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name],
    );
  };

  return (
    <div className="bg-slate-50 text-slate-900">
      <nav className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <span className="text-2xl font-bold tracking-tight">
            <span className="text-white">Sub</span>
            <span className="text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">Manager</span>
          </span>
          <div className="hidden items-center gap-5 text-sm font-medium text-slate-100 md:flex">
            <a href="#calculator" className={`rounded-sm text-slate-100 hover:text-white ${focusVisibleRing}`}>
              Calculator
            </a>
            <a href="#packs" className={`rounded-sm text-slate-100 hover:text-white ${focusVisibleRing}`}>
              Packs
            </a>
            <a href="#faq" className={`rounded-sm text-slate-100 hover:text-white ${focusVisibleRing}`}>
              FAQ
            </a>
          </div>
        </div>
      </nav>

      <main>
        <section className="relative isolate overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
            <div className="absolute left-[-12%] top-[-30%] h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.2)_0%,_rgba(59,130,246,0)_72%)]" />
            <div className="absolute bottom-[-36%] right-[-10%] h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(14,165,233,0.18)_0%,_rgba(14,165,233,0)_70%)]" />
          </div>
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-2 md:items-center">
            <div className="space-y-5">
              <p className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                คุม subscription ก่อนเงินหายไปแบบไม่รู้ตัว
              </p>
              <h1 className="text-hero">
                หยุดเงินรั่วจาก Subscription ที่คุณไม่ได้ตั้งใจจ่าย
              </h1>
              <p className="text-body-lg text-slate-700 max-w-[var(--measure-body)]">
                รู้ล่วงหน้าว่าเงินจะถูกตัดเมื่อไรและคุมยอดรวมรายเดือนให้ไม่บานปลาย แม้คุณใช้หลายบริการพร้อมกัน.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  className={`cta-primary rounded-full bg-blue-700 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-200 hover:bg-blue-800 ${focusVisibleRing}`}
                >
                  สร้างบัญชีฟรี
                </button>
                <button
                  className={`rounded-full border border-blue-200 bg-blue-50 px-6 py-3 font-semibold text-blue-800 hover:bg-blue-100 ${focusVisibleRing}`}
                >
                  เริ่มใช้งานผ่าน LINE
                </button>
                <button
                  className={`rounded-full border border-slate-300 bg-white px-6 py-3 font-medium text-slate-700 hover:bg-slate-100 ${focusVisibleRing}`}
                >
                  ดูเดโมแดชบอร์ด
                </button>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl">
              <div className="rounded-2xl bg-slate-900 p-4 text-white shadow-2xl">
                <p className="text-xs text-slate-200">LINE Alert Preview</p>
                <div className="mt-3 rounded-xl bg-slate-800 p-4">
                  <p className="text-sm text-slate-100">🔔 พรุ่งนี้ Netflix จะตัดเงิน 419 บ. ถ้ายังไม่ได้ใช้ ลองพิจารณาหยุดก่อนรอบบิลนะ</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl bg-slate-100 p-3">
                  <p className="text-slate-500">Monthly Total</p>
                  <p className="mt-1 text-xl font-bold">฿{monthlyTotal.toLocaleString()}</p>
                </div>
                <div className="rounded-xl bg-blue-50 p-3">
                  <p className="text-blue-700">Potential Save</p>
                  <p className="mt-1 text-xl font-bold text-blue-800">ลดเงินรั่วได้ทันที</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-14 text-white">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-section">เงินรั่วไหลเกิดจากการลืม ไม่ใช่จากการตั้งใจจ่าย</h2>
            <p className="mt-3 max-w-3xl text-body text-slate-200">
              ยิ่งใช้หลายบริการ ยิ่งมีโอกาสลืมรอบบิลและจ่ายซ้ำโดยไม่รู้ตัว สิ่งที่ต้องมีคือภาพรวมที่ชัดเจนและการเตือนก่อนเงินถูกตัด.
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {painPoints.map((pain) => (
                <div key={pain} className="rounded-xl border border-red-900/40 bg-red-950/30 p-4 text-sm text-red-100">
                  ⚠️ {pain}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="calculator" className="bg-slate-900 py-16 text-white">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-section">คำนวณก่อนว่าเงินคุณไหลออกเดือนละเท่าไร</h2>
            <p className="mt-3 max-w-3xl text-body text-slate-300">
              เลือกรายการที่คุณใช้อยู่ด้านล่าง เพื่อเห็นตัวเลขรวมทันทีและเช็กว่ามีรายการไหนที่ควรหยุดก่อนรอบตัดบิลถัดไป.
            </p>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div className="space-y-3">
                {subscriptions.map((item) => (
                  <label key={item.name} className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-950 p-4">
                    <span>{item.name}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-slate-400">฿{item.monthly}/เดือน</span>
                      <input
                        type="checkbox"
                        className="h-4 w-4 accent-blue-500"
                        checked={selected.includes(item.name)}
                        onChange={() => toggleApp(item.name)}
                      />
                    </div>
                  </label>
                ))}
              </div>
              <div className="rounded-2xl border border-blue-500/50 bg-slate-950 p-6">
                <p className="text-slate-400">ยอดรวมรายเดือนตอนนี้</p>
                <p className="mt-1 text-5xl font-bold text-blue-400 tabular-nums">฿{monthlyTotal.toLocaleString()}</p>
                <p className="mt-6 text-lg text-slate-200">
                  ถ้าปล่อยไว้ทั้งปี คุณอาจจ่ายรวมประมาณ <span className="font-bold text-blue-300">฿{yearlyLeakage.toLocaleString()}/ปี</span>
                </p>
                <p className="mt-2 text-sm text-slate-400">ตัวเลขนี้ทำให้คุณตัดสินใจได้เร็วขึ้นว่าจะคงหรือยกเลิกรายการไหน</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 py-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-base font-semibold text-blue-900 md:text-lg">
              ถ้าผลรวมด้านบนทำให้คุณแปลกใจ — Sub Manager ช่วยให้คุณเห็นตัวเลขนี้ได้ทุกวัน ไม่ใช่แค่ตอนคำนวณ.
            </p>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-section">ผลลัพธ์ที่คุณควรได้จากการจัดการ Subscription</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {solutionOutcomes.map((item) => (
                <article key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="text-card-title">{item.title}</h3>
                  <p className="mt-2 text-body text-slate-600">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-100 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-section">How it works (3 ขั้นตอนสั้น ๆ)</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {howItWorks.map((item) => (
                <article key={item.step} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">{item.step}</p>
                  <h3 className="mt-3 text-card-title">{item.title}</h3>
                  <p className="mt-2 text-body text-sm text-slate-600">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-16 text-white">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-section">เห็นภาพใช้งานจริงก่อนเริ่ม</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <article className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
                <p className="text-sm text-slate-300">Dashboard Mockup</p>
                <div className="mt-4 rounded-xl border border-slate-700 bg-slate-950 p-4">
                  <p className="text-sm text-slate-300">ยอดรวมเดือนนี้</p>
                  <p className="mt-1 text-3xl font-bold text-blue-400">฿{monthlyTotal.toLocaleString()}</p>
                  <p className="mt-3 text-body text-sm text-slate-400">เห็นหมวดจ่ายซ้ำและรายการที่ควรตัดได้ในมุมมองเดียว</p>
                </div>
              </article>
              <article className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
                <p className="text-sm text-slate-300">LINE Alert Preview</p>
                <div className="mt-4 rounded-xl bg-slate-800 p-4">
                  <p className="text-sm">🔔 แจ้งเตือนล่วงหน้า 3 วัน: Canva Pro กำลังจะตัดเงิน 420 บ.</p>
                </div>
                <p className="mt-3 text-body text-sm text-slate-400">
                  จุดประสงค์คือให้คุณมีเวลาตัดสินใจก่อนถูกตัดบิล ไม่ใช่ให้มารู้ทีหลังตอนเงินออกไปแล้ว
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="packs" className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-section">Pack Comparison: เลือกให้ตรงรูปแบบการจ่ายของคุณ</h2>
            <p className="mt-3 max-w-3xl text-body text-slate-600">
              ทุกแพ็กออกแบบให้คุณเห็นว่าใช้กับใคร เหมาะกับ subscription แบบไหน และช่วยให้ตัดสินใจคุมต้นทุนได้อย่างไร.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {packCards.map((pack) => (
                <article key={pack.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-sm font-semibold text-blue-700">{pack.name}</p>
                  <p className="mt-1 text-2xl font-bold">{pack.price}</p>
                  <p className="mt-3 rounded-lg bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-900">{pack.highlight}</p>
                  <ul className="mt-4 space-y-2 text-body text-sm text-slate-700">
                    <li>
                      <span className="font-semibold">เหมาะกับใคร:</span> {pack.forWho}
                    </li>
                    <li>
                      <span className="font-semibold">จัดการอะไรได้ดี:</span> {pack.handlesBest}
                    </li>
                    <li>
                      <span className="font-semibold">ผลลัพธ์:</span> {pack.outcome}
                    </li>
                  </ul>
                  <button className={`mt-5 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100 ${focusVisibleRing}`}>
                    ดูรายละเอียดแพ็ก
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-section">FAQ</h2>
            <div className="mt-6 space-y-3">
              {faqs.map((item) => (
                <details key={item.q} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <summary className="cursor-pointer font-semibold">{item.q}</summary>
                  <p className="mt-2 text-body text-sm text-slate-600">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden bg-blue-700 py-16 text-white">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-45">
            <div className="absolute left-[-10%] top-[-60%] h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(191,219,254,0.4)_0%,_rgba(191,219,254,0)_72%)]" />
            <div className="absolute bottom-[-58%] right-[-4%] h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(125,211,252,0.35)_0%,_rgba(125,211,252,0)_74%)]" />
          </div>
          <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start gap-4 px-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-section">เริ่มคุมค่า Subscription ก่อนรอบบิลถัดไป</h2>
              <p className="mt-2 text-body text-blue-50">เริ่มจากบัญชีฟรี แล้วค่อยปรับแพ็กตามรูปแบบการใช้งานจริงของคุณ</p>
            </div>
            <button className={`rounded-full bg-white px-6 py-3 font-bold text-blue-800 hover:bg-blue-50 ${focusVisibleRing}`}>
              สร้างบัญชีฟรี
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 py-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 text-slate-400">
          <span className="text-2xl font-bold tracking-tight">
            <span className="text-white">Sub</span>
            <span className="text-blue-600 drop-shadow-[0_0_8px_rgba(37,99,235,0.8)]">Manager</span>
          </span>
          <p className="text-sm">© {new Date().getFullYear()} SubManager. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
