import React, { FC } from 'react';

import './ForecastRow.css';

const ForecastRow: FC = () => (
  <div className="weather-forecast__row">
    <span className="weather-forecast__day">Mon</span>
    <span className="weather-forecast__icon">
      <i className="fa fa-clock-o" />
      11:00
    </span>
    <span className="weather-forecast__high">0 C</span>
    <span className="weather-forecast__low">10 C</span>
  </div>
);

export default ForecastRow;
