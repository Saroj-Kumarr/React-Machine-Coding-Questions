import { useEffect, useRef, useState } from "react";
import data from "../../data.json";

const DATA_LENGTH = data.length;

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);
  const intervalId = useRef(null);

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === DATA_LENGTH - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? DATA_LENGTH - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    intervalId.current = setInterval(handleNext, 1000);
    return () => clearInterval(intervalId.current);
  }, []);

  const handleMouseEnter = () => clearInterval(intervalId.current);
  const handleMouseLeave = () => {
    intervalId.current = setInterval(handleNext, 1000);
  };

  return (
    <div className="relative h-60">
      <button
        className="absolute top-[50%] left-0 bg-green-300 px-3 py-2 rounded-md"
        onClick={handlePrev}
      >
        {"<"}
      </button>
      <img
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        src={data[index].download_url}
        alt={data[index].author}
        className="h-full w-full object-cover"
      />
      <button
        className="absolute top-[50%] right-0 bg-green-300 px-3 py-2 rounded-md"
        onClick={handleNext}
      >
        {">"}
      </button>
    </div>
  );
};

export default ImageCarousel;
