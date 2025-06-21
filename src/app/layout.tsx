// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "행복 방정식",
  description: "클리프 아널 행복 방정식을 기반으로 만든 심리 점검 웹앱",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
      <header className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
        <div className="max-w-[460px] mx-auto px-4 py-3 text-[18px] font-semibold text-gray-800">
          행복 방정식
        </div>
      </header>
        <div className="pt-[64px]">{children}</div>
      </body>
    </html>
  );
}
