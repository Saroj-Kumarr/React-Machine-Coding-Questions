// eslint-disable-next-line react/prop-types
const Board = ({ size, board, handleClick }) => {
  return (
    <div
      className="grid gap-1"
      style={{ gridTemplateColumns: `repeat(${size}, 50px)` }}
    >
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div
            key={colIndex}
            onClick={() => handleClick(rowIndex, colIndex)}
            className="h-12 w-12 border border-gray-400 flex items-center justify-center text-2xl font-semibold cursor-pointer"
          >
            {cell}
          </div>
        ))
      )}
    </div>
  );
};

export default Board;
