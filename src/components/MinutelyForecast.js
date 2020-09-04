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
                <Link to="/weather/dailyforecast">Daily Forecast</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Link to="/weather/hourlyforecast">Hourly Forecast</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>Minutely Forecast</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
        <div className="row row-content">
          {props.weather.minutely.map((data) => {
            return (
              <div className="col-md-3">
                <RenderMinutelyWeatherCard weatherData={data} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MinutelyForecast;
