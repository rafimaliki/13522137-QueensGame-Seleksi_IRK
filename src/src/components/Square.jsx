import { useState } from "react";
import blackQueen from "../assets/black_queen.png";
import { colors } from "../class/SquareData";
import { validateQueen } from "../logic/Solve";

const Square = ({
  row,
  col,
  boardData,
  setBoardData,
  colorIndex,
  isColorMode,
  queenMatrix,
}) => {
  const [queen, setQueen] = useState(boardData.grid[row][col].queen);
  const [squareColorIndex, setSquareColorIndex] = useState(
    boardData.grid[row][col].colorIndex
  );
  const [crossMark, setCrossMark] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);

  const handleClick = () => {
    const grid = [...boardData.grid];

    if (isColorMode) {
      if (!boardData.canChangeColor(colorIndex, row, col)) return;
      grid[row][col].colorIndex = colorIndex;
      setSquareColorIndex(colorIndex);
    } else {
      if (crossMark) return;
      if (!boardData.existsQueenAtColor(squareColorIndex) || queen) {
        grid[row][col].queen = !queen;
        setQueen(!queen);
        setCrossMark(false);
      }
    }
    setBoardData({ ...boardData, grid });
    setHasClicked(true);

    setTimeout(() => {
      setHasClicked(false);
    }, 300);
  };

  const handleHoverEnter = () => {
    setIsHovered(true);
    if (
      (!isColorMode &&
        boardData.existsQueenAtColor(squareColorIndex) &&
        !queen) ||
      (!isColorMode && !validateQueen(queenMatrix, row, col))
    ) {
      setCrossMark(true);
    }
  };

  const handleHoverLeave = () => {
    setIsHovered(false);
    if (!isColorMode) {
      setCrossMark(false);
    }
  };

  return (
    <div
      className={`w-8 h-8 border flex items-center justify-center cursor-pointer
        ${isHovered ? "border-black" : "border-gray-400"}
        ${hasClicked ? "animate-rotate" : ""}`}
      style={{
        backgroundColor: colors[squareColorIndex],
        transform: hasClicked ? `rotateY(180deg)` : `rotateY(0deg)`,
        transformStyle: "preserve-3d",
        transition: "transform 0.3s",
      }}
      onClick={handleClick}
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverLeave}
    >
      {queen && <img src={blackQueen} alt="queen" className="w-8 h-8" />}
      {!queen && crossMark && <p>❌</p>}
    </div>
  );
};

export default Square;
