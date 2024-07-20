import React, { useState } from "react";
import AlertDialog from "./AlertDialog";
import BoardData from "../class/BoardData";
import { colors } from "../class/SquareData";

const ImportButton = ({ boardData, setBoardData }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [countColor, setCountColor] = useState(0);
  const [matrix, setMatrix] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const fileContent = e.target.result;

        const lines = fileContent.split("\n");
        const row = parseInt(lines[0].split(" ")[0]);
        const col = parseInt(lines[0].split(" ")[1]);

        setCountColor(parseInt(lines[1]));

        const matrix = [];
        for (let i = 2; i < lines.length; i++) {
          matrix.push(lines[i].split(" "));
        }
        setMatrix(matrix);

        var newBoardData = new BoardData(col, row);
        const colors_read = [];
        for (let i = 0; i < row; i++) {
          for (let j = 0; j < col; j++) {
            const color = matrix[i][j][0];
            if (!colors_read.includes(color)) {
              colors_read.push(color);
            }
            const color_idx = colors_read.findIndex((c) => c === color);
            newBoardData.grid[i][j].colorIndex = color_idx;
          }
        }

        let tempBoard = new BoardData(0, 0);
        setBoardData(tempBoard);

        setTimeout(() => {
          setBoardData(newBoardData);
        }, 100);

        URL.revokeObjectURL(event.target.value);
        event.target.value = null;
      };
      reader.readAsText(file);

      // clear file from ram
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const fileInputRef = React.createRef();

  const printMatrix = () => {
    let matrixString = "";
    matrix.forEach((row) => {
      matrixString += row.join(" ") + "\n";
    });
    return matrixString;
  };

  return (
    <div className="relative flex flex-col justify-end items-end">
      <input
        type="file"
        accept=".txt"
        onChange={handleFileChange}
        ref={fileInputRef}
        style={{ display: "none" }}
      />
      <button
        className="mb-2 p-2 bg-gray-800 hover:bg-gray-700 text-white rounded w-20 h-6 mr-1 flex items-center justify-center text-center text-sm"
        onClick={handleClick}
      >
        Import
      </button>

      {showAlert && (
        <AlertDialog
          message="File imported successfully!"
          onClose={() => setShowAlert(false)}
        />
      )}
    </div>
  );
};

export default ImportButton;
