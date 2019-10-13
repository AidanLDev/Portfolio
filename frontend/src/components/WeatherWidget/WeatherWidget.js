import React from "react";

import styles from "./Style";

const weatherWidget = props => {
  // Extracting data
  let data;
  let location;
  let weather;
  let iconCode;

  if (props.weatherData) {
    data = props.weatherData;
    location = data.name;
    weather = data.weather[0];
    iconCode = weather.icon;
  }

  return (
    <div>
      {props.weatherData ? (
        <div>
          <h3>{location}</h3>
          <div className={styles.tooltip}>
            <span className={styles.tooltiptext}>{weather.description}</span>
            <img
              src={`http://openweathermap.org/img/wn/${iconCode}@2x.png`}
              alt="Weather Icon"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default weatherWidget;
