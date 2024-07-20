import { useEffect, useState } from "react";
import "./App.css";

import BoardData from "./class/BoardData";
import Board from "./components/Board";
import DimensionSetter from "./components/DimensionSetter";
import ColorSetter from "./components/ColorSetter";
import SolveButton from "./components/SolveButton";
import ImportButton from "./components/ImportButton";
import { makeQueenMatrix } from "./logic/Solve";

function App() {
  const [boardData, setBoardData] = useState(new BoardData(8, 8));
  const [colorIndex, setColorIndex] = useState(0);
  const [isColorMode, setIsColorMode] = useState(false);
  const [queenMatrix, setQueenMatrix] = useState(makeQueenMatrix(boardData));

  useEffect(() => {
    setQueenMatrix(makeQueenMatrix(boardData));
  }, [boardData]);

  return (
    <>
      <div className="w-full min-h-screen bg-white flex flex-col items-center">
        <div className="flex flex-col w-fit items-center z-10">
          <h1 className="text-black mt-5 text-xl font-bold default-cursor">
            Queens Game Solver
          </h1>
          <div className="w-64 flex items-center justify-end"></div>
          <div className="flex">
            <div className="ml-4 w-24 h-0 pl-1"></div>
            <Board
              boardData={boardData}
              setBoardData={setBoardData}
              colorIndex={colorIndex}
              isColorMode={isColorMode}
              queenMatrix={queenMatrix}
            />
            <div className="ml-4 w-24 h-fit pl-1 flex flex-col items-center mt-2 border pt-2 rounded">
              <ImportButton boardData={boardData} setBoardData={setBoardData} />
              <p className="mr-1 text-sm default-cursor">Board Size:</p>
              <div className="flex mr-1 w-20 justify-around items-center">
                <DimensionSetter
                  dimension="Width"
                  boardData={boardData}
                  setBoardData={setBoardData}
                />
                <p className="mb-2 default-cursor">x</p>
                <DimensionSetter
                  dimension="Height"
                  boardData={boardData}
                  setBoardData={setBoardData}
                />
              </div>
              <ColorSetter
                colorIndex={colorIndex}
                setColorIndex={setColorIndex}
                isColorMode={isColorMode}
                setIsColorMode={setIsColorMode}
              />
              {!isColorMode && (
                <SolveButton
                  boardData={boardData}
                  setBoardData={setBoardData}
                />
              )}
            </div>
          </div>
        </div>
        <p className="default-cursor text-sm font-light absolute bottom-0 right-0 w-fit pr-1">
          13522137
        </p>
      </div>
    </>
  );
}

export default App;
