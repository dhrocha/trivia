import { configureStore } from "@reduxjs/toolkit";
import triviaReducer from "../functions/triviaSlice";

export default configureStore({
  reducer: { trivia: triviaReducer },
});
