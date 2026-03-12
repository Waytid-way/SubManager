"use client";

import { useMemo, useState } from "react";

type SubscriptionItem = {
  name: string;
  monthly: number;
};

const subscriptions: SubscriptionItem[] = [
  { name: "Netflix", monthly: 419 },
  { name: "Spotify", monthly: 139 },
  { name: "Canva Pro", monthly: 420 },
  { name: "Google One", monthly: 99 },
  { name: "YouTube Premium", monthly: 179 },
];

const onboardingVariant: "A" | "B" = "B";
const packEntryVariant: "A" | "B" = "B";
const compareVariant: "A" | "B" = "B";

const painPoints = [
  "ลืมยกเลิกแอปที่ไม่ได้ใช้ จนเสียเงินฟรีทุกเดือน",
  "จ่ายหลายบริการซ้ำกันโดยไม่รู้ตัว",
  "ไม่รู้ว่าสุดท้ายแล้วจ่าย Subscription เดือนละเท่าไร",
];

const faqs = [
  {
    q: "ต้องเชื่อมบัญชีธนาคารไหม?",
    a: "ไม่จำเป็นสำหรับเริ่มต้นใช้งาน เราเน้นการรวมรายการสมัครและระบบแจ้งเตือนก่อนตัดบิล",
  },
  {
    q: "ข้อมูลปลอดภัยไหม?",
    a: "ระบบไม่เก็บรหัสบัตร และออกแบบให้ผู้ใช้ควบคุมสถานะ subscription ของตัวเองได้ 100%",
  },
  {
    q: "ถ้าอยากหยุดใช้งานทำได้ไหม?",
    a: "ได้ทันที คุณสามารถหยุดหรือแก้ไขรายการได้เองทุกเมื่อ",
  },
  {
    q: "ทำไมต้องเริ่มตอนนี้?",
    a: "ทุกเดือนที่ปล่อยผ่านคือค่าใช้จ่ายที่รั่วไหลต่อเนื่อง เริ่มวันนี้จะเห็นยอดรวมและโอกาสประหยัดทันที",
  },
];

