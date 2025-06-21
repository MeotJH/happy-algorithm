"use client";

import { useHappinessForm } from "../HappinessFormContext";

export default function StepOutdoor() {
  const { data, updateField, goNext } = useHappinessForm();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, "");
    const parsed = parseInt(raw, 10);
  
    if (raw === "") {
      updateField("O", 0); // 입력 지워졌을 때도 반영
      return;
    }
  
    if (!isNaN(parsed) && parsed <= 24) {
      updateField("O", parsed);
    }
  };
  

  const feedbackMessage = (() => {
    if (data.O === 0) return "☁️ 실외에 거의 없었어요";
    if (data.O <= 2) return "🌥️ 실외 활동이 조금 있었어요";
    if (data.O <= 5) return "⛅ 산책이나 이동이 있었네요";
    return "☀️ 활발히 야외 활동을 즐기셨네요!";
  })();

  return (
    <div className="p-6 space-y-6 bg-white border border-gray-200 shadow-md rounded-2xl">
      <div className="text-lg font-semibold">
        ☀️ 오늘 하루 동안 실외에서 햇빛이나 바람을 직접 느낀 시간은 몇 시간이었나요?
        <br />
        <span className="text-sm text-gray-500">
          예: 산책, 이동 중 걷기, 외부 활동 등
        </span>
      </div>

      <input
        inputMode="text"
        pattern="[0-9]*"
        min={0}
        max={24}
        value={data.O}
        onChange={handleInput}
        className="w-full text-center text-3xl border border-gray-300 rounded-xl py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />

      <div className="text-center text-sm text-gray-600">{feedbackMessage}</div>

      <div className="grid grid-cols-4 gap-2">
        {[0, 1, 2, 3].map((h) => (
          <button
            key={h}
            onClick={() => updateField("O", h)}
            className={`py-2 text-sm rounded-lg border ${
              data.O === h
                ? "bg-blue-100 text-blue-700 border-blue-500"
                : "border-gray-300 text-gray-700"
            }`}
          >
            {h}시간
          </button>
        ))}
      </div>

      <button
        onClick={goNext}
        className="w-full mt-6 h-[52px] rounded-xl bg-blue-600 text-white font-semibold hover:scale-105 transition"
      >
        다음
      </button>
    </div>
  );
}
