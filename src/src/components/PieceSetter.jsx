import { useState } from "react";
import blackQueen from "../assets/black_queen.png";
import blackRook from "../assets/black_rook.png";
import blackBishop from "../assets/black_bishop.png";
import blackKnight from "../assets/black_knight.png";

const PieceSetter = ({ setChessPiece }) => {
  const [isOpen, setIsOpen] = useState(false); // Dropdown open state
  const images = [blackQueen, blackQueen, blackRook, blackBishop, blackKnight];
  const names = [
    "LinkedIn Queen",
    "Chess Queen",
    "Chess Rook",
    "Chess Bishop",
    "Chess Knight",
  ];

  const handlePieceChange = (index) => {
    setChessPiece(index);
    setIsOpen(false);
  };

  return (
    <div className="relative flex flex-col justify-end items-end">
      <div className="relative  flex flex-col items-end">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mb-2 p-2 bg-gray-800 hover:bg-gray-700 text-white rounded w-20 h-6 mr-1 flex items-center justify-center text-center text-sm"
        >
          Set Piece
        </button>

        {isOpen && (
          <div
            className="border border-black absolute z-10 mt-1 mr-1 w-fit bg-white rounded shadow-lg"
            style={{ right: "100%", marginRight: "10px", top: "-300%" }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="w-36 flex items-center p-2 cursor-pointer hover:bg-gray-200 rounded"
                onClick={() => handlePieceChange(index)}
              >
                <img src={image} alt="queen" className="w-8 h-8" />
                <span className="text-sm ml-2">{names[index]}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PieceSetter;
