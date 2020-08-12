import React from 'react';

import styles from './Style.module.scss';

interface Props {
  weatherData?: {
    name: string,
    weather: Array<{
      icon: string,
      description: string,
    }>;
    main: {
      temp: number
    };
  };
}

const weatherWidget:React.FC<Props> = ({ weatherData }) => {
  // Extracting data
  let data;
  let location;
  let weather;
  let iconCode;
  let temp:number = 0;
  let description;

  const kelvinToCelsius = (temp:number) => (temp - 273.15);
  const kelvinToFarenheit = (temp:number) => ((temp - 273.15) * 9) / 5 + 32;

  if (weatherData) {
    data = weatherData;
    location = data.name;
    weather = data.weather[0];
    iconCode = weather.icon;
    description = weather.description;
    temp = data.main.temp;
  }

  return (
    <div>
      {weatherData ? (
        <div>
          <p>
            <b>Whats the weather like?</b>
          </p>
          <h3>
            {location}: {kelvinToCelsius(temp).toFixed(1)} °C | {kelvinToFarenheit(temp).toFixed(2)} °F
          </h3>
          <div className={styles.tooltip}>
            <span className={styles.tooltiptext}>{description}</span>
            <img
              src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
              alt='Weather Icon'
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default weatherWidget;
