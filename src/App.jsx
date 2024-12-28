import { useEffect } from "react";
import ProgressBar from "./components/ProgressBar";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => prev + 1);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto w-[1000px]">
      <ProgressBar completed={value} />
    </div>
  );
};

export default App;
