import React from "react";
import Title from "./Main/Title";
import MiddleSection from "./MiddleSection";
import Text from "./Main/Text";

export default function MainScreen({ setLoadedModule }) {
  return (
    <MiddleSection>
      <Title text="Welcome to the Trivia Challenge!" />
      <Text
        text={`You will be presented with ${process.env.REACT_APP_TOTAL_QUESTIONS} True or False questions. Can you score 100%?`}
      />
      <Text text="" />
    </MiddleSection>
  );
}
