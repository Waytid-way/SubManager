import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">{children}</body>
    </html>
  );
}
