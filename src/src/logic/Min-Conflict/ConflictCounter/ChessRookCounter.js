const countChessRook = (queenMatrix, row, col) => {
  const countRow = queenMatrix.length;
  const countCol = queenMatrix[0].length;
  var counter = 0;

  // Check if there is a rook in the same row
  for (let i = 0; i < countCol; i++) {
    if (queenMatrix[row][i] && i !== col) {
      counter++;
    }
  }

  // Check if there is a rook in the same column
  for (let i = 0; i < countRow; i++) {
    if (queenMatrix[i][col] && i !== row) {
      counter++;
    }
  }

  return counter;
};

export default countChessRook;
