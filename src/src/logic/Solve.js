import BoardData from "../class/BoardData";
import { makeColorMap, makeQueenMatrix, validateBoard } from "./Util";

import backTrackSearch from "./Backtracking/Backtracking";
import minConflict from "./Min-Conflict/Min-Conflict";

const algorithms = [backTrackSearch, minConflict];

const solveQueen = (boardData, setBoardData, chessPiece, algorithm) => {
  console.log("Solving...");
  console.log("Algorithm: ", algorithm);

  const gridByColor = makeColorMap(boardData);
  const queenMatrix = makeQueenMatrix(boardData);

  const result = algorithms[algorithm](
    chessPiece,
    queenMatrix,
    gridByColor,
    gridByColor.size
  );

  if (result.bool) {
    console.log("Solution found!");

    for (let i = 0; i < boardData.height; i++) {
      for (let j = 0; j < boardData.width; j++) {
        if (result.queenMatrix[i][j]) {
          boardData.grid[i][j].queen = true;
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

export { solveQueen, algorithms };
