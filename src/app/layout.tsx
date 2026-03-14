import type { Metadata } from "next";
import { Inter, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const notoThai = Noto_Sans_Thai({
  subsets: ["thai"],
  variable: "--font-noto-thai",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "SubManager | Stop Subscription Leakage",
  description: "Track subscriptions in one dashboard and get proactive billing alerts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${inter.variable} ${notoThai.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
