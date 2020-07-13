import React, { FC } from 'react';

import './WeatherCondition.css';
import compass from '../../assets/icons/icon-compass.png';
import umbrella from '../../assets/icons/icon-umbrella.png';
import wind from '../../assets/icons/icon-wind.png';

const WeatherCondition: FC = () => (
  <section className="weather-condition">
    <div className="weather-condition__location">Brisbane</div>
    <div className="weather-condition__temp">C</div>
    <div className="weather-condition__desc">
      <div>
        <img src={umbrella} alt="umbrella" />
        <span className="citem">0%</span>
      </div>
      <div>
        <img src={wind} alt="wind" />
        <span className="citem">0 km/h</span>
      </div>
      <div>
        <img src={compass} alt="compass" />
        <span className="citem">N</span>
      </div>
    </div>
  </section>
);
export default WeatherCondition;
