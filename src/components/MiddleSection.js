import React from "react";

export default function MiddleSection({ children }) {
  return (
    <div className="flex flex-col justify-between h-full w-full px-20">
      {children}
    </div>
  );
}
