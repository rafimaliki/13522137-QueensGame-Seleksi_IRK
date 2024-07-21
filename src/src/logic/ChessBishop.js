const validateChessBishop = (queenMatrix, row, col) => {
  const countRow = queenMatrix.length;
  const countCol = queenMatrix[0].length;

  // Check if there is a bishop in the upper diagonal
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (queenMatrix[i][j]) {
      return false;
    }
  }

  // Check if there is a bishop in the lower diagonal
  for (let i = row + 1, j = col - 1; i < countRow && j >= 0; i++, j--) {
    if (queenMatrix[i][j]) {
      return false;
    }
  }

  // Check if there is a bishop in the upper-right diagonal
  for (let i = row - 1, j = col + 1; i >= 0 && j < countCol; i--, j++) {
    if (queenMatrix[i][j]) {
      return false;
    }
  }

  // Check if there is a bishop in the lower-right diagonal
  for (let i = row + 1, j = col + 1; i < countRow && j < countCol; i++, j++) {
    if (queenMatrix[i][j]) {
      return false;
    }
  }

  return true;
};

export default validateChessBishop;
