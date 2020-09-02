import * as ActionTypes from "./actionTypes";

export const Weatherdata = (
  state = { isLoading: true, errMess: null, weatherdata: {} },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_WEATHERDATA:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        weatherdata: action.payload,
      };
    case ActionTypes.WEATHERDATA_LOADING:
      return {
        ...state,
        isLoading: true,
        errMess: null,
        weatherdata: {},
      };
    case ActionTypes.WEATHERDATA_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
      };
    default:
      return state;
  }
};
