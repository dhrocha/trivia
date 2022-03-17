import React from "react";
import { useSelector } from "react-redux";
import ButtonLoadModule from "./Main/ButtonLoadModule";
import Title from "./Main/Title";
import Item from "./Results/Item";

const MuiltilineTitle = ({ score }) => {
  return (
    <>
      You scored <br /> {score}
    </>
  );
};

const calculateScore = (trivia) => {
  let correct = 0;

  trivia.questions.forEach((item) => {
    if (item.user_response === item.correct_answer) correct++;
  });

  return `${correct}/${trivia.questions.length}`;
};

export default function Results({ setLoadedModuleName }) {
  const trivia = useSelector((state) => state.trivia);

  return (
    <>
      <Title text={<MuiltilineTitle score={calculateScore(trivia)} />} />
      <div className="flex flex-col">
        {trivia.questions.map((item) => (
          <Item {...{ item }} key={Math.random()} />
        ))}
      </div>
      <ButtonLoadModule
        {...{ setLoadedModuleName }}
        label="PLAY AGAIN?"
        module="main"
      />
    </>
  );
}
