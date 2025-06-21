"use client";
import { useHappinessForm } from "../HappinessFormContext";

export default function StepVacation() {
  const { data, updateField, goNext, getLabel } = useHappinessForm();

  return (
    <div className="p-6 space-y-6 bg-white border border-gray-200 shadow-md rounded-2xl">
      <div className="text-[17px] font-semibold tracking-tight text-gray-900">
      🏖️ 요즘 다가올 여행, 휴가, 휴식에 대한 기대감이 있나요? 
      <br />
      여름이 아니어도, 짧은 휴식이라도 괜찮아요.
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700">휴가 기대 정도</span>
        <span className="text-sm font-semibold text-blue-600">{getLabel(data.He)}</span>
      </div>

      <input
        type="range"
        min={0}
        max={10}
        value={data.He}
        onChange={(e) => updateField("He", Number(e.target.value))}
        className="w-full accent-blue-600"
      />

      <div className="flex text-xs text-gray-500 px-1">
        <span className="flex-1 text-left">없었음</span>
        <span className="flex-1 text-center">조금 있었음</span>
        <span className="flex-1 text-right">충분히 느꼈음</span>
      </div>

      <div className="text-right text-sm text-gray-500">{data.He} / 10</div>
      <button
        onClick={goNext}
        className="w-full mt-4 h-[52px] rounded-xl bg-blue-600 text-white font-semibold hover:scale-105 transition"
      >
        다음
      </button>
    </div>
  );
}
