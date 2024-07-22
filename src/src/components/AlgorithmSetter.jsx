import { useState } from "react";

const AlgorithmSetter = ({ algorithm, setAlgorithm }) => {
  const [isOpen, setIsOpen] = useState(false); // Dropdown open state

  const handleAlgorithmChange = (index) => {
    setAlgorithm(index);
    console.log(index);
    setIsOpen(false);
  };

  const algorithms = ["Backtracking", "Min-Conflicts"];

  return (
    <div className="relative flex flex-col justify-end items-end">
      <div className="relative  flex flex-col items-end">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mb-2 p-2 bg-gray-800 hover:bg-gray-700 text-white rounded w-20 h-6 mr-1 flex items-center justify-center text-center text-sm"
        >
          Algorithm
        </button>

        {isOpen && (
          <div
            className="border border-black absolute z-10 mt-1 mr-1 w-fit bg-white rounded shadow-lg"
            style={{ right: "100%", marginRight: "10px", top: "-50%" }}
          >
            {algorithms.map((algorithm_name, index) => (
              <div
                key={index}
                className={`w-36 flex items-center p-2 cursor-pointer ${
                  algorithm == index ? "bg-[#c7f3c8] " : " bg-white"
                } hover:bg-gray-200 rounded`}
                onClick={() => handleAlgorithmChange(index)}
              >
                <span className="text-sm ml-2">{algorithms[index]}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AlgorithmSetter;
