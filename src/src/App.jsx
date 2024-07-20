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
        <div className="flex flex-col w-fit items-center">
          <h1 className="text-black mt-5 text-xl font-bold">
            Queens Game Solver
          </h1>
          <div className="w-64 flex flex-col items-end mt-2">
            <ImportButton boardData={boardData} setBoardData={setBoardData} />
            <DimensionSetter
              dimension="Width"
              boardData={boardData}
              setBoardData={setBoardData}
            />
            <DimensionSetter
              dimension="Height"
              boardData={boardData}
              setBoardData={setBoardData}
            />
            <ColorSetter
              colorIndex={colorIndex}
              setColorIndex={setColorIndex}
              isColorMode={isColorMode}
              setIsColorMode={setIsColorMode}
            />
            {!isColorMode && (
              <SolveButton boardData={boardData} setBoardData={setBoardData} />
            )}
          </div>
          <Board
            boardData={boardData}
            setBoardData={setBoardData}
            colorIndex={colorIndex}
            isColorMode={isColorMode}
            queenMatrix={queenMatrix}
          />
        </div>
      </div>
    </>
  );
}

export default App;
