import React, { useState, useEffect } from "react";
import queryString from "query-string";
import { SearchButton } from './Search';
import { RouteComponentProps, Link } from "react-router-dom";
import styled from "styled-components";
import DayItem from "./DayItem";
import { getForecast } from "../utils/api";

const LoaderWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

const Hourglass = styled.div`
display: inline-block;
position: relative;
width: 64px;
height: 64px;
&:after {
  content: " ";
  display: block;
  border-radius: 50%;
  width: 0;
  height: 0;
  margin: 6px;
  box-sizing: border-box;
  border: 26px solid var(--turquoise);
  border-color: var(--turquoise) transparent var(--turquoise) transparent;
  animation: lds-hourglass 1.2s infinite;
}
@keyframes lds-hourglass {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
}
`

const ForecastWrapper = styled.main`
  display: flex;
  flex-direction: column;
`;

const CityName = styled.h1`
  text-align: center;
  letter-spacing: .05em;
  display: block;
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
`;

const ErrorHeader = styled.h1`
  margin: 0;
`;

const TryButton = styled(SearchButton)`
  margin-top: 20px;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
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
      <LoaderWrapper>
        <Hourglass />
      </LoaderWrapper>
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
          <TryButton>TRY AGAIN!</TryButton>
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