import React, { useState, useRef } from "react";
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
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(props.initialLocation);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  function showWeatherData(response) {
    setWeatherData({
      loaded: true,
      coordinates: response.data.coord,
      maxTemp: response.data.main.temp_max,
      minTemp: response.data.main.temp_min,
      currentTemp: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      localDate: new Date(response.data.timezone),
      /*date: new Date(response.data.dt * 1000),*/ // UTC
      localHour: new Date(response.data.timezone),
      /*hour: new Date(response.data.dt * 1000),*/ // UTC
      location: response.data.name,
      icon: response.data.weather[0].icon,
      weatherConditions: response.data.weather[0].main,
    });
  }

  //Music button
  function handleTogglePlay() {
    setIsPlaying((prevState) => !prevState);
  }

  function handleAudioEnded() {
    setIsPlaying(false); //To change the pause icon to the play icon when the audio ends
  }

  //Search engine
  function searchCity() {
    const apiKey = "769b0349d496f23c694b6fce62f1ecac";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios
      .get(apiUrl)
      .then(showWeatherData)
      .catch((error) => {
        //Resetti alert for invalid location
        Swal.fire({
          imageUrl: "https://i.imgur.com/45Ydv3s.png",
          title: "...WHAT WAS THAT?!",
          html: "Before hitting the search button, type in a VALID location! Type in a VALID one! <br> I KNOW you knew that. <br> <br> YA HEAR ME? <br> <br> <strong>NOW, SCRAM!</strong>",
          confirmButtonText: "Okay...",
          confirmButtonColor: "#6bb888",
          width: 400,
          height: 300,
          allowOutsideClick: false,
        });
      });
  }

  function handleSubmit(event) {
    event.preventDefault();

    //To pause the audio
    if (isPlaying === true) {
      audioRef.current.pause();
    }

    setIsPlaying(false); //To reset the play-pause button
    searchCity();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  //Current location button
  function setCurrentLocation(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    const apiKey = "769b0349d496f23c694b6fce62f1ecac";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showWeatherData);
  }

  function readCurrentLocation() {
    navigator.geolocation.getCurrentPosition(setCurrentLocation);
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
                  onClick={readCurrentLocation}
                >
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="location-icon"
                  />
                </button>
              </li>
              <li className="secondary-button-2">
                <button
                  className="play-pause-button"
                  type="button"
                  title="Play music"
                  onClick={handleTogglePlay}
                >
                  {isPlaying ? (
                    <FontAwesomeIcon icon={faPause} className="pause-icon" />
                  ) : (
                    <FontAwesomeIcon icon={faPlay} className="play-icon" />
                  )}
                </button>
                {isPlaying ? (
                  <audio
                    ref={audioRef}
                    src="https://audio.jukehost.co.uk/JNrrMdpABExr5kNeMDrGbTXQ82ZPNdMV"
                    autoPlay
                    controls
                    onEnded={handleAudioEnded}
                  />
                ) : null}
              </li>
            </ul>
          </div>
        </div>
        <CityWeather data={weatherData} />
        <CityForecast coordinates={weatherData.coordinates} />
        <GithubButton />
      </div>
    );
  } else {
    searchCity();
    return null;
  }
}
