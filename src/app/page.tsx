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

export default function Home() {
  const focusVisibleRing =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";
  const focusVisibleRingOnBlue =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-700";

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
          <div className="flex items-center gap-5 text-sm font-medium text-slate-100">
            <a href="#features" className={`rounded-sm text-slate-100 hover:text-white ${focusVisibleRing}`}>
              Features
            </a>
            <a href="#packs" className={`rounded-sm text-slate-100 hover:text-white ${focusVisibleRing}`}>
              Packs
            </a>
            <button
              className={`rounded-full border border-slate-500 px-4 py-1.5 text-slate-100 hover:border-slate-200 hover:text-white ${focusVisibleRing}`}
            >
              Log in
            </button>
          </div>
        </div>
      </nav>

      <main>
        <section className="relative isolate overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
            <div className="absolute left-[-12%] top-[-30%] h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.2)_0%,_rgba(59,130,246,0)_72%)]" />
            <div className="absolute bottom-[-36%] right-[-10%] h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(14,165,233,0.18)_0%,_rgba(14,165,233,0)_70%)]" />
          </div>
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
            <p className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
              Phase 1: Value Moment + Affiliate CTR
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              หยุด &ldquo;เงินรั่วไหล&rdquo; จัดการทุก Subscription จบในที่เดียว
            </h1>
            <p className="text-lg text-slate-700">
              รวมทุก Subscription ไว้ที่เดียว เห็นยอดรวมชัดเจน รับการแจ้งเตือนก่อนตัดบิล 3-5 วัน
              ผ่าน Email และ LINE พร้อมแนะนำแพ็กที่คุ้มที่สุดสำหรับคุณ
            </p>
            <div className="flex flex-wrap gap-3">
              {onboardingVariant === "A" ? (
                <button
                  className={`rounded-full bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800 ${focusVisibleRing}`}
                >
                  เพิ่มรายการของคุณ
                </button>
              ) : (
                <button
                  className={`rounded-full bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800 ${focusVisibleRing}`}
                >
                  เริ่มใช้งานผ่าน LINE
                </button>
              )}
              <button
                className={`rounded-full border border-slate-400 bg-white px-6 py-3 font-semibold text-slate-800 hover:bg-slate-100 ${focusVisibleRing}`}
              >
                ดูเดโมแดชบอร์ด
              </button>
            </div>
            <p className="text-xs font-medium text-slate-500">
              Active Experiment: Onboarding Variant {onboardingVariant}
            </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl">
              <div className="rounded-2xl bg-slate-900 p-4 text-white shadow-2xl">
                <p className="text-xs text-slate-200">LINE Alert Preview</p>
                <div className="mt-3 rounded-xl bg-slate-800 p-4">
                  <p className="text-sm text-slate-100">🔔 พรุ่งนี้ Netflix จะตัดเงิน 419 บ. เตรียมเงินไว้ด้วยนะ!</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl bg-slate-100 p-3">
                  <p className="text-slate-500">Monthly Total</p>
                  <p className="text-xl font-bold">฿2,390</p>
                </div>
                <div className="rounded-xl bg-blue-50 p-3">
                  <p className="text-blue-700">Next Bill</p>
                  <p className="text-xl font-bold text-blue-800">Tomorrow</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden bg-slate-950 py-16 text-white">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-45">
            <div className="absolute left-[-14%] top-[-15%] h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.35)_0%,_rgba(59,130,246,0)_72%)]" />
            <div className="absolute bottom-[-30%] right-[8%] h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(147,197,253,0.25)_0%,_rgba(147,197,253,0)_74%)]" />
          </div>
          <div className="relative z-10 mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold">คุณจ่ายแอปซ้ำซ้อนอยู่เท่าไร?</h2>
            <p className="mt-2 text-slate-100">ติ๊กแอปที่ใช้อยู่ แล้วดูเงินรั่วไหลต่อปีแบบเรียลไทม์</p>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div className="space-y-3">
                {subscriptions.map((item) => (
                  <label key={item.name} className="flex items-center justify-between rounded-xl border border-slate-800 p-4">
                    <span>{item.name}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-slate-200">฿{item.monthly}/เดือน</span>
                      <input
                        type="checkbox"
                        className="h-4 w-4 accent-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                        checked={selected.includes(item.name)}
                        onChange={() => toggleApp(item.name)}
                      />
                    </div>
                  </label>
                ))}
              </div>
              <div className="rounded-2xl border border-blue-500/50 bg-slate-900 p-6">
                <p className="text-slate-200">ยอดรายเดือนที่เลือก</p>
                <p className="mt-1 text-5xl font-bold text-blue-400">฿{monthlyTotal.toLocaleString()}</p>
                <p className="mt-6 text-lg text-slate-100">
                  คุณอาจมีเงินรั่วไหล <span className="font-bold text-blue-300">฿{yearlyLeakage.toLocaleString()}/ปี</span>
                  ให้เราช่วยเตือนก่อนโดนหักเงินฟรีๆ
                </p>
              </div>
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
                  <p className="mt-2 text-slate-700">{desc}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-sm text-slate-500">Dashboard Mockup</p>
              <div className="mt-3 grid gap-4 md:grid-cols-[1fr_2fr]">
                <div className="rounded-xl bg-blue-50 p-4">
                  <p className="text-sm text-blue-700">Donut Summary</p>
                  <p className="mt-2 text-2xl font-bold text-blue-800">฿2,390/mo</p>
                </div>
                <div className="grid gap-2 text-sm">
                  {[
                    "Netflix - Active",
                    "Spotify - Pending",
                    "Canva Pro - Active",
                    "Notion - Pending",
                  ].map((item) => (
                    <div key={item} className="rounded-lg border border-slate-200 p-3">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="packs" className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold">The Ecosystem: Subscription Packs</h2>
            <p className="mt-2 text-slate-700">Active experiments: Pack Entry {packEntryVariant}, Compare UI {compareVariant}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {packEntryVariant === "A" ? (
                <button
                  className={`rounded-full bg-slate-900 px-5 py-2 font-semibold text-white hover:bg-slate-800 ${focusVisibleRing}`}
                >
                  ดูแพ็กทั้งหมด
                </button>
              ) : (
                <button
                  className={`rounded-full bg-blue-700 px-5 py-2 font-semibold text-white hover:bg-blue-800 ${focusVisibleRing}`}
                >
                  ทำควิซค้นหา Pack ที่ใช่
                </button>
              )}
              <button
                className={`rounded-full border border-slate-400 bg-white px-5 py-2 font-semibold text-slate-800 hover:bg-slate-100 ${focusVisibleRing}`}
              >
                Student
              </button>
              <button
                className={`rounded-full border border-slate-400 bg-white px-5 py-2 font-semibold text-slate-800 hover:bg-slate-100 ${focusVisibleRing}`}
              >
                Creator
              </button>
              <button
                className={`rounded-full border border-slate-400 bg-white px-5 py-2 font-semibold text-slate-800 hover:bg-slate-100 ${focusVisibleRing}`}
              >
                Developer
              </button>
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
                        <button
                          className={`rounded-full bg-slate-900 px-4 py-1.5 text-white hover:bg-slate-800 ${focusVisibleRing}`}
                        >
                          ไปหน้าข้อเสนอ
                        </button>
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
            <h2 className="text-3xl font-bold">Trust, Privacy & State Machine</h2>
            <p className="mt-3 max-w-3xl text-slate-100">
              ข้อมูลปลอดภัย ไม่เก็บรหัสบัตร และควบคุมสถานะ Subscription ได้ครบ 100%:
              Pending → Active → Paused → Canceling → Canceled
            </p>
          </div>
        </section>

        <section className="relative isolate overflow-hidden bg-blue-600 py-16 text-white">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-45">
            <div className="absolute left-[-10%] top-[-60%] h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(191,219,254,0.4)_0%,_rgba(191,219,254,0)_72%)]" />
            <div className="absolute bottom-[-58%] right-[-4%] h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(125,211,252,0.35)_0%,_rgba(125,211,252,0)_74%)]" />
          </div>
          <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start gap-4 px-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-bold">เริ่มปิดรูรั่วค่า Subscription วันนี้</h2>
              <p className="mt-2 text-blue-50">ไปถึง Value Moment ให้เร็วที่สุด: รวมยอด + รับแจ้งเตือนครั้งแรก</p>
            </div>
            <button className={`rounded-full bg-white px-6 py-3 font-bold text-blue-800 hover:bg-blue-50 ${focusVisibleRingOnBlue}`}>สร้างบัญชีฟรี</button>
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
