import { useEffect, useRef, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState({ hour: "", minute: "", second: "" });
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const handleChange = (e, field) => {
    const value = Math.max(0, parseInt(e.target.value, 10) || 0);
    setTime((prevTime) => {
      const updatedTime = { ...prevTime, [field]: value };
      updatedTime.minute += Math.floor(updatedTime.second / 60);
      updatedTime.second %= 60;
      updatedTime.hour += Math.floor(updatedTime.minute / 60);
      updatedTime.minute %= 60;
      return updatedTime;
    });
  };

  const handleStartPause = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime({ hour: "", minute: "", second: "" });
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          const totalSeconds =
            prevTime.hour * 3600 + prevTime.minute * 60 + prevTime.second - 1;

          if (totalSeconds < 0) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            return { hour: 0, minute: 0, second: 0 };
          }

          const hour = Math.floor(totalSeconds / 3600);
          const minute = Math.floor((totalSeconds % 3600) / 60);
          const second = totalSeconds % 60;

          return { hour, minute, second };
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  return (
    <div className="flex flex-col items-center gap-6 p-6 bg-gray-100 rounded-lg shadow-lg w-full max-w-md mx-auto">
      <div className="flex items-center gap-2">
        <input
          type="number"
          placeholder="HH"
          value={time.hour}
          onChange={(e) => handleChange(e, "hour")}
          disabled={isRunning}
          className="w-16 p-2 text-center border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-200"
        />
        <span className="text-xl font-bold">:</span>
        <input
          type="number"
          placeholder="MM"
          value={time.minute}
          onChange={(e) => handleChange(e, "minute")}
          disabled={isRunning}
          className="w-16 p-2 text-center border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-200"
        />
        <span className="text-xl font-bold">:</span>
        <input
          type="number"
          placeholder="SS"
          value={time.second}
          onChange={(e) => handleChange(e, "second")}
          disabled={isRunning}
          className="w-16 p-2 text-center border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-200"
        />
      </div>
      <div className="flex gap-4">
        <button
          onClick={handleStartPause}
          className={`px-4 py-2 rounded-lg shadow-md ${
            isRunning
              ? "bg-red-500 hover:bg-red-600 text-white"
              : "bg-green-500 hover:bg-green-600 text-white"
          } focus:outline-none focus:ring-2 focus:ring-offset-2`}
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
