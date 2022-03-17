import { decode } from "html-entities";
import { FaTimesCircle, FaCheckCircle } from "react-icons/fa";

import React from "react";

export default function Item({ item }) {
  const correct = item.correct_answer === item.user_response;
  return (
    <div
      className={`flex mb-2 ${
        correct ? "text-green-600" : "text-red-600"
      } items-center gap-3`}
    >
      <div>{correct ? <FaCheckCircle /> : <FaTimesCircle />}</div>
      <div>{decode(item.question)}</div>
      <div>
        <hr />
      </div>
    </div>
  );
}
