const validateChessRook = (queenMatrix, row, col) => {
  const countRow = queenMatrix.length;
  const countCol = queenMatrix[0].length;

  // Check if there is a rook in the same row
  for (let i = 0; i < countCol; i++) {
    if (queenMatrix[row][i] && i !== col) {
      return false;
    }
  }

  // Check if there is a rook in the same column
  for (let i = 0; i < countRow; i++) {
    if (queenMatrix[i][col] && i !== row) {
      return false;
    }
  }

  return true;
};

export default validateChessRook;
