import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Weather from "./Weather";
import DailyForecast from "./DailyForecast";
import axios from "axios";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: {},
    };
    //this.storeWeatherData = this.storeWeatherData.bind(this);
    //this.getWeatherData = this.getWeatherData.bind(this);
    //this.convertLocationIntoString = this.convertLocationIntoString.bind(this);
  }

  storeWeatherData = (data) => {
    this.setState({
      weatherData: data,
    });
  };

  getWeatherData = async (address) => {
    try {
      const result = await axios(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyD1Gxt9irjoAYzRDvCbs_DYgKJtATYAmnA`
      );
      const lat = result.data.results[0].geometry.location.lat;
      const lon = result.data.results[0].geometry.location.lng;
      const data = await axios(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=27cb6d460482e895ae4d104c55c13c09`
      );
      return data.data;
    } catch (error) {
      console.log(error);
    }
  };

  convertLocationIntoString = () => {
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    if (address !== "" && city !== "" && state !== "Select...") {
      const fullAddress = `${address} ${city} ${state}`.split(" ").join("+");
      this.getWeatherData(fullAddress).then((data) => {
        this.storeWeatherData(data);
      });
    }
  };

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={Home} />
          <Route
            path="/weather"
            render={() => (
              <Weather
                convertLocationIntoString={this.convertLocationIntoString}
              />
            )}
          />
          <Route
            path="/dailyforecast"
            render={() => <DailyForecast weather={this.state.weatherData} />}
          />
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default Main;
