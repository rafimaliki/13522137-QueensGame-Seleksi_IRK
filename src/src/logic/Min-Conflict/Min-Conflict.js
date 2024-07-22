import { makeColorMap, makeQueenMatrix, validateBoard } from "../Util";

import countLinkedInQueen from "./ConflictCounter/LinkedInQueenCounter";
import countChessQueen from "./ConflictCounter/ChessQueenCounter";
import countChessRook from "./ConflictCounter/ChessRookCounter";
import countChessBishop from "./ConflictCounter/ChessBishopCounter";
import countChessKnight from "./ConflictCounter/ChessKnightCounter";

const conflictCounter = [
  countLinkedInQueen,
  countChessQueen,
  countChessRook,
  countChessBishop,
  countChessKnight,
];

const minConflict = (chessPiece, queenMatrix, gridByColor, countColor) => {
  const maxSteps = 10000;

  const newQueenMatrix = [...queenMatrix.map((row) => [...row])];
  const squareRefs = [];

  for (let [colorIndex, squares] of gridByColor) {
    squares[0].queen = true;
    newQueenMatrix[squares[0].row][squares[0].col] = true;
    squareRefs.push(...squares);
  }

  for (let steps = 0; steps < maxSteps; steps++) {
    let conflicts = [];

    // console.log("STEPS: ", steps);

    for (let square of squareRefs) {
      if (square.queen) {
        let conflict = conflictCounter[chessPiece](
          newQueenMatrix,
          square.row,
          square.col
        );
        if (conflict > 0) {
          conflicts.push(square);
        }
      }
    }

    if (conflicts.length === 0) {
      return { queenMatrix: newQueenMatrix, bool: true };
    }

    let randomSquare = conflicts[Math.floor(Math.random() * conflicts.length)];
    let randomColorIndex = randomSquare.colorIndex;

    let minConflicts = newQueenMatrix.length;
    let bestSquare = randomSquare;

    newQueenMatrix[randomSquare.row][randomSquare.col] = false;

    for (let square of squareRefs) {
      if (square.colorIndex !== randomColorIndex || square.queen) continue;

      let conflict = conflictCounter[chessPiece](
        newQueenMatrix,
        square.row,
        square.col
      );

      if (conflict < minConflicts) {
        minConflicts = conflict;
        bestSquare = square;
      }
    }

    newQueenMatrix[bestSquare.row][bestSquare.col] = true;
    for (let square of squareRefs) {
      if (square.colorIndex === randomColorIndex) {
        square.queen =
          square.row === bestSquare.row && square.col === bestSquare.col;
      }
    }
  }

  if (validateBoard(chessPiece, newQueenMatrix)) {
    return { queenMatrix: newQueenMatrix, bool: true };
  } else;
  {
    return { queenMatrix: null, bool: false };
  }
};

export default minConflict;
