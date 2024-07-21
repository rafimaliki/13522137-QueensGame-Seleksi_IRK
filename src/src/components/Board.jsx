import BoardRow from "./BoardRow";

const Board = ({
  boardData,
  setBoardData,
  colorIndex,
  isColorMode,
  queenMatrix,
  chessPiece,
}) => {
  return (
    <div className="w-fit h-fit mt-2 mb-10">
      {boardData.grid.map((row, idx) => (
        <BoardRow
          key={idx}
          row={idx}
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

export default Board;
