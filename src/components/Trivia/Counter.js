import React from "react";

export default function Counter({ current, total }) {
  return (
    <div className="flex justify-center">
      {current + 1} of {total}
    </div>
  );
}
