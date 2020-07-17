const toFahrenheit = (celsius: number): number => {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return Math.round(fahrenheit * 1e2) / 1e2;
};

export default toFahrenheit;
