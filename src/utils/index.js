export const generateGrids = () => {
  const numbers = Array.from({ length: 8 }, (_, i) => i + 1);
  const shuffledGrid = [...numbers, ...numbers].sort(() => Math.random() - 0.5);

  return shuffledGrid.map((value) => ({
    value,
    isFlipped: false,
  }));
};
