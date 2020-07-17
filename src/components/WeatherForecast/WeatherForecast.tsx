import React, { FC } from 'react';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import { format } from 'date-fns';

import './WeatherForecast.css';
import ForecastRow from './ForecastRow/ForecastRow';
import * as actions from '../../store/actions/weather';
import { FutureWeather } from '../../models/weather';
import toFahrenheit from '../../utils/transferWeather';

const WeatherForecast: FC = () => {
  const unit = useSelector((state: RootStateOrAny) => state.navigation.unit);
  const limit = useSelector((state: RootStateOrAny) => state.weather.limit);
  let forecasts = useSelector(
    (state: RootStateOrAny) => state.weather.forecast
  ) as Array<FutureWeather>;
  forecasts = forecasts.slice(0, limit);

  const dispatch = useDispatch();
  const onChangeLimit = (value: number) =>
    dispatch(actions.changeLimit({ limit: value }));

  return (
    <section className="weather-forecast">
      <div className="forecast__switch">
        <button
          className={`forecast__switch_0${limit === 4 ? ' switch-active' : ''}`}
          type="button"
          onClick={() => onChangeLimit(4)}
        >
          4 days
        </button>
        <button
          className={`forecast__switch_1${limit === 7 ? ' switch-active' : ''}`}
          type="button"
          onClick={() => onChangeLimit(7)}
        >
          7 days
        </button>
      </div>
      {forecasts.map((forecast: FutureWeather) => {
        const date = new Date(+forecast.date * 1000);
        const day = format(date, 'EEE');
        const time = format(date, 'HH:mm');

        return (
          <ForecastRow
            key={forecast.date}
            day={day}
            high={
              unit === 'c' ? +forecast.maxTemp : toFahrenheit(+forecast.maxTemp)
            }
            low={
              unit === 'c' ? +forecast.minTemp : toFahrenheit(+forecast.minTemp)
            }
            time={time}
            unit={unit}
          />
        );
      })}
    </section>
  );
};

export default WeatherForecast;
