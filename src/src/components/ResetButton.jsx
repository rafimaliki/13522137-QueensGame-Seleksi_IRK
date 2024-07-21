import React, { useState } from "react";
import BoardData from "../class/BoardData";
import Board from "./Board";

const ResetButton = ({ boardData, setBoardData }) => {
  const handleClick = () => {
    let newBoardData = new BoardData(8, 8);
    let tempBoard = new BoardData(0, 0);

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
        Reset
      </button>
    </div>
  );
};

export default ResetButton;
