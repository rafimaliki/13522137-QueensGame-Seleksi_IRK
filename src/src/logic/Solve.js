import Board from "../components/Board";
import BoardData from "../class/BoardData";

const solveQueen = (boardData, setBoardData) => {
  console.log("Solving...");

  const gridByColor = makeColorMap(boardData);
  const queenMatrix = makeQueenMatrix(boardData);

  const result = backTrackSearch(queenMatrix, gridByColor, gridByColor.size);

  if (result.bool) {
    console.log("Solution found!");
    // console.log(result.queenMatrix);

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
};

const backTrackSearch = (queenMatrix, gridByColor, depth) => {
  if (depth === 0) {
    if (validateBoard(queenMatrix)) {
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

      if (validateQueen(queenMatrix, row, col)) {
        const newQueenMatrix = [...queenMatrix.map((row) => [...row])];
        newQueenMatrix[row][col] = true;
        newGridByColor.delete(colorSet[0].colorIndex);
        const result = backTrackSearch(
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

const makeColorMap = (boardData) => {
  const gridByColor = new Map();
  for (let i = 0; i < boardData.height; i++) {
    for (let j = 0; j < boardData.width; j++) {
      const colorIndex = boardData.grid[i][j].colorIndex;
      if (!gridByColor.has(colorIndex)) {
        gridByColor.set(colorIndex, []);
      }
      gridByColor.get(colorIndex).push(boardData.grid[i][j]);
    }
  }
  for (let [colorIndex, squares] of gridByColor) {
    for (let square of squares) {
      if (square.queen) {
        gridByColor.delete(colorIndex);
        break;
      }
    }
  }
  return gridByColor;
};

const makeQueenMatrix = (boardData) => {
  const queenMatrix = [];
  for (let i = 0; i < boardData.height; i++) {
    queenMatrix.push(new Array(boardData.width).fill(false));
  }

  for (let i = 0; i < boardData.height; i++) {
    for (let j = 0; j < boardData.width; j++) {
      if (boardData.grid[i][j].queen) {
        queenMatrix[i][j] = true;
      }
    }
  }
  return queenMatrix;
};

const validateQueen = (queenMatrix, row, col) => {
  const countRow = queenMatrix.length;
  const countCol = queenMatrix[0].length;

  // Check if there is a queen in the same row
  for (let i = 0; i < countCol; i++) {
    if (queenMatrix[row][i] && i !== col) {
      return false;
    }
  }

  // Check if there is a queen in the same column
  for (let i = 0; i < countRow; i++) {
    if (queenMatrix[i][col] && i !== row) {
      return false;
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
          return false;
        }
      }
    }
  }

  // // Check if there is a queen in the upper diagonal
  // for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
  //     if (queenMatrix[i][j]) {
  //       return false;
  //     }
  //   }

  //   // Check if there is a queen in the lower diagonal
  //   for (let i = row + 1, j = col - 1; i < countRow && j >= 0; i++, j--) {
  //     if (queenMatrix[i][j]) {
  //       return false;
  //     }
  //   }

  //   // Check if there is a queen in the upper-right diagonal
  //   for (let i = row - 1, j = col + 1; i >= 0 && j < countCol; i--, j++) {
  //     if (queenMatrix[i][j]) {
  //       return false;
  //     }
  //   }

  //   // Check if there is a queen in the lower-right diagonal
  //   for (let i = row + 1, j = col + 1; i < countRow && j < countCol; i++, j++) {
  //     if (queenMatrix[i][j]) {
  //       return false;
  //     }
  //   }

  return true;
};

const validateBoard = (queenMatrix) => {
  for (let i = 0; i < queenMatrix.length; i++) {
    for (let j = 0; j < queenMatrix.length; j++) {
      if (queenMatrix[i][j] && !validateQueen(queenMatrix, i, j)) {
        return false;
      }
    }
  }
  return true;
};

export { solveQueen, makeQueenMatrix, validateQueen };
