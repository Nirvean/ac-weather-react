import React, { useState, useEffect } from "react";
import axios from "axios";
import CityForecastWeekday from "./CityForecastWeekday";
import "./CityForecast.css";

export default function CityForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  //To refresh the five-day forecast (new API call) after searching for a new location
  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]); //setLoaded to false if the props.coordinates change

  function showForecastData(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  function loadForecast() {
    const apiKey = "a286ae6c0946e11743cd344706fe7fab";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showForecastData);
  }

  if (loaded === true) {
    return (
      <div className="row justify-content-around third-row forecast">
        {forecastData.map(function (fiveDayForecast, index) {
          if (index < 5) {
            const className = `col-2 forecast-day-${index + 1}`;
            return (
              <div className={className} key={index}>
                <CityForecastWeekday data={fiveDayForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    loadForecast();
    return null;
  }
}
