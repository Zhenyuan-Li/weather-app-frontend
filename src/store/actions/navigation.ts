import actionCreatorFactory from 'typescript-fsa';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import * as actionTypes from './actionTypes';
import getWeatherFor from '../../utils/axios';
import {
  fetchWeatherStart,
  fetchWeatherFailure,
  fetchWeatherSuccess,
} from './weather';

type navigationState = {
  readonly search: string;
  readonly unit: 'c' | 'f';
};

const actionCreator = actionCreatorFactory();

export const setSearchValue = actionCreator<{ value: string }>(
  actionTypes.SET_SEARCH_VALUE
);

export const toggleUnit = actionCreator<void>(actionTypes.TOGGLE_UNIT);

export const fetchWeather = (
  city: string
): ThunkAction<void, navigationState, unknown, Action<string>> => async (
  dispatch
) => {
  dispatch(fetchWeatherStart());
  return getWeatherFor(city)
    .then((data) => {
      const weatherData = data.data;
      dispatch(fetchWeatherSuccess({ weatherData }));
    })
    .catch((error) => dispatch(fetchWeatherFailure({ error })));
};
