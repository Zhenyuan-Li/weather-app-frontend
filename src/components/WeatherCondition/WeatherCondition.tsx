import React, { FC } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';

import './WeatherCondition.css';
import compass from '../../assets/icons/icon-compass.png';
import umbrella from '../../assets/icons/icon-umbrella.png';
import wind from '../../assets/icons/icon-wind.png';
import Loader from '../UI/Loader/Loader';

const WeatherCondition: FC = () => {
  const unit = useSelector((state: RootStateOrAny) => state.navigation.unit);
  const current = useSelector((state: RootStateOrAny) => state.weather.current);
  const cityName = useSelector(
    (state: RootStateOrAny) => state.weather.cityName
  );

  if (cityName === '') {
    return <Loader />;
  }
  return (
    <section className="weather-condition">
      <div className="weather-condition__location">{cityName}</div>
      <div className="weather-condition__temp">
        {current.temp} {unit}
      </div>
      <div className="weather-condition__desc">
        <div>
          <img src={umbrella} alt="umbrella" />
          <span className="citem">{current.humidity} %</span>
        </div>
        <div>
          <img src={wind} alt="wind" />
          <span className="citem">{current.windSpeed} km/h</span>
        </div>
        <div>
          <img src={compass} alt="compass" />
          <span className="citem">{current.windDirection}</span>
        </div>
      </div>
    </section>
  );
};
export default WeatherCondition;
