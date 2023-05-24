import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedHour from "./FormattedHour";
import "./CityWeather.css";

export default function CityWeather(props) {
  return (
    <div className="row second-row">
      <div className="col-6 mb-3 first-col-second-row current-conditions">
        <div className="row current-max-min-temps">
          <div className="col-6 current-max-temp">
            <p>Max.: {Math.round(props.data.maxTemp)} ºC ↑</p>
          </div>
          <div className="col-6 current-min-temp">
            <p>Min.: {Math.round(props.data.minTemp)} ºC ↓</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h1 className="h1">
              <span className="current-temp">
                {Math.round(props.data.currentTemp)} ºC
              </span>
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="current-feels-like">
              Feels like {Math.round(props.data.feelsLike)} ºC
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <i className="fa-solid fa-droplet humidity-icon"></i>
            <span className="humidity-span">
              <span className="current-humidity">
                {" "}
                {Math.round(props.data.humidity)}
              </span>{" "}
              %
            </span>
          </div>
          <div className="col-6">
            <i className="fa-solid fa-wind wind-icon"></i>
            <span className="wind-span">
              <span className="current-wind"> </span>
              {Math.round(props.data.wind)} km/h
            </span>
          </div>
        </div>
      </div>
      <div className="col-6 mb-3 second-col-second-row date-city-weather-column">
        <div className="row">
          <span className="current-local-date">
            <FormattedDate date={props.data.date} />
          </span>
          <span className="current-local-hour">
            <FormattedHour date={props.data.hour} />
          </span>
        </div>
        <div className="row">
          <h2 className="current-city">{props.data.location}</h2>
        </div>
        <div className="row">
          <i className="fa-solid fa-cloud-rain current-weather-icon"></i>
        </div>
        <div className="row">
          <p className="current-weather-text">{props.data.weatherConditions}</p>
        </div>
      </div>
    </div>
  );
}