export default function LandingPage() {
  const [selected, setSelected] = useState<string[]>(["Netflix", "Canva Pro"]);

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
          <p className="text-2xl font-bold tracking-tight">
            <span className="text-white">Sub</span>
            <span className="text-blue-600 drop-shadow-[0_0_8px_rgba(37,99,235,0.8)]">Manager</span>
          </p>
          <div className="flex items-center gap-5 text-sm font-medium text-slate-200">
            <a href="#features" className="hover:text-white">
              Features
            </a>
            <a href="#packs" className="hover:text-white">
              Packs
            </a>
            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
            <button className="rounded-full border border-slate-600 px-4 py-1.5 hover:border-slate-300">
              Log in
            </button>
          </div>
        </div>
      </nav>

      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <p className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
              Outcome-first: ลดค่าใช้จ่ายที่ลืมจ่ายภายใน 3 นาที
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              หยุดเงินรั่วจาก Subscription ที่คุณลืมใช้
            </h1>
            <p className="text-lg text-slate-600">
              รู้ทันทีว่าคุณกำลังเสียเงินปีละเท่าไร รวมทุก Subscription ไว้ที่เดียว และรับการเตือนก่อนตัดบิล
              3-5 วันผ่าน Email และ LINE
            </p>
            <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-800">
              ⏰ คนส่วนใหญ่มี 4-8 subscriptions และมักลืมอย่างน้อย 1 ตัว — ทุกเดือนที่ปล่อยผ่านคือเงินที่หายไป
            </p>
            <div className="flex flex-wrap gap-3">
              {onboardingVariant === "A" ? (
                <button className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-200 hover:bg-blue-700">
                  เพิ่มรายการของคุณ
                </button>
              ) : (
                <button aria-label="เริ่มใช้ฟรีผ่าน LINE" className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-200 hover:bg-blue-700">
                  เริ่มใช้ฟรีผ่าน LINE
                </button>
              )}
              <button aria-label="ดู Demo Dashboard" className="rounded-full border border-slate-300 px-6 py-3 font-semibold hover:bg-slate-100">
                ดู Demo Dashboard
              </button>
            </div>
            <p className="text-xs font-medium text-slate-500">
              Primary CTA: เริ่มใช้ฟรีผ่าน LINE • Secondary CTA: ดู Demo Dashboard • Onboarding Variant {onboardingVariant}
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl">
            <div className="rounded-2xl bg-slate-900 p-4 text-white shadow-2xl">
              <p className="text-xs text-slate-300">LINE Alert Preview</p>
              <div className="mt-3 rounded-xl bg-slate-800 p-4">
                <p className="text-sm">🔔 พรุ่งนี้ Netflix จะตัดเงิน 419 บ. เตรียมเงินไว้ด้วยนะ!</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl bg-slate-100 p-3">
                <p className="text-slate-500">Monthly Total</p>
                <p className="text-xl font-bold">฿2,390</p>
              </div>
              <div className="rounded-xl bg-blue-50 p-3">
                <p className="text-blue-700">Yearly Leakage</p>
                <p className="text-xl font-bold text-blue-800">฿28,680</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white pb-8">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:grid-cols-3">
              <div>
                <p className="text-3xl font-bold text-blue-700">120+</p>
                <p className="text-sm text-slate-600">ผู้ทดลองใช้ช่วงแรก</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-700">500+</p>
                <p className="text-sm text-slate-600">subscription items ที่ถูกจัดการแล้ว</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-700">฿2,800/ปี</p>
                <p className="text-sm text-slate-600">ค่าเฉลี่ยที่ผู้ใช้พบว่า “รั่วโดยไม่รู้ตัว”</p>
              </div>
            </div>
            <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-sm">
              “เพิ่งรู้ว่าตัวเองเสียเงินกับแอปที่ไม่ได้ใช้เดือนละ 300 บาท” — Student User
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-16 text-white">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold">คุณจ่ายแอปซ้ำซ้อนอยู่เท่าไร?</h2>
            <p className="mt-2 text-slate-300">ติ๊กแอปที่ใช้อยู่ แล้วดูเงินรั่วไหลต่อปีแบบเรียลไทม์</p>
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {painPoints.map((pain) => (
                <div key={pain} className="rounded-xl border border-red-900/40 bg-red-950/30 p-4 text-sm text-red-100">
                  ⚠️ {pain}
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div className="space-y-3">
                {subscriptions.map((item) => (
                  <label key={item.name} className="flex items-center justify-between rounded-xl border border-slate-800 p-4">
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
              <div className="rounded-2xl border border-blue-500/50 bg-slate-900 p-6">
                <p className="text-slate-400">ยอดรายเดือนที่เลือก</p>
                <p className="mt-1 text-5xl font-bold text-blue-400">฿{monthlyTotal.toLocaleString()}</p>
                <p className="mt-6 text-lg text-slate-200">
                  คุณอาจมีเงินรั่วไหล <span className="font-bold text-blue-300">฿{yearlyLeakage.toLocaleString()}/ปี</span>
                </p>
                <p className="mt-2 text-sm text-slate-400">เริ่มตอนนี้เพื่อรับแจ้งเตือนรอบบิลแรกและหยุดการจ่ายที่ไม่จำเป็น</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold">How it works (ง่ายใน 3 ขั้นตอน)</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                ["1) เพิ่มรายการที่ใช้อยู่", "เลือกแอปที่คุณจ่ายอยู่ เช่น Netflix, Spotify, Canva"],
                ["2) ระบบรวมยอดให้ทันที", "เห็นภาพรวมค่าใช้จ่ายรายเดือนและรายปีใน dashboard เดียว"],
                ["3) รับการแจ้งเตือนก่อนตัดบิล", "เตือนล่วงหน้า 3-5 วันผ่าน Email และ LINE เพื่อไม่ให้เงินรั่ว"],
              ].map(([title, desc]) => (
                <article key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="bg-slate-100 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold">Core Features ที่ได้ใช้ทันที</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                ["Proactive Alerts", "แจ้งเตือนก่อนตัดบิล 3-5 วัน ผ่าน Email และ LINE"],
                ["Centralized Dashboard", "รวมทุกบริการไว้หน้าเดียว เห็นยอดรวมชัดเจน"],
                ["Curated Packs", "แนะนำชุดเครื่องมือที่คุ้มค่า และพร้อมลิงก์สมัคร"],
              ].map(([title, desc]) => (
                <article key={title} className="rounded-2xl bg-white p-5 shadow-sm">
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-slate-600">{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="packs" className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold">The Ecosystem: Subscription Packs</h2>
            <p className="mt-2 text-slate-600">Active experiments: Pack Entry {packEntryVariant}, Compare UI {compareVariant}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {packEntryVariant === "A" ? (
                <button className="rounded-full bg-slate-900 px-5 py-2 font-semibold text-white">ดูแพ็กทั้งหมด</button>
              ) : (
                <button className="rounded-full bg-blue-600 px-5 py-2 font-semibold text-white">ทำควิซค้นหา Pack ที่ใช่</button>
              )}
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                ["Student Pack", "เหมาะกับ Netflix + Spotify + ChatGPT เพื่อเรียนและทำงานไวขึ้น"],
                ["Creator Pack", "เหมาะกับ Canva + Notion + AI tools สำหรับงานคอนเทนต์ต่อเนื่อง"],
                ["Developer Pack", "เหมาะกับ GitHub + Cloud services + AI coding tools"],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-2xl border border-slate-200 p-4">
                  <p className="font-semibold">{title}</p>
                  <p className="mt-2 text-sm text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full bg-white text-left text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3">Pack</th>
                    <th className="px-4 py-3">Monthly</th>
                    <th className="px-4 py-3">Savings</th>
                    <th className="px-4 py-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Student Focus", "฿299", "฿1,200/ปี"],
                    ["Creator Boost", "฿699", "฿2,800/ปี"],
                    ["Dev Stack", "฿899", "฿3,600/ปี"],
                  ].map(([pack, price, saving]) => (
                    <tr key={pack} className="border-t border-slate-100">
                      <td className="px-4 py-3">{pack}</td>
                      <td className="px-4 py-3">{price}</td>
                      <td className={`px-4 py-3 ${compareVariant === "B" ? "font-bold text-blue-700" : "text-slate-600"}`}>
                        {saving}
                      </td>
                      <td className="px-4 py-3">
                        <button aria-label={`ไปหน้าข้อเสนอ ${pack}`} className="rounded-full bg-slate-900 px-4 py-1.5 text-white">ไปหน้าข้อเสนอ</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-16 text-white">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold">Brand Story: Your Subscription Guardian</h2>
            <p className="mt-3 max-w-4xl text-slate-300">
              เราสร้าง SubManager เพราะเห็นเพื่อนและทีมงานหลายคนเสียเงินกับแอปที่ลืมไปแล้วทุกเดือน
              เป้าหมายของเราคือทำให้ทุกคนควบคุมค่าใช้จ่าย subscription ได้ง่าย โปร่งใส และรู้ทันก่อนเงินถูกตัด
            </p>
          </div>
        </section>

        <section id="faq" className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold">FAQ</h2>
            <div className="mt-6 space-y-3">
              {faqs.map((item) => (
                <details key={item.q} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <summary className="cursor-pointer font-semibold">{item.q}</summary>
                  <p className="mt-2 text-sm text-slate-600">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-blue-600 py-16 text-white">
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-bold">เริ่มปิดรูรั่วค่า Subscription วันนี้</h2>
              <p className="mt-2 text-blue-100">ไปถึง Value Moment ให้เร็วที่สุด: รวมยอด + รับแจ้งเตือนครั้งแรก</p>
            </div>
            <button aria-label="เริ่มใช้ฟรีผ่าน LINE (Final CTA)" className="rounded-full bg-white px-6 py-3 font-bold text-blue-700 hover:bg-blue-50">เริ่มใช้ฟรีผ่าน LINE</button>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 py-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 text-slate-400">
          <p className="text-2xl font-bold tracking-tight">
            <span className="text-white">Sub</span>
            <span className="text-blue-600 drop-shadow-[0_0_8px_rgba(37,99,235,0.8)]">Manager</span>
          </p>
          <p className="text-sm">© {new Date().getFullYear()} SubManager. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
