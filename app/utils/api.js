var axios = require('axios');

// Endpoints
// current weather: http://api.openweathermap.org/data/2.5/weather?q= + city + &type=accurate&APPID= + apiKey
//  5 day forecast: http://api.openweathermap.org/data/2.5/forecast/daily?q= + city + &type=accurate&APPID= + apiKey + cnt=5

var _baseUrl = 'http://api.openweathermap.org/data/2.5/';
var _APIKEY = '95178118537bc15219a1ca0bc686f692';



function prepRouteParams(queryStringData) {
  return Object.keys(queryStringData)
    .map(function (key) {
      return key + '=' + encodeURIComponent(queryStringData[key]);
    }).join('&');
}

function prepUrl(type, queryStringData) {
  return _baseUrl + type + '?' + prepRouteParams(queryStringData);
}

function getQueryStringData(city) {
  return {
    q: city,
    type: 'accurate',
    APPID: _APIKEY,
    cnt: 5
  }
}

function getCurrentWeather(city) {
  var queryStringData = getQueryStringData(city);
  var url = prepUrl('weather', queryStringData)

  return axios.get(url)
    .then(function (currentWeatherData) {
      return currentWeatherData.data;
    })
}

function getForecast(city) {
  var queryStringData = getQueryStringData(city);
  var url = prepUrl('forecast', queryStringData)

  return axios.get(url)
    .then(function (forecastData) {
      return forecastData.data;
    })
}




module.exports = {
  getCurrentWeather: getCurrentWeather,
  getForecast: getForecast
}   
