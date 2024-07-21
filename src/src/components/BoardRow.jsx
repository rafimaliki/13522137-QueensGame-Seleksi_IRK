import Square from "./Square";

const BoardRow = ({
  row,
  boardData,
  setBoardData,
  colorIndex,
  isColorMode,
  queenMatrix,
  chessPiece,
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
          chessPiece={chessPiece}
        />
      ))}
    </div>
  );
};

export default BoardRow;
