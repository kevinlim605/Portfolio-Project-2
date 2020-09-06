import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardText,
  CardHeader,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { dateConfigurator } from "../shared/dateConfigurator";

function RenderMinutelyWeatherCard(props) {
  const dateString = dateConfigurator(props.weatherData.dt);
  return (
    <Card>
      <CardHeader>{dateString}</CardHeader>
      <CardBody>
        <CardText>precipitation: {props.weatherData.precipitation} mm</CardText>
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
              <div className="d-flex justify-content-center col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
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
