"use client";

import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center">
      <div className="bg-white w-[940px] h-[600px] max-w-full max-h-full rounded-2xl shadow-sm mx-4">
        <div className="container grid grid-cols-[minmax(0,_275px)_repeat(3,_minmax(0,_1fr))]">
          <Sidebar activeStep={step} />
        </div>
      </div>
    </div>
  );
}
