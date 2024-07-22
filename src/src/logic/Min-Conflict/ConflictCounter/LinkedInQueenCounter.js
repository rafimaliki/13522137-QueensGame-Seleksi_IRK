const countLinkedInQueen = (queenMatrix, row, col) => {
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

  // Check if there is a queen directly adjacent
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) continue;
      const newRow = row + i;
      const newCol = col + j;
      if (
        newRow >= 0 &&
        newRow < countRow &&
        newCol >= 0 &&
        newCol < countCol
      ) {
        if (queenMatrix[newRow][newCol]) {
          count++;
        }
      }
    }
  }

  return count;
};

export default countLinkedInQueen;
