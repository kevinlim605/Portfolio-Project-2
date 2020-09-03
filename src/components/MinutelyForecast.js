import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";

function RenderMinutelyWeatherCard(props) {
  const date = new Date(props.weatherData.dt * 1000);
  const dateString = date.toString();
  console.log(date);
  return (
    <Card>
      <CardImg src="" alt="" />
      <CardBody>
        <CardTitle>{dateString}</CardTitle>
        <CardText>precipitation: {props.weatherData.precipitation}mm</CardText>
      </CardBody>
    </Card>
  );
}

function MinutelyForecast(props) {
  if (typeof props.weather === "undefined") {
    return (
      <div className="container">
        <div className="row">
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
        <div className="row">
          <div className="col text-center">
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
              <BreadcrumbItem>Minutely Forecast</BreadcrumbItem>
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
        {props.weather.minutely.map((data) => {
          return (
            <div className="row">
              <div className="col">
                <RenderMinutelyWeatherCard weatherData={data} />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MinutelyForecast;
