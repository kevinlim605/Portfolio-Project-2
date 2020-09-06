import React from "react";

function Home() {
  return (
    <div className="container">
      <div class="row row-content">
        <div className="col mt-5">
          <h1 className="text-center">Welcome!</h1>
          <hr />
          <p>
            Welcome to my Weather App! This website is built using React. This
            application takes user input data and uses it to display either
            daily, monthly, or minutely weather cards. I used API's to receive
            this data using my action creators and stored them as state using
            Redux. The two API's that I've used in conjunction are Google's
            Geocode API which converts addresses into geographic coordinates
            i.e., latitude and longitude, and OpenWeatherMap's API which takes
            those coordinates and returns the weather data for that location.
          </p>
          <p>
            Note: Please be aware that the weather API does returns weather data
            on a daily basis but only at a certain point in time, regardless of
            when the API was called. The data retrieved for the hourly basis
            will reflect the time at which the API was called rounded down to
            the nearest hour. As for the data retrieved for the minutely basis,
            it will reflect the time at which the API was called.
          </p>
          <h2 className="text-center">
            Enjoy! <img src="assets/images/sun.png" width="50" height="51" />
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
