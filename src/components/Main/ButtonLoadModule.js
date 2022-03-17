import React from "react";

export default function ButtonLoadModule({
  label,
  setLoadedModuleName,
  module,
}) {
  return (
    <button
      className="rounded p-4 mb-5 bg-gray-200"
      onClick={() => setLoadedModuleName(module)}
    >
      {label}
    </button>
  );
}
