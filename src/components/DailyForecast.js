import React from "react";
import { Link } from "react-router-dom";
import { Button, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Card, CardImg, CardText, CardBody, CardHeader } from "reactstrap";
import { Loading } from "./Loading";

function RenderDailyWeatherCard(props) {
  const src = `../assets/images/${props.weatherData.weather[0].icon}.jpg`;
  const url = `http://openweathermap.org/img/wn/${props.weatherData.weather[0].icon}.png`;
  const date = new Date(props.weatherData.dt * 1000);
  const dateString = `${date.toDateString()} ${date.toTimeString()}`;
  if (props.loading) {
    return <Loading />;
  } else if (props.errMess) {
    return <p>{props.errMess}</p>;
  } else {
    return (
      <Card>
        <CardImg
          src={src}
          alt={props.weatherData.weather[0].description}
          height="200"
        />
        <CardHeader>
          <h2>
            <img src={url} alt="weatherIcon"></img>
            {props.weatherData.weather[0].main}
          </h2>
        </CardHeader>
        <CardBody>
          <CardText>
            {dateString} <br />
            Description: {props.weatherData.weather[0].description} <br />
            <br />
            <div class="row">
              <div className="col-6">
                Temp: {props.weatherData.temp.day} &#8457;
              </div>
              <div className="col-6">
                Feels Like: {props.weatherData.feels_like.day} &#8457;
              </div>
            </div>
            <div class="row">
              <div className="col-6">
                Max: {props.weatherData.temp.max} &#8457;
              </div>
              <div className="col-6">
                Min: {props.weatherData.temp.min} &#8457;
              </div>
            </div>
            <div class="row">
              <div className="col-6">
                Chance of Rain: {props.weatherData.pop}%
              </div>
              <div className="col-6">
                Humidity: {props.weatherData.humidity}%
              </div>
            </div>
            <div class="row">
              <div className="col-6">
                Wind Speed: {props.weatherData.wind_speed} mph
              </div>
              <div className="col-6">
                Pressure: {props.weatherData.pressure} hPa;
              </div>
            </div>
          </CardText>
        </CardBody>
      </Card>
    );
  }
}

function DailyForecast(props) {
  if (typeof props.weather === "undefined") {
    return (
      <div className="container">
        <div className="row row-content">
          <div className="col text-center mt-5">
            <h1> Please return and submit a location! </h1>
            <Button type="button" color="secondary">
              <Link to="/weather" style={{ color: "white" }}>
                Return
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  } else if (Object.keys(props.weather).length === 0) {
    return (
      <div className="container">
        <div className="row row-content">
          <div className="col text-center mt-5">
            <h1> Please return and submit a location! </h1>
            <Button type="button" color="secondary">
              <Link to="/weather" style={{ color: "white" }}>
                Return
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/home">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Link to="/weather">Weather</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>Daily Forecast</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
        <div className="row">
          <div className="col mt-3 mb-5">
            <Link to="/weather/dailyforecast" style={{ color: "white" }}>
              <Button type="button" color="secondary">
                Daily Forecast
              </Button>
            </Link>
            <Link to="/weather/hourlyforecast" style={{ color: "white" }}>
              <Button type="button" color="secondary">
                Hourly Forecast
              </Button>
            </Link>
            <Link to="/weather/minutelyforecast" style={{ color: "white" }}>
              <Button type="button" color="secondary">
                Minutely Forecast
              </Button>
            </Link>
          </div>
        </div>
        {props.weather.daily.map((data) => {
          return (
            <div className="row row-content">
              <div className="col-md-6 offset-3">
                <RenderDailyWeatherCard
                  weatherData={data}
                  loading={props.weatherdataLoading}
                  errMess={props.weatherdataErrMess}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default DailyForecast;
