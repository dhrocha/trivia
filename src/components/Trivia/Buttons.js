import React from "react";

export default function Buttons({ handleResponse }) {
  return (
    <div className="flex justify-between -mt-32">
      <button
        className="text-blue-500 rounded border-blue-500 p-4 bg-blue-100"
        onClick={() => handleResponse("True")}
      >
        TRUE
      </button>
      <button
        className="text-red-500 rounded border-red-500 p-4 bg-red-100"
        onClick={() => handleResponse("False")}
      >
        FALSE
      </button>
    </div>
  );
}
