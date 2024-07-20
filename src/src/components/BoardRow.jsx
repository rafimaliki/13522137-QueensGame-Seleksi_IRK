import Square from "./Square";

const BoardRow = ({
  row,
  boardData,
  setBoardData,
  colorIndex,
  isColorMode,
  queenMatrix,
}) => {
  return (
    <div className="flex">
      {boardData.grid[row].map((col, idx) => (
        <Square
          key={idx}
          row={row}
          col={idx}
          boardData={boardData}
          setBoardData={setBoardData}
          colorIndex={colorIndex}
          isColorMode={isColorMode}
          queenMatrix={queenMatrix}
        />
      ))}
    </div>
  );
};

export default BoardRow;
