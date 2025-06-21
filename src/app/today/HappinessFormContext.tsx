// src/app/today/HappinessFormContext.tsx
"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export type Step =
  | "outdoor"
  | "nature"
  | "social"
  | "childhood"
  | "temperature"
  | "vacation"
  | "done";

export interface HappinessInput {
  O: number;
  N: number;
  S: number;
  Cpm: number;
  T: number;
  He: number;
}

const defaultState: HappinessInput = {
  O: 0,
  N: 5,
  S: 5,
  Cpm: 5,
  T: 0,
  He: 5,
};

const order: Step[] = [
  "outdoor",
  "nature",
  "social",
  "childhood",
  "temperature",
  "vacation",
  "done",
];

interface FormContextType {
  step: Step;
  data: HappinessInput;
  updateField: <K extends keyof HappinessInput>(key: K, value: HappinessInput[K]) => void;
  goNext: () => void;
  submit: () => void;
  locationDenied: boolean;
  getLabel: (value: number) => string;
}
const FormContext = createContext<FormContextType | null>(null);

export function HappinessFormProvider({ children }: { children: ReactNode }) {
  const [step, setStep] = useState<Step>("outdoor");
  const [data, setData] = useState<HappinessInput>(defaultState);
  const [locationDenied, setLocationDenied] = useState(false);

  const getLabel = (value: number) => {
    if (value <= 3) return "❌ 거의 없음";
    if (value <= 6) return "🌿 약간";
    return "🌳 충분함";
  };

  useEffect(() => {
    if (step === "temperature") {
      const fetchSeoulTemp = async () => {
        try {
          const res = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=37.5665&longitude=126.9780&current_weather=true`
          );
          const weather = await res.json();
          setData((prev) => ({
            ...prev,
            T: weather.current_weather.temperature,
          }));
        } catch {
          // 서울 API 호출도 실패했을 경우 fallback
          setData((prev) => ({ ...prev, T: 22 }));
        }
      };
  
      if (!navigator.geolocation) {
        setLocationDenied(true);
        fetchSeoulTemp();
        return;
      }
  
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          try {
            const res = await fetch(
              `https://api.open-meteo.com/v1/forecast?latitude=${pos.coords.latitude}&longitude=${pos.coords.longitude}&current_weather=true`
            );
            const weather = await res.json();
            setData((prev) => ({
              ...prev,
              T: weather.current_weather.temperature,
            }));
          } catch {
            setLocationDenied(true);
            fetchSeoulTemp();
          }
        },
        () => {
          setLocationDenied(true);
          fetchSeoulTemp();
        }
      );
    }
  }, [step]);
  

  const goNext = () => {
    const idx = order.indexOf(step);
    setStep(order[Math.min(idx + 1, order.length - 1)]);
  };

  const updateField = <K extends keyof HappinessInput>(key: K, value: HappinessInput[K]) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const submit = () => {
    localStorage.setItem("todayHappinessInput", JSON.stringify(data));
    window.location.href = "/result";
  };

  return (
    <FormContext.Provider value={{ step, data, updateField, goNext, submit, locationDenied ,getLabel}}>
      {children}
    </FormContext.Provider>
  );
}

export function useHappinessForm() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useHappinessForm must be used within a HappinessFormProvider");
  }
  return context;
}
