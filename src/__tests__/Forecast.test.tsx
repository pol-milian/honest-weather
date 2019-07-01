import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, cleanup, fireEvent, wait, waitForElement } from '@testing-library/react';
import Forecast from '../components/Forecast';
import axios from 'axios';

afterEach(cleanup);

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;


function renderWithRouter(
  ui: React.ReactChild,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  }
}




test('<Forecast /> displays a loader and loads with a valid city', async () => {
  const goodResponse = {
    data: {
      "city": {
        "id": 2643743,
        "name": "London",
        "coord": {
          "lon": -0.1277,
          "lat": 51.5073
        },
        "country": "GB",
        "population": 1000000,
        "timezone": 3600
      },
      "cod": "200",
      "message": 1.6082489,
      "cnt": 5,
      "list": [
        {
          "dt": 1561896000,
          "temp": {
            "day": 294,
            "min": 287.4,
            "max": 294,
            "night": 287.4,
            "eve": 294,
            "morn": 294
          },
          "pressure": 1016.5,
          "humidity": 63,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "sky is clear",
              "icon": "01d"
            }
          ],
          "speed": 4.62,
          "deg": 271,
          "clouds": 0
        },
        {
          "dt": 1561982400,
          "temp": {
            "day": 291.99,
            "min": 285.4,
            "max": 292.54,
            "night": 285.4,
            "eve": 291.6,
            "morn": 287.09
          },
          "pressure": 1020.07,
          "humidity": 59,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "sky is clear",
              "icon": "01d"
            }
          ],
          "speed": 5.93,
          "deg": 298,
          "clouds": 2
        },
        {
          "dt": 1562068800,
          "temp": {
            "day": 293.11,
            "min": 285.34,
            "max": 293.51,
            "night": 287.08,
            "eve": 291.84,
            "morn": 285.34
          },
          "pressure": 1026.05,
          "humidity": 46,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "sky is clear",
              "icon": "01d"
            }
          ],
          "speed": 2.96,
          "deg": 353,
          "clouds": 0
        },
        {
          "dt": 1562155200,
          "temp": {
            "day": 294.1,
            "min": 286.3,
            "max": 295.08,
            "night": 288.5,
            "eve": 293.4,
            "morn": 286.3
          },
          "pressure": 1026.79,
          "humidity": 47,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "sky is clear",
              "icon": "01d"
            }
          ],
          "speed": 2.56,
          "deg": 343,
          "clouds": 0
        },
        {
          "dt": 1562241600,
          "temp": {
            "day": 296.88,
            "min": 288.2,
            "max": 296.88,
            "night": 289.81,
            "eve": 294.92,
            "morn": 288.2
          },
          "pressure": 1025.43,
          "humidity": 38,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "sky is clear",
              "icon": "01d"
            }
          ],
          "speed": 1.28,
          "deg": 313,
          "clouds": 9
        }
      ]
    }
  };
  mockedAxios.get.mockResolvedValueOnce(goodResponse as any);
  const route = '/forecast?city=london'
  const goodLocation = {
    search: '?city=london',
  };
  const { getByTestId, debug, queryAllByTestId } = renderWithRouter(<Forecast location={goodLocation} />, { route })
  

  expect(getByTestId('loader')).toBeTruthy();
  await wait(() => {
    expect(getByTestId('city-name')).toBeTruthy();
    expect(queryAllByTestId('day-item')).toBeTruthy();
  })
  expect(mockedAxios.get).toHaveBeenCalledTimes(1)
})

test('<Forecast /> displays an error', async () => {
  mockedAxios.get.mockRejectedValue('Network error: Something went wrong');
  const route = '/forecast?city=xxx'
  const Errorlocation = {
    search: '?city=xxx',
  };
  const { getByTestId, debug } = renderWithRouter(<Forecast location={Errorlocation} />, { route })
  await wait(() => {
    expect(mockedAxios.get).toHaveBeenCalledTimes(2)
    expect(getByTestId('error')).toBeTruthy();
  })
})