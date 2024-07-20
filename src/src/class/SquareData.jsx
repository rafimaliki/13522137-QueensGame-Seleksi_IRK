const colors = [
  "#ebebeb", // Light Gray
  "#f3e5f5", // Lavender
  "#f8bbd0", // Light Pink
  "#e1bee7", // Light Purple
  "#c5cae9", // Light Blue
  "#bbdefb", // Light Sky Blue
  "#b9fbc0", // Pale Green
  "#c8e6c9", // Light Green
  "#d0f4de", // Mint Green
  "#e0f2f1", // Pale Cyan
];

class SquareData {
  constructor(row, col) {
    this.queen = false;
    this.colorIndex = 0;
    this.row = row;
    this.col = col;
  }
}

export { SquareData, colors };
