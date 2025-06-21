"use client";
import { useHappinessForm } from "../HappinessFormContext";

export default function StepTemperature() {
  const { data, goNext,locationDenied } = useHappinessForm();

  return (
    <div className="p-6 space-y-4 bg-white border border-gray-200 shadow-md rounded-2xl">
        <div className="text-lg font-semibold">
        🌡️ 오늘 현재 기온은{" "}
        {data.T === 0 ? (
            <span className="inline-block animate-pulse text-gray-400">로딩 중...</span>
        ) : (
            <strong>{data.T}℃</strong>
        )}
        입니다.
        </div>
      {locationDenied && (
        <div className="text-sm text-gray-500">
          ❗ 위치 권한이 꺼져 있어, 서울 기준 기온을 사용 중입니다.
        </div>
      )}
    <button
        onClick={goNext}
        className="w-full mt-4 h-[52px] rounded-xl bg-blue-600 text-white font-semibold hover:scale-105 transition"
      >
        다음
      </button>
    </div>
  );
}
