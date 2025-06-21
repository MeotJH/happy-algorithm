import { useHappinessForm } from "../HappinessFormContext";

export default function StepNature() {
  const { data, updateField, goNext,getLabel } = useHappinessForm();



  return (
    <div className="p-6 space-y-6 bg-white border border-gray-200 shadow-md rounded-2xl">
      <div className="text-[17px] font-semibold tracking-tight text-gray-900">
        🌳 오늘 하루 동안 하늘, 나무, 꽃, 자연의 소리 등 자연을 직접 경험한 순간이 있었나요?
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700">자연 경험 정도</span>
        <span className="text-sm font-semibold text-blue-600">{getLabel(data.N)}</span>
      </div>

      <input
        type="range"
        min={0}
        max={10}
        value={data.N}
        onChange={(e) => updateField("N", Number(e.target.value))}
        className="w-full accent-blue-600"
      />

      <div className="flex text-xs text-gray-500 px-1">
        <span className="flex-1 text-left">없었음</span>
        <span className="flex-1 text-center">조금 있었음</span>
        <span className="flex-1 text-right">충분히 느꼈음</span>
      </div>

      <div className="text-right text-sm text-gray-500">{data.N} / 10</div>

      <button
        onClick={goNext}
        className="w-full mt-4 h-[52px] rounded-xl bg-blue-600 text-white font-semibold hover:scale-105 transition"
      >
        다음
      </button>
    </div>
  );
}
