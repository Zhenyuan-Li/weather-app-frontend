import { Action } from 'redux';
import { isType } from 'typescript-fsa';

import {
  fetchWeatherStart,
  fetchWeatherSuccess,
  fetchWeatherFailure,
  changeLimit,
} from '../actions/weather';
import { CurrentWeather, FutureWeather } from '../../models/weather';

type weatherState = {
  cityName: string;
  current: CurrentWeather | null;
  error: Error | null;
  forecast: Array<FutureWeather>;
  isLoading: boolean;
  limit: number;
};

const initialState: weatherState = {
  cityName: '',
  current: null,
  error: null,
  forecast: new Array<FutureWeather>(),
  isLoading: false,
  limit: 4,
};

const weather = (
  state: weatherState = initialState,
  action: Action
): weatherState => {
  if (isType(action, fetchWeatherStart)) {
    return {
      ...state,
      error: null,
      isLoading: true,
    };
  }
  if (isType(action, fetchWeatherSuccess)) {
    return {
      ...state,
      cityName: action.payload.weatherData.place,
      current: action.payload.weatherData.current,
      forecast: action.payload.weatherData.forecast,
      isLoading: false,
    };
  }
  if (isType(action, fetchWeatherFailure)) {
    return {
      ...state,
      error: action.payload.error,
      isLoading: false,
    };
  }
  if (isType(action, changeLimit)) {
    return {
      ...state,
      limit: action.payload.limit,
    };
  }

  return state;
};

export default weather;
