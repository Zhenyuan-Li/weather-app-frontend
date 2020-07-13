import React, { FC } from 'react';

import './WeatherForecast.css';
import ForecastRow from './ForecastRow/ForecastRow';

const WeatherForecast: FC = () => {
  return (
    <section className="weather-forecast">
      <div className="forecast__switch">
        <button className="forecast__switch_0" type="button">
          5 items
        </button>
        <button className="forecast__switch_1" type="button">
          10 items
        </button>
      </div>
      <ForecastRow />
      <ForecastRow />
      <ForecastRow />
    </section>
  );
};

export default WeatherForecast;
