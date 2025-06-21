"use client";
import { useHappinessForm } from "../HappinessFormContext";

export default function StepSocial() {
  const { data, updateField, goNext,getLabel } = useHappinessForm();



  return (
    <div className="p-6 space-y-6 bg-white border border-gray-200 shadow-md rounded-2xl">
      <div className="text-[17px] font-semibold tracking-tight text-gray-900">
      💬 오늘 하루 동안 누군가와 대화하거나 메시지를 주고받은 경험이 있었나요? <br />전화, 직접 대화, 메신저 모두 포함됩니다
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700">사회 경험 정도</span>
        <span className="text-sm font-semibold text-blue-600">{getLabel(data.S)}</span>
      </div>
    
      <input
        type="range"
        min={0}
        max={10}
        value={data.S}
        onChange={(e) => updateField("S", Number(e.target.value))}
        className="w-full accent-blue-600"
      />

      <div className="flex text-xs text-gray-500 px-1">
        <span className="flex-1 text-left">없었음</span>
        <span className="flex-1 text-center">조금 있었음</span>
        <span className="flex-1 text-right">충분히 느꼈음</span>
      </div>

      <div className="text-right text-sm text-gray-500">{data.S} / 10</div>

      <button
        onClick={goNext}
        className="w-full mt-4 h-[52px] rounded-xl bg-blue-600 text-white font-semibold hover:scale-105 transition"
      >
        다음
      </button>
    </div>
  );
}
