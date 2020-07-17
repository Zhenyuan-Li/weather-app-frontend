import React, { FC, useCallback, useEffect } from 'react';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';

import WeatherCondition from '../components/WeatherCondition/WeatherCondition';
import WeatherForecast from '../components/WeatherForecast/WeatherForecast';
import Loader from '../components/UI/Loader/Loader';
import Error from '../components/UI/Error/Error';
import * as actions from '../store/actions/navigation';

const Weather: FC = () => {
  const error = useSelector((state: RootStateOrAny) => state.weather.error);
  const loader = useSelector(
    (state: RootStateOrAny) => state.weather.isLoading
  ) as boolean;
  const dispatch = useDispatch();
  const onFetchWeather = useCallback(
    (city: string) => dispatch(actions.fetchWeather(city)),
    [dispatch]
  );

  useEffect(() => {
    onFetchWeather('brisbane');
  }, [onFetchWeather]);

  if (error) {
    return <Error />;
  }
  return loader ? (
    <Loader />
  ) : (
    <main>
      <WeatherCondition />
      <WeatherForecast />
    </main>
  );
};

export default Weather;
