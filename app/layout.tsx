import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AIRNESS",
  description: "Breathing, scam protection, awareness system",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <head>
        {/* 1. Google Search Console 驗證標記 (由 Alex 提供) */}
        <meta name="google-site-verification" content="IlZcJdJuBrExzQq24t9gy2WJQTtZJKvBP-DP0DDEQms" />

        {/* 2. Google AdSense 代碼 (保持原樣) */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4734323017789470"
          crossOrigin="anonymous"
        ></script>
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}