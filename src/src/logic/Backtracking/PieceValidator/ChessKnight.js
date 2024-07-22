const validateChessKnight = (queenMatrix, row, col) => {
  const countRow = queenMatrix.length;
  const countCol = queenMatrix[0].length;

  // Check if there is a knight in the upper left
  if (row - 2 >= 0 && col - 1 >= 0) {
    if (queenMatrix[row - 2][col - 1]) {
      return false;
    }
  }

  // Check if there is a knight in the upper right
  if (row - 2 >= 0 && col + 1 < countCol) {
    if (queenMatrix[row - 2][col + 1]) {
      return false;
    }
  }

  // Check if there is a knight in the right upper
  if (row - 1 >= 0 && col + 2 < countCol) {
    if (queenMatrix[row - 1][col + 2]) {
      return false;
    }
  }

  // Check if there is a knight in the right lower
  if (row + 1 < countRow && col + 2 < countCol) {
    if (queenMatrix[row + 1][col + 2]) {
      return false;
    }
  }

  // Check if there is a knight in the lower right
  if (row + 2 < countRow && col + 1 < countCol) {
    if (queenMatrix[row + 2][col + 1]) {
      return false;
    }
  }

  // Check if there is a knight in the lower left
  if (row + 2 < countRow && col - 1 >= 0) {
    if (queenMatrix[row + 2][col - 1]) {
      return false;
    }
  }

  // Check if there is a knight in the left lower

  if (row + 1 < countRow && col - 2 >= 0) {
    if (queenMatrix[row + 1][col - 2]) {
      return false;
    }
  }

  // Check if there is a knight in the left uppe
  if (row - 1 >= 0 && col - 2 >= 0) {
    if (queenMatrix[row - 1][col - 2]) {
      return false;
    }
  }

  return true;
};

export default validateChessKnight;
