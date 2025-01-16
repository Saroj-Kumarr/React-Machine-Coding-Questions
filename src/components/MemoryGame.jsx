import { useEffect, useState } from "react";
import { generateGrids } from "../utils";

const MemoryGame = () => {
  const [cards, setCards] = useState(generateGrids());
  const [isLocked, setIsLocked] = useState(false);
  const [flippedCards, setFlippedCards] = useState([]);

  const handleCardClick = (index) => {
    if (cards[index].isFlipped || isLocked) return;

    const updatedCards = [...cards];
    updatedCards[index].isFlipped = true;
    setCards(updatedCards);
    setFlippedCards((prevFlipped) => [...prevFlipped, index]);
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      setIsLocked(true);

      setTimeout(() => {
        const [firstIndex, secondIndex] = flippedCards;
        if (cards[firstIndex].value !== cards[secondIndex].value) {
          setCards((prevCards) => {
            const updatedCards = [...prevCards];
            updatedCards[firstIndex].isFlipped = false;
            updatedCards[secondIndex].isFlipped = false;
            return updatedCards;
          });
        }
        setFlippedCards([]);
        setIsLocked(false);
      }, 1500);
    }
  }, [flippedCards, cards]);

  return (
    <div className="grid grid-cols-4 gap-4 mt-8 p-4">
      {cards.map((card, index) => (
        <button
          key={index}
          onClick={() => handleCardClick(index)}
          className={`
            flex items-center justify-center
            h-16 w-16 rounded-md border shadow-lg text-2xl font-bold
            ${
              card.isFlipped
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }
          `}
        >
          {card.isFlipped ? card.value : "?"}
        </button>
      ))}
    </div>
  );
};

export default MemoryGame;
