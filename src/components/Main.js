import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./Header";
import Home from "./Home";
import Weather from "./Weather";
import DailyForecast from "./DailyForecast";
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
            path="/weather"
            render={() => (
              <Weather fetchWeatherdata={this.props.fetchWeatherdata} />
            )}
          />
          <Route
            path="/dailyforecast"
            render={() => (
              <DailyForecast weather={this.props.weatherdata.weatherdata} />
            )}
          />
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
