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
          {/* {weather.description} to be tooltip value */}
        </div>
      ) : null}
    </div>
  );
};

export default weatherWidget;
