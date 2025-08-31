import Image from "next/image";

const steps = [
  { number: 1, title: "YOUR INFO", subtitle: "STEP 1" },
  { number: 2, title: "SELECT PLAN", subtitle: "STEP 2" },
  { number: 3, title: "ADD-ONS", subtitle: "STEP 3" },
  { number: 4, title: "SUMMARY", subtitle: "STEP 4" },
];

export default function Sidebar({ activeStep }: { activeStep: number }) {
  return (
    <div className="relative">
      {/* Text Overlay */}
      <div className="absolute inset-0 z-10 text-white ml-8 mt-8 flex flex-col gap-4">
        {steps.map((step) => (
          <div key={step.number} className="flex mb-4 gap-3">
            <div className="font-ubuntu font-medium w-11 flex justify-center items-center">
              <div
                className={`w-9 h-9 rounded-[50%] flex justify-center items-center ${
                  activeStep === step.number
                    ? "bg-blue-200 text-black"
                    : "border"
                }`}
              >
                {step.number}
              </div>
            </div>
            <div>
              <p className="font-ubuntu font-light text-sm">{step.subtitle}</p>
              <p className="font-ubuntu font-medium text-sm">{step.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Image fills container */}
      <Image
        src="./assets/bg-sidebar-desktop.svg"
        alt=""
        fill
        style={{ objectFit: "cover" }}
        className="rounded-xl"
      />
    </div>
  );
}
