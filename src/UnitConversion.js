import React, { useState } from "react";
import "./UnitConversion.css";

export default function UnitConversion(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheitMaxTemp() {
    return Math.round((props.data.maxTemp * 9) / 5 + 32);
  }

  function fahrenheitMinTemp() {
    return Math.round((props.data.minTemp * 9) / 5 + 32);
  }

  function fahrenheitCurrentTemp() {
    return Math.round((props.data.currentTemp * 9) / 5 + 32);
  }

  function fahrenheitFeelsLike() {
    return Math.round((props.data.feelsLike * 9) / 5 + 32);
  }

  if (unit === "celsius") {
    return (
      <div>
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
            <h1>
              <span className="h1">{Math.round(props.data.currentTemp)}</span>
              <span className="unit-current-temp-chosen"> ºC</span>
              <span className="unit-current-temp-bar">|</span>
              <button
                className="unit-conversion-button"
                type="button"
                title="Change temp unit"
                onClick={convertToFahrenheit}
              >
                <span> ºF</span>
              </button>
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
      </div>
    );
  } else {
    return (
      <div>
        <div className="row current-max-min-temps">
          <div className="col-6 current-max-temp">
            <p>Max.: {fahrenheitMaxTemp()} ºF ↑</p>
          </div>
          <div className="col-6 current-min-temp">
            <p>Min.: {fahrenheitMinTemp()} ºF ↓</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h1>
              <span className="h1">{fahrenheitCurrentTemp()}</span>
              <span className="unit-current-temp-chosen"> ºF</span>
              <span className="unit-current-temp-bar">|</span>
              <button
                className="unit-conversion-button"
                type="button"
                title="Change temp unit"
                onClick={convertToCelsius}
              >
                <span> ºC</span>
              </button>
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="current-feels-like">
              Feels like {fahrenheitFeelsLike()} ºF
            </p>
          </div>
        </div>
      </div>
    );
  }
}
