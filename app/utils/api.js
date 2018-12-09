const axios = require("axios");

// Endpoints
// current weather: http://api.openweathermap.org/data/2.5/weather?q= + city + &type=accurate&APPID= + apiKey
//  5 day forecast: http://api.openweathermap.org/data/2.5/forecast/daily?q= + city + &type=accurate&APPID= + apiKey + cnt=5

const baseURL =
  "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/";
const APIKEY = "95178118537bc15219a1ca0bc686f692";
// const APIKEY = "b714ec74bbab5650795063cb0fdf5fbe";

function prepRouteParams(queryStringData) {
  return Object.keys(queryStringData)
    .map(key => `${key}=${encodeURIComponent(queryStringData[key])}`)
    .join("&");
}

function prepUrl(type, queryStringData) {
  return `${baseURL + type}?${prepRouteParams(queryStringData)}`;
}

function getQueryStringData(city) {
  return {
    q: city,
    type: "accurate",
    APPID: APIKEY,
    cnt: 5
  };
}

function getCurrentWeather(city) {
  const queryStringData = getQueryStringData(city);
  const url = prepUrl("weather", queryStringData);

  return axios.get(url).then(currentWeatherData => currentWeatherData.data);
}

function getForecast(city) {
  const queryStringData = getQueryStringData(city);
  const url = prepUrl("forecast/daily", queryStringData);

  return axios.get(url).then(forecastData => forecastData.data);
}

module.exports = {
  getCurrentWeather,
  getForecast
};
