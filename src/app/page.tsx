"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#f9fafb] flex flex-col items-center justify-between py-24 px-6">
      <div className="text-center space-y-6">
        <h1 className="text-[28px] font-bold leading-snug text-gray-900">
          오늘 당신의 <br />
          <span className="text-blue-600">행복 점수</span>는 몇 점인가요?
        </h1>
        <p className="text-[16px] text-gray-600 leading-relaxed">
          심리학자 클리프 아널의 행복 방정식을 <br />
          토대로 간단하게 체크해보세요.
        </p>
      </div>

      <button
        onClick={() => router.push("/today")}
        className="w-full max-w-sm h-[52px] rounded-xl bg-blue-600 text-white text-[16px] font-semibold shadow hover:bg-blue-700 transition"
      >
        시작하기
      </button>
    </main>
  );
}
