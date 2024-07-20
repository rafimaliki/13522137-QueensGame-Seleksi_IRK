import { useState } from "react";
import { colors } from "../class/SquareData";

const ColorSetter = ({
  colorIndex,
  setColorIndex,
  isColorMode,
  setIsColorMode,
}) => {
  const [isOpen, setIsOpen] = useState(false); // Dropdown open state
  const [selectedColor, setSelectedColor] = useState(colors[colorIndex]); // Currently selected color

  const handleColorChange = (index) => {
    setColorIndex(index);
    setSelectedColor(colors[index]);
    setIsOpen(false);
  };

  const toggleMode = () => {
    setIsColorMode(!isColorMode);
    setIsOpen(false);
  };

  return (
    <div className="relative flex flex-col justify-end items-end">
      <button
        onClick={toggleMode}
        className="mb-2 p-2 bg-gray-800 hover:bg-gray-700 text-white rounded w-20 h-6 mr-1 flex items-center justify-center text-center text-sm"
      >
        {isColorMode ? "Finish" : "Set Color"}
      </button>

      {isColorMode && (
        <div className="relative mr-1 flex flex-col items-end">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-20 h-6 border border-black bg-white rounded shadow-lg flex items-center justify-center px-2 mb-2"
            style={{ backgroundColor: selectedColor }}
          >
            Pick
          </button>

          {isOpen && (
            <div
              className="border border-black absolute z-10 mt-1 mr-1 w-fit bg-white rounded shadow-lg"
              style={{ right: "100%", marginRight: "10px" }}
            >
              {colors.map((color, index) => (
                <div
                  key={index}
                  className="flex items-center p-2 cursor-pointer hover:bg-gray-200 rounded"
                  onClick={() => handleColorChange(index)}
                >
                  <div
                    className="w-6 h-6 rounded"
                    style={{ backgroundColor: color }}
                  ></div>
                  <span className="text-sm ml-2">{color}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ColorSetter;
