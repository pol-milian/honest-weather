import axios from "axios";

interface GetQueryStringDataInterface {
  [key: string]: string
}

const baseURL =
  "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/";
// const APIKEY = "95178118537bc15219a1ca0bc686f692";
const APIKEY = "b714ec74bbab5650795063cb0fdf5fbe";

function prepRouteParams(queryStringData: GetQueryStringDataInterface) {
  // console.log(queryStringData);
  return Object.keys(queryStringData)
    .map(key => `${key}=${encodeURIComponent(queryStringData[key])}`)
    .join("&");
}

function prepUrl(type: string, queryStringData: GetQueryStringDataInterface) {
  return `${baseURL + type}?${prepRouteParams(queryStringData)}`;
}

function getQueryStringData(city: string): GetQueryStringDataInterface {
  return {
    q: city,
    type: "accurate",
    APPID: APIKEY,
    cnt: "5"
  };
}


export async function getForecast(city: string) {
  const queryStringData = getQueryStringData(city);
  const url = prepUrl("forecast/daily", queryStringData);

  const forecastData = await axios.get(url);
  return forecastData.data;
}
