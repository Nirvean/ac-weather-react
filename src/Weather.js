import React, { useState } from "react";
import axios from "axios";
import CityWeather from "./CityWeather";
import CityForecast from "./CityForecast";
import GithubButton from "./GithubButton";
import "./App.css";
import "./Weather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faMagnifyingGlass,
  faLocationDot,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(props.initialLocation);

  function showWeatherData(response) {
    setWeatherData({
      loaded: true,
      maxTemp: response.data.main.temp_max,
      minTemp: response.data.main.temp_min,
      currentTemp: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      hour: new Date(response.data.dt * 1000),
      location: response.data.name,
      icon: response.data.weather[0].icon,
      weatherConditions: response.data.weather[0].main,
    });
  }

  function searchCity() {
    const apiKey = "769b0349d496f23c694b6fce62f1ecac";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeatherData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.loaded === true) {
    return (
      <div className="Weather">
        <div className="row first-row">
          <div className="col-9 mt-3 mb-3">
            <form className="search-form" action="#" onSubmit={handleSubmit}>
              <input
                className="search-input"
                type="text"
                placeholder="Search city"
                autoComplete="off"
                onChange={updateCity}
              />
              <button className="delete-button" type="reset" title="Clear">
                <FontAwesomeIcon icon={faXmark} className="delete-icon" />
              </button>
              <span className="lbar">|</span>
              <button className="search-button" type="submit" title="Search">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="search-icon"
                />
              </button>
            </form>
          </div>
          <div className="col-3 mt-3">
            <ul className="secondary-buttons">
              <li className="secondary-button-1">
                <button
                  className="location-button"
                  type="button"
                  title="Current location"
                >
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="location-icon"
                  />
                </button>
              </li>
              <li className="secondary-button-2">
                <button
                  className="fahrenheit-celsius-button"
                  type="button"
                  title="Change temp unit"
                >
                  <span className="fahrenheit-symbol">ºF</span>
                </button>
              </li>
              <li className="secondary-button-3">
                <audio controls id="audio">
                  <source
                    src="https://audio.jukehost.co.uk/QeMcZD4Axh76BZWaUtZkWNhykbEJTmBI"
                    type="audio/mp3"
                  />
                  Your browser does not support the audio element.
                </audio>
                <button
                  className="play-pause-button"
                  type="button"
                  title="Play music"
                >
                  <FontAwesomeIcon icon={faPlay} className="play-icon" />
                </button>
              </li>
            </ul>
          </div>
        </div>
        <CityWeather data={weatherData} />
        <CityForecast />
        <GithubButton />
      </div>
    );
  } else {
    searchCity();
    return;
  }
}
