import axios, { AxiosPromise } from 'axios';
import { Weather } from '../models/weather';

const getWeatherFor = (city: string): AxiosPromise<Weather> => {
  if (city === '') {
    return axios(
      `https://vincent-weather-api.herokuapp.com/weather?location=brisbane`
    ).then((res) => res.data);
  }
  return axios(
    `https://vincent-weather-api.herokuapp.com/weather?location=${city}`
  ).then((res) => res.data);
};

export default getWeatherFor;
