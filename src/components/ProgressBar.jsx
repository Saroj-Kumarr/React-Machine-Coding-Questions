import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const intervalue = setInterval(() => {
      setPercentage((oldPercentage) => {
        if (oldPercentage === 100) {
          clearInterval(intervalue);
          return 100;
        }
        console.log(oldPercentage);
        return oldPercentage + 5;
      }, 100);

      return () => clearInterval(intervalue);
    }, 200);
  }, []);

  return (
    <div className="relative flex items-center justify-center overflow-hidden m-2 rounded-xl border border-gray-300 h-8">
      <span
        style={{
          width: `${percentage}%`,
          transition: "width 0.1s linear",
        }}
        className={`bg-green-700 absolute h-full left-0`}
      ></span>
      <span
        className={`z-10 font-semibold ${
          percentage > 50 ? "text-white" : "text-black"
        }`}
      >
        {percentage}%
      </span>
    </div>
  );
};

export default ProgressBar;
