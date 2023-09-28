const convertToCelsius = function(temperature) {
  celsius = 5/9 * (temperature - 32)
  return roundedCelsius = Math.round(celsius * 10) / 10

};

const convertToFahrenheit = function(temperature) {
  fahrenheit = (temperature * 9/5) + 32
  return roundedFahrenheit = Math.round(fahrenheit * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
