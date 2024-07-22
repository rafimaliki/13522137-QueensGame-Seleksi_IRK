const countChessQueen = (queenMatrix, row, col) => {
  const countRow = queenMatrix.length;
  const countCol = queenMatrix[0].length;

  var count = 0;

  // Check if there is a queen in the same row
  for (let i = 0; i < countCol; i++) {
    if (queenMatrix[row][i] && i !== col) {
      count++;
    }
  }

  // Check if there is a queen in the same column
  for (let i = 0; i < countRow; i++) {
    if (queenMatrix[i][col] && i !== row) {
      count++;
    }
  }

  // Check if there is a queen in the upper diagonal
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (queenMatrix[i][j]) {
      count++;
    }
  }

  // Check if there is a queen in the lower diagonal
  for (let i = row + 1, j = col - 1; i < countRow && j >= 0; i++, j--) {
    if (queenMatrix[i][j]) {
      count++;
    }
  }

  // Check if there is a queen in the upper-right diagonal
  for (let i = row - 1, j = col + 1; i >= 0 && j < countCol; i--, j++) {
    if (queenMatrix[i][j]) {
      count++;
    }
  }

  // Check if there is a queen in the lower-right diagonal
  for (let i = row + 1, j = col + 1; i < countRow && j < countCol; i++, j++) {
    if (queenMatrix[i][j]) {
      count++;
    }
  }

  return count;
};

export default countChessQueen;
