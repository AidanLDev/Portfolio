import React from "react";

import styles from "./Style.module.scss";

const weatherWidget = props => {
  // Extracting data
  let data;
  let location;
  let weather;
  let iconCode;
  let temp;
  let celsius;
  let farenheit;

  const kelvinToCelsius = temp => (celsius = temp - 273.15);
  const kelvinToFarenheit = temp => {
    farenheit = ((temp - 273.15) * 9) / 5 + 32;
    return farenheit;
  };

  if (props.weatherData) {
    data = props.weatherData;
    location = data.name;
    weather = data.weather[0];
    iconCode = weather.icon;
    temp = data.main.temp;

    kelvinToCelsius(temp);
    kelvinToFarenheit(temp);
  }

  return (
    <div>
      {props.weatherData ? (
        <div>
          <hr />
          <p>
            <b>Whats the weather like where Aidan is?</b>
          </p>
          <h3>
            {location}: {celsius.toFixed(1)} °C | {farenheit.toFixed(2)} °F
          </h3>
          <div className={styles.tooltip}>
            <span className={styles.tooltiptext}>{weather.description}</span>
            <img
              src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
              alt="Weather Icon"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default weatherWidget;
