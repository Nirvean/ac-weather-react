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
    description: "Rain",
  };

  return (
    <div className="Weather">
      <div className="row first-row">
        <div className="col-9 mt-3 mb-3">
          <form className="search-form" action="#">
            <input
              className="search-input"
              type="text"
              placeholder="Search city"
              autoComplete="off"
            />
            <button className="delete-button" type="reset" title="Clear">
              <i className="fa-solid fa-xmark delete-icon"></i>
            </button>
            <span className="lbar">|</span>
            <button className="search-button" type="submit" title="Search">
              <i className="fa-solid fa-magnifying-glass search-icon"></i>
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
                <i className="fa-solid fa-location-dot location-icon"></i>
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
                <i className="fa-solid fa-play play-icon"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="row second-row">
        <div className="col-6 mb-3 first-col-second-row current-conditions">
          <div className="row current-max-min-temps">
            <div className="col-6 current-max-temp">
              <p>Max.: {weatherData.maxTemp} ºC ↑</p>
            </div>
            <div className="col-6 current-min-temp">
              <p>Min.: {weatherData.minTemp} ºC ↓</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h1 className="h1">
                <span className="current-temp">
                  {weatherData.currentTemp} ºC
                </span>
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p className="current-feels-like">
                Feels like {weatherData.feelsLike} ºC
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <i className="fa-solid fa-droplet humidity-icon"></i>
              <span className="humidity-span">
                <span className="current-humidity">
                  {" "}
                  {weatherData.humidity}
                </span>{" "}
                %
              </span>
            </div>
            <div className="col-6">
              <i className="fa-solid fa-wind wind-icon"></i>
              <span className="wind-span">
                <span className="current-wind"> </span>
                {weatherData.wind} km/h
              </span>
            </div>
          </div>
        </div>
        <div className="col-6 mb-3 second-col-second-row date-city-weather-column">
          <div className="row">
            <span className="current-local-date">{weatherData.date}</span>
            <span className="current-local-hour">{weatherData.hour}</span>
          </div>
          <div className="row">
            <h2 className="current-city">{weatherData.city}</h2>
          </div>
          <div className="row">
            <i className="fa-solid fa-cloud-rain current-weather-icon"></i>
          </div>
          <div className="row">
            <p className="current-weather-text">{weatherData.description}</p>
          </div>
        </div>
      </div>
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
      <div>
        <button
          className="github-button"
          type="button"
          title="Open-source code by Sonia 🐚"
        >
          <a
            href="https://github.com/Nirvean/ac-weather-react"
            className="github-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github github-icon"></i>
          </a>
        </button>
        {/*<footer className="footer">
            <a href="https://github.com/Nirvean/ac-weather-react" className="github-link" target="_blank" rel="noreferrer">Open-source code</a> by Sonia 🐚
    </footer>*/}
      </div>
    </div>
  );
}
