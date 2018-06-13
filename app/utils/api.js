var axios = require('axios');

var apiKey = '95178118537bc15219a1ca0bc686f692';

// Endpoints
// current weather: http://api.openweathermap.org/data/2.5/weather?q= + city + &type=accurate&APPID= + apiKey
//  5 day forecast: http://api.openweathermap.org/data/2.5/forecast/daily?q= + city + &type=accurate&APPID= + apiKey + cnt=5

function getWeather(city) {
  return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '& type=accurate&APPID=' + apiKey)
    .then(function (city) {
      return city.data;
    });
}

