import React, { useEffect, useState } from "react";
import BoardData from "../class/BoardData";

const DimensionSetter = ({ dimension, boardData, setBoardData }) => {
  const options = Array.from({ length: 10 }, (_, i) => i + 1);
  const [selectedOption, setSelectedOption] = useState(
    dimension === "Width" ? boardData.width : boardData.height
  );

  useEffect(() => {
    setSelectedOption(
      dimension === "Width" ? boardData.width : boardData.height
    );
  }, [boardData]);

  const handleChange = (event) => {
    const value = parseInt(event.target.value);
    setSelectedOption(event.target.value);

    let newBoardData;
    if (dimension === "Width") {
      newBoardData = new BoardData(value, boardData.height);
    } else {
      newBoardData = new BoardData(boardData.width, value);
    }

    let tempBoard = new BoardData(0, 0);
    setBoardData(tempBoard);

    setTimeout(() => {
      setBoardData(newBoardData);
    }, 100);
  };

  return (
    <div className="w-36 h-fit text-black flex mb-2 justify-around">
      <p className="mr-2 text-black text-sm text-shadow">{dimension}</p>
      <select
        id={dimension}
        value={selectedOption}
        onChange={handleChange}
        className="rounded-md w-20 text-sm text-center flex items-center p-0 border border-gray-300 focus:outline-none focus:border-blue-500 box-shadow"
        style={{ boxSizing: "border-box", overflow: "visible" }} // Adjust box-sizing and overflow if needed
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DimensionSetter;
