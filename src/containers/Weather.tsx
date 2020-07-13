import React, { FC } from 'react';

import './Weather.css';
import WeatherCondition from '../components/WeatherCondition/WeatherCondition';
import WeatherForecast from '../components/WeatherForecast/WeatherForecast';
import Footer from '../components/UI/Footer/Footer';
import Header from '../components/UI/Header/Header';
// import Loader from '../components/UI/Loader/Loader';
import Navigation from '../components/Navigation/Navigation';

const Weather: FC = () => {
  return (
    <div className="weather-channel__container">
      <Header />
      <Navigation />
      <WeatherCondition />
      <WeatherForecast />
      <Footer />
    </div>
  );
};

export default Weather;
