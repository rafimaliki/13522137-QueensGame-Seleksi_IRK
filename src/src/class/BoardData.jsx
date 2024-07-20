import { SquareData } from "./SquareData";

class BoardData {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.grid = this.createGrid(width, height);
  }

  // static copy(boardData) {
  //   const newBoardData = new BoardData(boardData.width, boardData.height);
  //   newBoardData.grid = boardData.grid.map((row) => [...row]); // Deep copy of the grid
  //   return newBoardData;
  // }

  createGrid = (width, height) => {
    let grid = [];
    for (let y = 0; y < height; y++) {
      let row = [];
      for (let x = 0; x < width; x++) {
        row.push(new SquareData(y, x));
      }
      grid.push(row);
    }
    return grid;
  };

  clearBoard = () => {
    this.grid = this.createGrid(this.width, this.height);
  };

  existsQueenAtColor = (colorIndex) => {
    for (let row of this.grid) {
      for (let square of row) {
        if (square.colorIndex === colorIndex && square.queen) {
          return true;
        }
      }
    }
    return false;
  };

  existsColor = (colorIndex) => {
    for (let row of this.grid) {
      for (let square of row) {
        if (square.colorIndex === colorIndex) {
          return true;
        }
      }
    }
    return false;
  };

  canChangeColor = (colorIndex, row, col) => {
    if (!this.existsColor(colorIndex)) {
      return true;
    }

    // check square above
    if (row > 0 && this.grid[row - 1][col].colorIndex === colorIndex) {
      return true;
    }

    // check square below
    if (
      row < this.height - 1 &&
      this.grid[row + 1][col].colorIndex === colorIndex
    ) {
      return true;
    }

    // check square left
    if (col > 0 && this.grid[row][col - 1].colorIndex === colorIndex) {
      return true;
    }

    // check square right
    if (
      col < this.width - 1 &&
      this.grid[row][col + 1].colorIndex === colorIndex
    ) {
      return true;
    }

    return false;
  };
}

export default BoardData;
