import React, { FC } from 'react';

import './ForecastRow.css';

interface WeatherForecastProps {
  high: number;
  low: number;
  time: string;
  unit: string;
  day: string;
}

const ForecastRow: FC<WeatherForecastProps> = ({
  time,
  high,
  unit,
  low,
  day,
}) => (
  <div className="weather-forecast__row">
    <span className="weather-forecast__day">{day}</span>
    <span className="weather-forecast__icon">
      <i className="fa fa-clock-o" />
      {time}
    </span>
    <span className="weather-forecast__high">
      {high} {unit}
    </span>
    <span className="weather-forecast__low">
      {low} {unit}
    </span>
  </div>
);

export default ForecastRow;
