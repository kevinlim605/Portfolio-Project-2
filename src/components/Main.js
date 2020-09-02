import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Weather from "./Weather";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";
import MinutelyForecast from "./MinutelyForecast";
import { fetchWeatherdata } from "../redux/actionCreators";

const mapStateToProps = (state) => {
  return {
    weatherdata: state.weatherData,
  };
};

const mapDispatchToProps = {
  fetchWeatherdata: () => fetchWeatherdata(),
};

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={Home} />
          <Route
            exact
            path="/weather"
            render={() => (
              <Weather fetchWeatherdata={this.props.fetchWeatherdata} />
            )}
          />
          <Route
            path="/weather/dailyforecast"
            render={() => (
              <DailyForecast weather={this.props.weatherdata.weatherdata} />
            )}
          />
          <Route
            path="/weather/hourlyforecast"
            render={() => (
              <HourlyForecast weather={this.props.weatherdata.weatherdata} />
            )}
          />
          <Route
            path="/weather/minutelyforecast"
            render={() => (
              <MinutelyForecast weather={this.props.weatherdata.weatherdata} />
            )}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
