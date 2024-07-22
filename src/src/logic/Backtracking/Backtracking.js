import BoardData from "../../class/BoardData";
import { makeColorMap, makeQueenMatrix, validateBoard } from "../Util";
import validateLinkedInQueen from "./PieceValidator/LinkedInQueen";
import validateChessQueen from "./PieceValidator/ChessQueen";
import validateChessRook from "./PieceValidator/ChessRook";
import validateChessBishop from "./PieceValidator/ChessBishop";
import validateChessKnight from "./PieceValidator/ChessKnight";

const validator = [
  validateLinkedInQueen,
  validateChessQueen,
  validateChessRook,
  validateChessBishop,
  validateChessKnight,
];

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

export default backTrackSearch;
