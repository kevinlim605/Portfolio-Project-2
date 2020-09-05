import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardHeader,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { dateConfigurator } from "../shared/dateConfigurator";

function RenderHourlyWeatherCard(props) {
  const src = `../assets/images/${props.weatherData.weather[0].icon}.jpg`;
  const url = `http://openweathermap.org/img/wn/${props.weatherData.weather[0].icon}.png`;
  const dateString = dateConfigurator(props.weatherData.dt);
  return (
    <Card className="card-selector">
      <CardImg
        src={src}
        alt={props.weatherData.weather[0].description}
        height="225"
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
            <div className="col-6">Temp: {props.weatherData.temp} &#8457;</div>
            <div className="col-6">
              Feels Like: {props.weatherData.feels_like} &#8457;
            </div>
          </div>
          <div class="row">
            <div className="col-6">
              Chance of Rain: {props.weatherData.pop}%
            </div>
            <div className="col-6">Humidity: {props.weatherData.humidity}%</div>
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

function HourlyForecast(props) {
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
              <BreadcrumbItem>
                <Link to="/weather/Dailyforecast">Daily Forecast</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>Hourly Forecast</BreadcrumbItem>
              <BreadcrumbItem>
                <Link to="/weather/minutelyforecast">Minutely Forecast</Link>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
        {props.weather.hourly.map((data) => {
          return (
            <div className="row row-content">
              <div className="d-flex justify-content-center col">
                <RenderHourlyWeatherCard weatherData={data} />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default HourlyForecast;
