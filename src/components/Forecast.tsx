import React, { useState, useEffect } from "react";
import queryString from "query-string";
import { RouteComponentProps, Link } from "react-router-dom";
import styled from "styled-components";
import DayItem from "./DayItem";
import { getForecast } from "../utils/api";

const ForecastWrapper = styled.main`
  display: flex;
  flex-direction: column;
`;

const CityName = styled.h1`
  text-align: center;
  display: block;
  font-size: 5rem;
`;

const ForecastDays = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: auto;
`;

const ErrorContainer = styled.div`
  margin: var(--generalMargin);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  text-align: center;
`;

const ImageWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
`;

const ErrorText = styled.p`
  font-size: 3rem;
`;

const ErrorHeader = styled.h1`
  font-size: 5rem;
  margin: 0;
`;

const TryButton = styled.button`
  border-radius: 100px;
  padding: 2rem;
  border: none;
  font-size: 3.5rem;
  text-decoration: none;
  width: 400px;
  color: #fff;
  position: relative;
  display: block;
  background-color: #70c1b3;
`;

// interface ForecastData {
//   list: {
//     [key: string]: string | number | object,
//     dt: number
//   }[]
// }

interface ForecastData {
  list: {
    dt: number,
    weather: {
      icon: string
    }[]
  }[],
}

interface ListItemProps {
  day: {
    dt: number,
    weather: {
      icon: string
    }[]
  },
}


const Forecast = ({ history, location }: RouteComponentProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [forecastData, setForecastData] = React.useState<ForecastData | null>(null);
  const [city, setCity] = React.useState('')

  useEffect(() => {
    const queriedString = queryString.parse(location.search).city
    const city = queriedString!.toString()
    setCity(city)
    makeRequest(city)
  }, [location.search])

  const handleClick = (city: any) => {
    console.log(city)
    history.push(`/detailed/${city}`, { state: city });
  }
  const makeRequest = (city: string) => {
    setIsLoading(true)

    getForecast(city)
      .then(res => {
        setIsLoading(false)
        setForecastData(res)
        setError(null)
      })
      .catch(error => {
        setError("City not found")
        setIsLoading(false)
      });
  }
    if (isLoading) {
      return (
        <ImageWrapper
          css="
            height: 80vh;
          "
        >
          <h1>Loading</h1>
        </ImageWrapper>
      );
    }

    if (error) {
      return (
        <ErrorContainer>
          <ErrorHeader>{error}</ErrorHeader>
          <ImageWrapper>
            <h1>Error</h1>
          </ImageWrapper>
          <ErrorText>
            Do yourself a favor and{" "}
            <strong>stop eating chips while typing.</strong> Wash your hands and
            try again?
          </ErrorText>
          <Link to="/">
            <TryButton>Try Again!</TryButton>
          </Link>
        </ErrorContainer>
      );
    }

    return (
      <ForecastWrapper>
        <CityName>{city.toUpperCase()}</CityName>
        <ForecastDays>
          {forecastData && forecastData.list.map((listItem: ListItemProps["day"]) => {
            return (
              <DayItem
                onClick={() => handleClick(listItem)}
                key={listItem.dt}
                day={listItem}
              />
            );
          })}
        </ForecastDays>
      </ForecastWrapper>
    );
}


export default Forecast;