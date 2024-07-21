import validateLinkedInQueen from "./LinkedInQueen";
import { validator } from "./Solve";

const makeColorMap = (boardData) => {
  const gridByColor = new Map();
  for (let i = 0; i < boardData.height; i++) {
    for (let j = 0; j < boardData.width; j++) {
      const colorIndex = boardData.grid[i][j].colorIndex;
      if (!gridByColor.has(colorIndex)) {
        gridByColor.set(colorIndex, []);
      }
      gridByColor.get(colorIndex).push(boardData.grid[i][j]);
    }
  }
  for (let [colorIndex, squares] of gridByColor) {
    for (let square of squares) {
      if (square.queen) {
        gridByColor.delete(colorIndex);
        break;
      }
    }
  }
  return gridByColor;
};

const makeQueenMatrix = (boardData) => {
  const queenMatrix = [];
  for (let i = 0; i < boardData.height; i++) {
    queenMatrix.push(new Array(boardData.width).fill(false));
  }

  for (let i = 0; i < boardData.height; i++) {
    for (let j = 0; j < boardData.width; j++) {
      if (boardData.grid[i][j].queen) {
        queenMatrix[i][j] = true;
      }
    }
  }
  return queenMatrix;
};

const validateBoard = (chessPiece, queenMatrix) => {
  for (let i = 0; i < queenMatrix.length; i++) {
    for (let j = 0; j < queenMatrix.length; j++) {
      if (queenMatrix[i][j] && !validator[chessPiece](queenMatrix, i, j)) {
        return false;
      }
    }
  }
  return true;
};

export { makeColorMap, makeQueenMatrix, validateBoard };
