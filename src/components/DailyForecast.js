import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderDailyWeatherCard(props) {
  const url = `http://openweathermap.org/img/wn/${props.weatherData.weather[0].icon}@2x.png`;
  const date = new Date(props.weatherData.dt * 1000);
  const dateString = date.toString(date);
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
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <RenderDailyWeatherCard weatherData={props.dailyWeather[0]} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <RenderDailyWeatherCard weatherData={props.dailyWeather[1]} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <RenderDailyWeatherCard weatherData={props.dailyWeather[2]} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <RenderDailyWeatherCard weatherData={props.dailyWeather[3]} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <RenderDailyWeatherCard weatherData={props.dailyWeather[4]} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <RenderDailyWeatherCard weatherData={props.dailyWeather[5]} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <RenderDailyWeatherCard weatherData={props.dailyWeather[6]} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <RenderDailyWeatherCard weatherData={props.dailyWeather[7]} />
        </div>
      </div>
    </div>
  );
}

export default DailyForecast;
