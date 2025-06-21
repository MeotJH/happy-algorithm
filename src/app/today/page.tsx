// src/app/today/page.tsx
import { HappinessFormProvider } from "./HappinessFormContext";
import StepRenderer from "./StepRenderer";

export default function TodayPage() {
  return (
    <HappinessFormProvider>
      <main className="w-full max-w-[460px] mx-auto px-5 py-10 min-h-screen bg-[#f9fafb]">
        <StepRenderer />
      </main>
    </HappinessFormProvider>
  );
}
