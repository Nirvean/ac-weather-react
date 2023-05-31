import React from "react";
import WeatherIcons from "./WeatherIcons";
import "./CityForecastWeekday.css";

export default function CityForecastWeekday(props) {
  function showForecastMaxTemp() {
    let maxTemp = Math.round(props.data.temp.max);
    return maxTemp;
  }

  function showForecastMinTemp() {
    let minTemp = Math.round(props.data.temp.min);
    return minTemp;
  }

  function showForecastDay() {
    let date = new Date(props.data.dt * 1000);
    let showForecastDay = date.getDay();
    let days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

    return days[showForecastDay];
  }

  return (
    <div>
      <div className="row">
        <p className="forecast-weekday">{showForecastDay()}</p>
      </div>
      <div className="row forecast-day">
        <WeatherIcons code={props.data.weather[0].icon} />
        <span className="thu-forecast">
          {showForecastMaxTemp()} º | &nbsp;{showForecastMinTemp()} º
        </span>
      </div>
    </div>
  );
}
