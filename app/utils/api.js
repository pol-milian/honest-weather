let axios = require("axios");

// Endpoints
// current weather: http://api.openweathermap.org/data/2.5/weather?q= + city + &type=accurate&APPID= + apiKey
//  5 day forecast: http://api.openweathermap.org/data/2.5/forecast/daily?q= + city + &type=accurate&APPID= + apiKey + cnt=5

let _baseURL =
  "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/";
// var _APIKEY = '95178118537bc15219a1ca0bc686f692';
let _APIKEY = "b714ec74bbab5650795063cb0fdf5fbe";

function prepRouteParams(queryStringData) {
  return Object.keys(queryStringData)
    .map((key) => {
      return key + '=' + encodeURIComponent(queryStringData[key]);
    })
    .join("&");
}

function prepUrl(type, queryStringData) {
  return `${_baseURL + type  }?${  prepRouteParams(queryStringData)}`;
}

function getQueryStringData(city) {
  return {
    q: city,
    type: "accurate",
    APPID: _APIKEY,
    cnt: 5
  };
}

function getCurrentWeather(city) {
  let queryStringData = getQueryStringData(city);
  let url = prepUrl("weather", queryStringData);

  return axios.get(url).then(function(currentWeatherData) {
    return currentWeatherData.data;
  });
}

function getForecast(city) {
  let queryStringData = getQueryStringData(city);
  let url = prepUrl("forecast/daily", queryStringData);

  return axios.get(url).then(function(forecastData) {
    return forecastData.data;
  });
}

module.exports = {
  getCurrentWeather,
  getForecast
};
