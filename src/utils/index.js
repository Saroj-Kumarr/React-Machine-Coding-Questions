export const generateGrids = () => {
  const numbers = Array.from({ length: 8 }, (_, i) => i + 1);
  const shuffledGrid = [...numbers, ...numbers].sort(() => Math.random() - 0.5);

  return shuffledGrid.map((value) => ({
    value,
    isFlipped: false,
  }));
};

export function checkWinner(board, size) {
  // Helper function to check if all elements in array are same as first
  const allSame = (arr) => arr[0] && arr.every((cell) => cell === arr[0]);

  // Check rows
  for (let row of board) {
    if (allSame(row)) return row[0];
  }

  // Check columns
  for (let col = 0; col < size; col++) {
    const column = board.map((row) => row[col]);
    if (allSame(column)) return column[0];
  }

  // Check main diagonal
  const mainDiag = board.map((row, i) => row[i]);
  if (allSame(mainDiag)) return mainDiag[0];

  // Check anti diagonal
  const antiDiag = board.map((row, i) => row[size - 1 - i]);
  if (allSame(antiDiag)) return antiDiag[0];

  return null;
}

export function initialState(size) {
  return Array.from({ length: size }, () => {
    return Array(size).fill(null);
  });
}
