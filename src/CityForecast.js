import React from "react";
import "./CityForecast.css";

export default function CityForecast() {
  return (
    <div className="row justify-content-around third-row forecast">
      <div className="col-2 forecast-day-1">
        <div className="row">
          <p>THU</p>
        </div>
        <div className="row forecast-day">
          <i className="fa-solid fa-cloud-rain thu-icon"></i>
          <span className="thu-forecast">18 º | 13 º</span>
        </div>
      </div>
      <div className="col-2 forecast-day-2">
        <div className="row">
          <p>FRI</p>
        </div>
        <div className="row forecast-day">
          <i className="fa-solid fa-cloud-rain fri-icon"></i>
          <span className="fri-forecast">16 º | 9 º</span>
        </div>
      </div>
      <div className="col-2 forecast-day-3">
        <div className="row">
          <p>SAT</p>
        </div>
        <div className="row forecast-day">
          <i className="fa-solid fa-cloud-rain sat-icon"></i>
          <span className="sat-forecast">17 º | 9 º</span>
        </div>
      </div>
      <div className="col-2 forecast-day-4">
        <div className="row">
          <p>SUN</p>
        </div>
        <div className="row forecast-day">
          <i className="fa-solid fa-sun sunday-icon"></i>
          <span className="sun-forecast">18 º | 9 º</span>
        </div>
      </div>
      <div className="col-2 forecast-day-5">
        <div className="row">
          <p>MON</p>
        </div>
        <div className="row forecast-day">
          <i className="fa-solid fa-cloud-sun mon-icon"></i>
          <span className="mon-forecast">17 º | 10 º</span>
        </div>
      </div>
    </div>
  );
}
