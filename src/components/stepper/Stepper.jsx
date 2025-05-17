import { useState } from "react";

const steps = [
  { label: "Personal Info", content: <div>Personal Information Content</div> },
  { label: "Account Info", content: <div>Account Info Content</div> },
  { label: "Payment", content: <div>Payment Content</div> },
  { label: "Confirmation", content: <div>Confirmation Content</div> },
  { label: "Review", content: <div>Review Content</div> },
];

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4">
      {/* Step Indicator */}
      <div className="flex flex-col gap-6 relative">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center relative">
            {/* Step Number */}
            <div
              className={`h-10 w-10 rounded-full flex items-center justify-center text-white font-semibold ${
                index <= currentStep ? "bg-sky-500" : "bg-gray-300"
              }`}
            >
              {index + 1}
            </div>
            {/* Step Label */}
            <span
              className={`ml-4 font-medium ${
                index <= currentStep ? "text-sky-500" : "text-gray-400"
              }`}
            >
              {step.label}
            </span>
            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div
                className={`absolute left-[22px] top-[40px] h-8 w-[2px] ${
                  index < currentStep ? "bg-sky-500" : "bg-gray-300"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="mt-6 p-4 h-40 bg-gray-50 border border-gray-200 rounded shadow">
        {steps[currentStep].content}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-4">
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          className={`px-4 py-2 rounded ${
            currentStep === 0
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-sky-500 text-white hover:bg-sky-600"
          }`}
        >
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep === steps.length - 1}
          className={`px-4 py-2 rounded ${
            currentStep === steps.length - 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-sky-500 text-white hover:bg-sky-600"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Stepper;
