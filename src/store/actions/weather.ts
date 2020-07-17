import actionCreatorFactory from 'typescript-fsa';

import * as actionTypes from './actionTypes';
import { Weather } from '../../models/weather';

const actionCreator = actionCreatorFactory();

export const fetchWeatherStart = actionCreator<void>(actionTypes.FETCH_WEATHER);

export const fetchWeatherSuccess = actionCreator<{ weatherData: Weather }>(
  actionTypes.FETCH_WEATHER_SUCCESS
);

export const fetchWeatherFailure = actionCreator<{ error: Error }>(
  actionTypes.FETCH_WEATHER_FAIL
);

export const changeLimit = actionCreator<{ limit: number }>(
  actionTypes.CHANGE_LIMIT
);
