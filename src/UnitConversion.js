import React, { useContext } from "react";
import "./UnitConversion.css";
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
    }

    return Math.round(temperature);
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
    </div>
  );
}
