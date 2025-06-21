// src/app/today/StepRenderer.tsx
"use client";

import { useHappinessForm } from "./HappinessFormContext";
import StepOutdoor from "./steps/StepOutdoor";
import StepNature from "./steps/StepNature";
import StepSocial from "./steps/StepSocial";
import StepChildhood from "./steps/StepChildhood";
import StepTemperature from "./steps/StepTemperature";
import StepVacation from "./steps/StepVacation";
import StepDone from "./steps/StepDone";

export default function StepRenderer() {
  const { step } = useHappinessForm();

  switch (step) {
    case "outdoor":
      return <StepOutdoor />;
    case "nature":
      return <StepNature />;
    case "social":
      return <StepSocial />;
    case "childhood":
      return <StepChildhood />;
    case "temperature":
      return <StepTemperature />;
    case "vacation":
      return <StepVacation />;
    case "done":
      return <StepDone />;
    default:
      return null;
  }
}
