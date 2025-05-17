import { useState } from "react";
import data from "../../../data.json";
import AccordianCard from "./AccordianCard";

const Accordian = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleToggle = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
    }
  };

  return (
    <div className="rounded-lg  border-cyan-200 mt-4 flex flex-col gap-2">
      {data.faqs.map((faq, index) => {
        return (
          <AccordianCard
            key={index}
            index={index}
            handleToggle={handleToggle}
            faq={faq}
            selectedIndex={selectedIndex}
          />
        );
      })}
    </div>
  );
};

export default Accordian;
