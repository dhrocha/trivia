import { createSlice } from "@reduxjs/toolkit";
import { defaultTrivia } from "../const/defaultTrivia";

export const triviaSlice = createSlice({
  name: "trivia",
  initialState: { ...defaultTrivia },
  reducers: {
    loadTriviaSuccess: (state, action) => {
      return {
        questions: action.payload,
        error: false,
      };
    },
    loadTriviaError: (state, action) => {
      return {
        questions: state.questions,
        error: action.payload,
      };
    },
    addResponse: (state, action) => {
      const { id, response } = action.payload;
      return {
        ...state,
        questions: state.questions.map((item, i) =>
          i === id ? { ...item, user_response: response } : item
        ),
      };
    },
  },
});

export const { loadTriviaSuccess, loadTriviaError, addResponse } =
  triviaSlice.actions;
export default triviaSlice.reducer;
