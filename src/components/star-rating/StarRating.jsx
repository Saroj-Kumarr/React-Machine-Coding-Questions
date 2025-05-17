import { useState } from "react";

const StarRating = ({ starCount = 5 }) => {
  const [starValue, setStarValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(0);

  const handleClick = (index) => {
    setStarValue(index + 1);
  };

  const handleMouseEnter = (index) => {
    setHoverValue(index + 1);
  };

  const handleMouseLeave = () => {
    setHoverValue(0);
  };

  return (
    <div className="flex gap-2 items-center justify-center bg-slate-400 h-full">
      {Array.from({ length: starCount }, (_, index) => (
        <span
          key={index}
          className={`text-2xl ${
            (hoverValue === 0 && index < starValue) || index < hoverValue
              ? "text-yellow-500"
              : ""
          }`}
          onClick={() => handleClick(index)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default StarRating;
