import * as ActionTypes from "./actionTypes";

export const weatherdataLoading = () => ({
  type: ActionTypes.WEATHERDATA_LOADING,
});

export const weatherdataFailed = (errMess) => ({
  type: ActionTypes.WEATHERDATA_FAILED,
  payload: errMess,
});

export const addWeatherdata = (weatherdata) => ({
  type: ActionTypes.ADD_WEATHERDATA,
  payload: weatherdata,
});

export const fetchWeatherdata = () => async (dispatch) => {
  dispatch(weatherdataLoading());

  const address = document.getElementById("address").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  var fullAddress;
  if (address !== "" && city !== "" && state !== "Select...") {
    fullAddress = `${address} ${city} ${state}`.split(" ").join("+");
  }

  return fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${fullAddress}&key=AIzaSyD1Gxt9irjoAYzRDvCbs_DYgKJtATYAmnA`
  )
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status} : ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((coordinates) => {
      const lat = coordinates.results[0].geometry.location.lat;
      const lng = coordinates.results[0].geometry.location.lng;
      return fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=imperial&appid=27cb6d460482e895ae4d104c55c13c09`
      );
    })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error: ${response.status} : ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw error;
      }
    )
    .then((response) => response.json())
    .then((weatherData) => dispatch(addWeatherdata(weatherData)))
    .catch((error) => dispatch(weatherdataFailed(error.message)));
};
