import "./App.css";
import "./Weather.css";

export default function Weather() {
    let weatherData = {
        maxTemp: 18,
        minTemp: 13,
        currentTemp: 16,
        feelsLike: 16,
        humidity: 95,
        wind: 8,
        date: "Wednesday, December 14",
        hour: "19:14",
        city: "Málaga",
        description: "Rain"
    };

    return (
        <div className="Weather">
          <div className="row first-row">
            <div className="col-9 mt-3 mb-3">
              <form id="search-form" action="#">
                <input
                  id="search-input"
                  type="text"
                  placeholder="Search city"
                  autoComplete="off"
                />
                <button id="delete-button" type="reset" title="Clear">
                  <i className="fa-solid fa-xmark delete-icon"></i>
                </button>
                <span className="lbar">|</span>
                <button id="search-button" type="submit" title="Search">
                  <i className="fa-solid fa-magnifying-glass search-icon"></i>
                </button>
              </form>
            </div>
            <div className="col-3 mt-3">
              <ul id="secondary-buttons">
                <li id="secondary-button-1">
                  <button
                    id="location-button"
                    type="button"
                    title="Current location"
                  >
                    <i className="fa-solid fa-location-dot location-icon"></i>
                  </button>
                </li>
                <li id="secondary-button-2">
                  <button
                    id="fahrenheit-celsius-button"
                    type="button"
                    title="Change temp unit"
                  >
                    <span className="fahrenheit-symbol">ºF</span>
                  </button>
                </li>
                <li id="secondary-button-3">
                  <audio controls id="audio">
                    <source
                      src="https://audio.jukehost.co.uk/QeMcZD4Axh76BZWaUtZkWNhykbEJTmBI"
                      type="audio/mp3"
                    />
                    Your browser does not support the audio element.
                  </audio>
                  <button id="play-pause-button" type="button" title="Play music">
                    <i className="fa-solid fa-play play-icon"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="row justify-content-between second-row">
            <div
              id="current-conditions"
              className="col-6 mb-3 first-col-second-row"
            >
              <div id="current-max-min-temps" className="row">
                <div id="current-max-temp" className="col-6">
                  <p>Max.: {weatherData.maxTemp} ºC ↑</p>
                </div>
                <div id="current-min-temp" className="col-6">
                  <p>Min.: {weatherData.minTemp} ºC ↓</p>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <h1 id="h1">
                    <span id="current-temp">{weatherData.currentTemp} ºC</span>
                  </h1>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <p id="current-feels-like">
                    Feels like {weatherData.feelsLike} ºC
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <i className="fa-solid fa-droplet humidity-icon"></i>
                  <span id="humidity-span">
                    <span id="current-humidity"> {weatherData.humidity}</span> %
                  </span>
                </div>
                <div className="col-6">
                  <i className="fa-solid fa-wind wind-icon"></i>
                  <span id="wind-span">
                    <span id="current-wind"> </span>
                    {weatherData.wind} km/h
                  </span>
                </div>
              </div>
            </div>
            <div
              id="date-city-weather-column"
              className="col-6 mb-3 second-col-second-row"
            >
              <div className="row">
                <span id="current-local-date">{weatherData.date}</span>
                <span id="current-local-hour">{weatherData.hour}</span>
              </div>
              <div className="row">
                <h2 id="current-city">{weatherData.city}</h2>
              </div>
              <div className="row">
                <i id="current-weather-icon" className="fa-solid fa-cloud-rain"></i>
              </div>
              <div className="row">
                <p id="current-weather-text">{weatherData.description}</p>
              </div>
            </div>
          </div>
          <div id="forecast" className="row justify-content-around third-row">
            {/*<div id="forecast-day-1" className="col-2">
              <div className="row">
                <p>THU</p>
              </div>
              <div id="forecast-day" className="row">
                <i id="thu-icon" className="fa-solid fa-cloud-rain"></i>
                <span id="thu-forecast">18 º | 13 º</span>
              </div>
            </div>
            <div id="forecast-day-2" className="col-2">
              <div className="row">
                <p>FRI</p>
              </div>
              <div id="forecast-day" className="row">
                <i id="fri-icon" className="fa-solid fa-cloud-rain"></i>
                <span id="fri-forecast">16 º | 9 º</span>
              </div>
            </div>
            <div id="forecast-day-3" className="col-2">
              <div className="row">
                <p>SAT</p>
              </div>
              <div id="forecast-day" className="row">
                <i id="sat-icon" className="fa-solid fa-cloud-rain"></i>
                <span id="sat-forecast">17 º | 9 º</span>
              </div>
            </div>
            <div id="forecast-day-4" className="col-2">
              <div className="row">
                <p>SUN</p>
              </div>
              <div id="forecast-day" className="row">
                <i id="sunday-icon" className="fa-solid fa-sun"></i>
                <span id="sun-forecast">18 º | 9 º</span>
              </div>
            </div>
            <div id="forecast-day-5" className="col-2">
              <div className="row">
                <p>MON</p>
              </div>
              <div id="forecast-day" className="row">
                <i id="mon-icon" className="fa-solid fa-cloud-sun"></i>
                <span id="mon-forecast">17 º | 10 º</span>
              </div>
      </div>*/}
          </div>
          <div>
            <button id="github-button" type="button" title="Open-source code by Sonia 🐚">
                <a href="https://github.com/Nirvean/ac-weather-react" class="github-link" target="_blank" rel="noreferrer">
                    <i class="fa-brands fa-github github-icon"></i>
                </a>
            </button>
          </div>
    </div>);
}