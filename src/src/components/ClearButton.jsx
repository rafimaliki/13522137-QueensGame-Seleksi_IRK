import React, { useState } from "react";
import BoardData from "../class/BoardData";

const ClearButton = ({ boardData, setBoardData }) => {
  const handleClick = () => {
    let newBoardData = { ...boardData };

    let tempBoard = new BoardData(0, 0);

    for (let i = 0; i < newBoardData.grid.length; i++) {
      for (let j = 0; j < newBoardData.grid[i].length; j++) {
        newBoardData.grid[i][j].queen = false;
      }
    }

    setBoardData(tempBoard);

    setTimeout(() => {
      setBoardData(newBoardData);
    }, 100);
  };

  return (
    <div className="relative flex flex-col justify-end items-end">
      <button
        className="mb-2 p-2 bg-red-600 hover:bg-red-700 text-white rounded w-20 h-6 mr-1 flex items-center justify-center text-center text-sm"
        onClick={handleClick}
      >
        Clear
      </button>
    </div>
  );
};

export default ClearButton;
