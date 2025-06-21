"use client";

import { useEffect, useState } from "react";

type HappinessInput = {
  O: number;
  N: number;
  S: number;
  Cpm: number;
  T: number;
  He: number;
};

export default function ResultPage() {
  const [data, setData] = useState<HappinessInput | null>(null);
  const [score, setScore] = useState<number | null>(null);
  const [level, setLevel] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    const raw = localStorage.getItem("todayHappinessInput");
    if (!raw) return;

    const parsed: HappinessInput = JSON.parse(raw);
    setData(parsed);

    const result = parsed.O + parsed.N * parsed.S + parsed.Cpm / parsed.T + parsed.He;
    const rounded = Math.round(result * 10) / 10;
    setScore(rounded);

    if (rounded >= 80) {
      setLevel("매우 높음 🥳");
      setComment("오늘은 정말 이상적인 하루였습니다. 자연, 사람, 기후, 추억까지 모두 좋았어요. 지금 이 순간을 즐기세요!");
    } else if (rounded >= 60) {
      setLevel("높음 😄");
      setComment("꽤 괜찮은 하루입니다. 특히 자연이나 교류 요소가 높았던 것 같아요. 내일도 기대해도 좋습니다.");
    } else if (rounded >= 30) {
      setLevel("보통 🙂");
      setComment("무난한 하루였어요. 한두 가지 요소가 부족했을 수 있어요. 야외활동이나 대화를 조금 늘려보는 건 어때요?");
    } else {
      setLevel("낮음 😞");
      setComment("오늘은 행복 요소가 적었습니다. 괜찮아요. 내일은 햇살, 사람, 자연과 교감하는 시간을 의식적으로 가져보세요.");
    }
  }, []);

  if (!data || score === null) return <div className="p-6">로딩 중...</div>;

  return (
    <main className="w-full max-w-[460px] mx-auto px-5 py-10 min-h-screen bg-[#f9fafb] flex flex-col justify-between">
      <div className="space-y-6 bg-white border border-gray-200 shadow-md rounded-2xl p-6 text-center">
        <h1 className="text-xl font-bold text-gray-900 mb-2">오늘의 행복 점수</h1>
        <div className="text-[48px] font-bold text-blue-600">{score}점</div>
        <div className="text-[17px] text-gray-700">{level}</div>
        <p className="text-sm text-gray-600 mt-2 leading-relaxed">{comment}</p>

        <div className="w-full bg-gray-200 rounded-full h-3 mt-6">
          <div
            className="bg-blue-500 h-3 rounded-full transition-all"
            style={{ width: `${Math.min(score, 100)}%` }}
          ></div>
        </div>

        <div className="text-left text-sm text-gray-500 mt-6">
          <h2 className="font-semibold mb-2">오늘의 행복 기여도</h2>
          <ul className="space-y-1">
            <li>☀️ 실외 활동: {data.O}시간</li>
            <li>🌿 자연 경험: {data.N}점</li>
            <li>🧑‍🤝‍🧑 사회적 교류: {data.S}점</li>
            <li>🧒 어린 시절 기억: {data.Cpm}점</li>
            <li>🌡️ 현재 기온: {data.T}℃</li>
            <li>🏖️ 휴가 기대감: {data.He}점</li>
          </ul>
        </div>

        <p className="text-xs text-gray-400 mt-6">
          * 이 점수는 심리학자 <strong>Cliff Arnall</strong>의 행복 방정식
          <br/>
           <code>O + (N×S) + Cpm/T + He</code>를 바탕으로 계산됩니다.
        </p>
      </div>

      <button
        onClick={() => (window.location.href = "/today")}
        className="mt-10 w-full h-[52px] rounded-xl bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition"
      >
        다시 입력하기
      </button>
    </main>
  );
}
