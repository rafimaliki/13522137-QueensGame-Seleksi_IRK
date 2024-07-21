import BoardData from "../class/BoardData";
import { makeColorMap, makeQueenMatrix, validateBoard } from "./Util";
import validateLinkedInQueen from "./LinkedInQueen";
import validateChessQueen from "./ChessQueen";
import validateChessRook from "./ChessRook";
import validateChessBishop from "./ChessBishop";
import validateChessKnight from "./ChessKnight";

const validator = [
  validateLinkedInQueen,
  validateChessQueen,
  validateChessRook,
  validateChessBishop,
  validateChessKnight,
];

const solveQueen = (boardData, setBoardData, chessPiece) => {
  console.log("Solving...");

  const gridByColor = makeColorMap(boardData);
  const queenMatrix = makeQueenMatrix(boardData);

  const result = backTrackSearch(
    chessPiece,
    queenMatrix,
    gridByColor,
    gridByColor.size
  );

  if (result.bool) {
    console.log("Solution found!");

    for (let i = 0; i < boardData.height; i++) {
      for (let j = 0; j < boardData.width; j++) {
        if (result.queenMatrix[i][j] && !boardData.grid[i][j].queen) {
          boardData.grid[i][j].queen = true;
        } else if (!result.queenMatrix[i][j] && boardData.grid[i][j].queen) {
          boardData.grid[i][j].queen = false;
        }
      }
    }

    const newBoardData = { ...boardData };

    let tempBoard = new BoardData(0, 0);
    setBoardData(tempBoard);

    setTimeout(() => {
      setBoardData(newBoardData);
    }, 100);
  } else {
    console.log("No solution found");
  }

  return result.bool;
};

const backTrackSearch = (chessPiece, queenMatrix, gridByColor, depth) => {
  if (depth === 0) {
    if (validateBoard(chessPiece, queenMatrix)) {
      return { queenMatrix: queenMatrix, bool: true };
    } else {
      return { queenMatrix: null, bool: false };
    }
  } else {
    const colorSet = [...gridByColor.values().next().value];
    const newGridByColor = new Map(gridByColor);

    for (let square of colorSet) {
      const row = square.row;
      const col = square.col;

      if (validator[chessPiece](queenMatrix, row, col)) {
        const newQueenMatrix = [...queenMatrix.map((row) => [...row])];
        newQueenMatrix[row][col] = true;
        newGridByColor.delete(colorSet[0].colorIndex);
        const result = backTrackSearch(
          chessPiece,
          newQueenMatrix,
          newGridByColor,
          depth - 1
        );
        if (result.bool) {
          return { queenMatrix: result.queenMatrix, bool: true };
        }
      }
    }
  }

  return { queenMatrix: null, bool: false };
};

export { solveQueen, validator };
