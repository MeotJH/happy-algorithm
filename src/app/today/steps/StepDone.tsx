"use client";
import { useHappinessForm } from "../HappinessFormContext";

export default function StepDone() {
  const { submit } = useHappinessForm();

  return (
    <div className="p-6 space-y-6 bg-white border border-gray-200 shadow-md rounded-2xl text-center">
      <div className="text-[17px] font-semibold text-gray-900">🎉 모두 완료되었습니다!</div>
      <div className="text-sm text-gray-500">오늘의 행복 점수를 확인해보세요.</div>

      <button
        onClick={submit}
        className="w-full mt-4 h-[52px] rounded-xl bg-blue-600 text-white font-semibold hover:scale-105 transition"
      >
        결과 보기 →
      </button>
    </div>
  );
}
