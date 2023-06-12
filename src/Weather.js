import React, { useState, useRef } from "react";
import axios from "axios";
import CityWeather from "./CityWeather";
import CityForecast from "./CityForecast";
import GithubButton from "./GithubButton";
import Loader from "./Loader";
import "./App.css";
import "./Weather.css";
import "./Loader.css";
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

  //Change of music track depending on the parts of the day
  function getDayTime(response) {
    const timeNow = new Date();
    const cityInfo = response.data;
    const timezone = cityInfo.timezone;
    const localTime = timeNow.getTime();
    const localOffset = timeNow.getTimezoneOffset() * 60000;
    const utc = localTime + localOffset;
    const cityDateCode = utc + 1000 * timezone;
    const currentHour = new Date(cityDateCode).getHours();

    if (currentHour >= 21 || currentHour < 6) {
      return "night";
    } else if (currentHour >= 6 && currentHour < 12) {
      return "morning";
    } else if (currentHour >= 12 && currentHour < 13) {
      return "noon";
    } else if (currentHour >= 13 && currentHour < 17) {
      return "afternoon";
    } else if (currentHour >= 17 && currentHour < 21) {
      return "evening";
    }
  }

  function showWeatherData(response) {
    const dayTime = getDayTime(response);

    const audioUrls = {
      night: "https://audio.jukehost.co.uk/P079LVYjwprIupeNpCRW0CrFzZYU60KW",
      morning: "https://audio.jukehost.co.uk/3TzpVF4v4y5wdWThMKD3FCCVVS7oQQae",
      noon: "https://audio.jukehost.co.uk/JNrrMdpABExr5kNeMDrGbTXQ82ZPNdMV",
      afternoon:
        "https://audio.jukehost.co.uk/QeMcZD4Axh76BZWaUtZkWNhykbEJTmBI",
      evening: "https://audio.jukehost.co.uk/AD4k3WmtONihvYMSA2oHgqTWFGLfzHk8",
    };

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
      audioUrl: audioUrls[dayTime],
    });
  }

  //Music button
  function handleTogglePlay() {
    if (isPlaying) {
      audioRef.current.pause();
    }
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

    if (city === "") {
      return null;
    }

    searchCity();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  //Current location button
  function setCurrentLocation(position) {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }

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
      <div>
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
                    src={weatherData.audioUrl}
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
    return (
      <div>
        <Loader />
      </div>
    );
  }
}
