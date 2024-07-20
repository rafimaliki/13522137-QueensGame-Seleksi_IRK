import React, { useState } from "react";
import AlertDialog from "./AlertDialog";
import { solveQueen } from "../logic/Solve";

const SolveButton = ({ boardData, setBoardData }) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    solveQueen(boardData, setBoardData);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 1500);
  };

  return (
    <div className="relative flex flex-col justify-end items-end">
      <button
        className="mb-2 p-2 bg-gray-800 hover:bg-gray-700 text-white rounded w-20 h-6 mr-1 flex items-center justify-center text-center text-sm"
        onClick={handleClick}
      >
        Solve
      </button>
      {showAlert && (
        <AlertDialog message="Solving..." onClose={() => setShowAlert(false)} />
      )}
    </div>
  );
};

export default SolveButton;
