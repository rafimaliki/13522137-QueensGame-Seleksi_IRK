const colors = [
  "#ebebeb", // Light Gray
  "#f3e5f5", // Lavender
  "#f8bbd0", // Light Pink
  "#e1bee7", // Light Purple
  "#d1c4e9", // Light Lilac
  "#c5cae9", // Light Blue
  "#bbdefb", // Light Sky Blue
  "#b9fbc0", // Pale Green
  "#c8e6c9", // Light Green
  "#d0f4de", // Mint Green
  "#e0f2f1", // Pale Cyan
  "#fff9c4", // Light Yellow
  "#ffecb3", // Light Cream
  "#ffe0b2", // Peach
  "#ffccbc", // Pastel Orange
  "#f4e1d2", // Pastel Salmon
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
