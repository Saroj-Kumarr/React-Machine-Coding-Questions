import { useRef } from "react";
import { useState } from "react";

const DragAndDrop = ({ initialData }) => {
  const [data, setData] = useState(initialData);
  const dragItem = useRef();
  const dragContainer = useRef();

  const handleDragStart = (e, item, container) => {
    e.target.style.opacity = "0.4";
    dragItem.current = item;
    dragContainer.current = container;
  };

  const handleDragEnd = (e) => {
    e.target.style.opacity = "1";
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, container) => {
    const item = dragItem.current;
    const sourceContainer = dragContainer.current;

    setData((prevData) => {
      const newData = { ...prevData };
      newData[sourceContainer] = prevData[sourceContainer].filter(
        (i) => i !== item
      );
      newData[container] = [...prevData[container], item];
      return newData;
    });
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {Object.keys(data).map((container, index) => {
        return (
          <div
            onDrop={(e) => handleDrop(e, container)}
            onDragOver={handleDragOver}
            key={index}
            style={{
              background: "#f0f0f0",
              padding: "1rem",
              width: 250,
              minHeight: 300,
            }}
          >
            <h2>{container}</h2>
            {data[container].map((item, idx) => {
              return (
                <div
                  key={idx}
                  onDragStart={(e) => handleDragStart(e, item, container)}
                  onDragEnd={handleDragEnd}
                  draggable
                  style={{
                    userSelect: "none",
                    padding: 16,
                    margin: "0 0 8px 0",
                    backgroundColor: "white",
                    cursor: "move",
                  }}
                >
                  {item}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default DragAndDrop;
