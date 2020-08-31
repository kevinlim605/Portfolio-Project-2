import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderDailyWeatherCard(props) {
  const url = `http://openweathermap.org/img/wn/${props.weatherData.weather[0].icon}@2x.png`;
  const date = new Date(props.weatherData.dt * 1000);
  const dateString = date.toString();
  console.log(date);
  return (
    <Card>
      <CardImg src="" alt="" />
      <CardBody>
        <CardTitle>{props.weatherData.weather[0].main}</CardTitle>
        <CardText>
          {dateString} <br />
          <img src={url} alt="weatherIcon"></img>
          {props.weatherData.weather[0].description} <br />
        </CardText>
      </CardBody>
    </Card>
  );
}

function DailyForecast(props) {
  if (typeof props.weather === "undefined") {
    return (
      <div>
        <h1> Please return and submit a location! </h1>
        <Button type="button" color="secondary">
          <Link to="/weather" style={{ color: "white" }}>
            Return
          </Link>
        </Button>
      </div>
    );
  } else if (Object.keys(props.weather).length === 0) {
    return (
      <div>
        <h1> Please return and submit a location! </h1>
        <Button type="button" color="secondary">
          <Link to="/weather" style={{ color: "white" }}>
            Return
          </Link>
        </Button>
      </div>
    );
  } else {
    return (
      <div className="container">
        {props.weather.daily.map((data) => {
          return (
            <div className="row">
              <div className="col">
                <RenderDailyWeatherCard weatherData={data} />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default DailyForecast;
