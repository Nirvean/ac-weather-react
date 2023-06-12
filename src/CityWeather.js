import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedHour from "./FormattedHour";
import WeatherIcons from "./WeatherIcons";
import UnitConversion from "./UnitConversion";
import "./CityWeather.css";

export default function CityWeather(props) {
  //To control the number of letters and words that fit in the column depending on the lenght of the city name
  let cityName = props.data.location;
  let fontSize = 40;
  let cityClassName = "current-city";
  let conditionsClassName = "current-conditions";

  if (cityName.length > 11) {
    //if the name of the city is a compound name
    if (cityName.includes(" ")) {
      const [firstName] = cityName.split(" ");
      if (firstName.length > 11) {
        const fontSizeReduction = Math.floor((firstName.length - 11) / 1);
        fontSize -= fontSizeReduction;
        const letters = Math.ceil(cityName.length / 4);
        fontSize -= letters;
      }
    } else {
      //if the name of the city consists of a single word
      const letters = Math.ceil(cityName.length / 4);
      fontSize -= letters;
      cityName = cityName.replace(/(.{14})/g, "$1 ");
    }

    conditionsClassName += " reduce-height"; //To reduce the column height if the city name occupies more than one line
  }

  return (
    <div className="row second-row">
      <div className={`col-6 mb-3 first-col-second-row ${conditionsClassName}`}>
        <UnitConversion data={props.data} />
      </div>
      <div className="col-6 mb-3 second-col-second-row date-city-weather-column">
        <div className="row">
          <span className="current-local-date">
            <FormattedDate
              /*date={props.data.date} UTC*/ date={props.data.localDate}
            />
          </span>
          <span className="current-local-hour">
            <FormattedHour
              /*hour={props.data.hour} UTC*/ hour={props.data.localHour}
            />
          </span>
        </div>
        <div className="row">
          <h2 className={cityClassName} style={{ fontSize: `${fontSize}px` }}>
            {cityName}
          </h2>
        </div>
        <div className="row current-weather-icon">
          <div>
            <WeatherIcons code={props.data.icon} />
          </div>
        </div>
        <div className="row">
          <p className="current-weather-text">{props.data.weatherConditions}</p>
        </div>
      </div>
    </div>
  );
}
