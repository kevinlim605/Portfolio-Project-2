import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Weatherdata } from "./weatherData";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      weatherData: Weatherdata,
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};
