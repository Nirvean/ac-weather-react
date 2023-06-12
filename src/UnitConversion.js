import React, { useContext } from "react";
import "./UnitConversion.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet, faWind } from "@fortawesome/free-solid-svg-icons";
import UnitConversionContext from "./UnitConversionContext";

export default function UnitConversion(props) {
  const { unit, toggleUnit } = useContext(UnitConversionContext);

  function convertToFahrenheit(event) {
    event.preventDefault();
    toggleUnit();
  }

  function convertToCelsius(event) {
    event.preventDefault();
    toggleUnit();
  }

  function convertTemperature(temperature) {
    if (unit === "fahrenheit") {
      return Math.round((temperature * 9) / 5 + 32);
    } else {
      return Math.round(temperature);
    }
  }

  function convertToMph(speed) {
    if (unit === "fahrenheit") {
      return Math.round(speed * 0.621371);
    } else {
      return Math.round(speed);
    }
  }

  return (
    <div>
      <div className="row current-max-min-temps">
        <div className="col-6 current-max-temp">
          <p>
            Max.: {convertTemperature(props.data.maxTemp)}{" "}
            {unit === "fahrenheit" ? "ºF" : "ºC"} ↑
          </p>
        </div>
        <div className="col-6 current-min-temp">
          <p>
            Min.: {convertTemperature(props.data.minTemp)}{" "}
            {unit === "fahrenheit" ? "ºF" : "ºC"} ↓
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h1>
            <span className="h1">
              {convertTemperature(props.data.currentTemp)}
            </span>
            <span className="unit-current-temp-chosen">
              {unit === "fahrenheit" ? " ºF" : " ºC"}
            </span>
            <span className="unit-current-temp-bar">|</span>
            <button
              className="unit-conversion-button"
              type="button"
              title="Change temp unit"
              onClick={
                unit === "celsius" ? convertToFahrenheit : convertToCelsius
              }
            >
              <span>{unit === "celsius" ? " ºF" : " ºC"}</span>
            </button>
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <p className="current-feels-like">
            Feels like {convertTemperature(props.data.feelsLike)}{" "}
            {unit === "fahrenheit" ? " ºF" : " ºC"}
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <FontAwesomeIcon icon={faDroplet} className="humidity-icon" />
          <span className="humidity-span">
            <span className="current-humidity">
              {" "}
              {Math.round(props.data.humidity)}
            </span>{" "}
            %
          </span>
        </div>
        <div className="col-6">
          <FontAwesomeIcon icon={faWind} className="wind-icon" />
          <span className="wind-span">
            <span className="current-wind"> </span>
            {unit === "fahrenheit"
              ? `${convertToMph(props.data.wind)} mph`
              : `${Math.round(props.data.wind)} km/h`}
          </span>
        </div>
      </div>
    </div>
  );
}
