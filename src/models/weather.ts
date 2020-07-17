export interface CurrentWeather {
  temp: string;
  humidity: string;
  windSpeed: string;
  windDirection: string;
}

export interface FutureWeather {
  maxTemp: string;
  minTemp: string;
  date: string;
}

export interface Weather {
  current: CurrentWeather;
  forecast: Array<FutureWeather>;
  place: string;
}
