import axios from "axios";
import { decode } from "html-entities";
import React, { useCallback, useEffect, useState } from "react";
import ButtonLoadModule from "./Main/ButtonLoadModule";
import Title from "./Main/Title";
import Buttons from "./Trivia/Buttons";
import Counter from "./Trivia/Counter";
import Question from "./Trivia/Question";
import MiddleSection from "./MiddleSection";
import { useSelector, useDispatch } from "react-redux";
import {
  addResponse,
  loadTriviaError,
  loadTriviaSuccess,
} from "../functions/triviaSlice";
import ReactLoading from "react-loading";

export default function Trivia({ setLoadedModuleName }) {
  //const [trivia, setTrivia] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [loading, setLoading] = useState(false);

  const trivia = useSelector((state) => state.trivia);
  const dispatch = useDispatch();

  const fetchTrivia = useCallback(async () => {
    setLoading(true);
    try {
      const req = await axios.get(
        `https://opentdb.com/api.php?amount=${process.env.REACT_APP_TOTAL_QUESTIONS}&difficulty=${process.env.REACT_APP_DIFICULTY}&type=boolean`
      );
      const result = req.data.results.map((item) => {
        return {
          user_response: null,
          ...item,
        };
      });

      if (req.data.response_code === 0) {
        dispatch(loadTriviaSuccess(result));
      } else {
        dispatch(loadTriviaError(true));
      }
    } catch (error) {
      dispatch(loadTriviaError(true));
    }
    setLoading(false);
  }, [dispatch]);

  useEffect(() => {
    fetchTrivia();
  }, [fetchTrivia]);

  useEffect(() => {
    console.log(trivia);
  }, [trivia]);

  const handleResponse = (response) => {
    if (currentQuestion + 1 === trivia.questions.length) {
      setIsFinished(true);
      return false;
    }

    dispatch(addResponse({ id: currentQuestion, response }));
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <MiddleSection>
      {loading && (
        <div className="flex justify-center">
          <ReactLoading type="spin" color="grey" />
        </div>
      )}
      {!loading && (
        <>
          {trivia.error && <div>Error loading questions. Try again later.</div>}
          {!isFinished && !trivia.error && (
            <>
              <Title text={`${trivia.questions[currentQuestion]?.category}`} />
              <Question
                question={decode(trivia.questions[currentQuestion]?.question)}
              />
              <Buttons {...{ handleResponse }} />
            </>
          )}
          {isFinished && !trivia.error && (
            <ButtonLoadModule
              {...{ setLoadedModuleName }}
              label="SHOW MY RESULTS"
              module="results"
            />
          )}
          {!isFinished && !trivia.error && (
            <Counter
              current={currentQuestion}
              total={trivia.questions.length}
            />
          )}
        </>
      )}
    </MiddleSection>
  );
}
