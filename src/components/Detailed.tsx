import React from "react";
import styled from "styled-components";
import DayItem from "./DayItem";
import { convertTemp } from "../utils/helpers";
import { SearchButton } from './Search'
import honestText from "../utils/honestText";

const BackButton = styled(SearchButton)`
`;

const DayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  margin: var(--generalMargin);
`;

const InfoWrapper = styled.div`
  margin-bottom: 20px;
`;

const WeatherReport = styled.p`
  text-align: left;
  
`;

const MinTemp = styled.span`
  color: blue;
  font-weight: 600;
`;

const MaxTemp = styled.span`
  color: red;
  font-weight: 600;
`;

interface DetailedProps {
  location: {
    state: {
      state: {
        temp: {
          min: string,
          max: string
        },
        dt: number,
        weather: {
          id: number,
          icon: string
        }[]
      }
    }
  }
}


const Detailed = ({ location: { state: { state } } }: DetailedProps) => {
  console.log(state)
  const { id } = state.weather[0]
  const minDeg = convertTemp(state.temp.min)
  const maxDeg = convertTemp(state.temp.max)
  return (
    <DayWrapper>
      <DayItem day={state} />
      <InfoWrapper>
        <WeatherReport>
          <strong>{honestText(id)}</strong> The lowest temperature is{" "}
          <MinTemp>{minDeg} C</MinTemp> and the maximum is{" "}
          <MaxTemp>{maxDeg} C</MaxTemp>.
          </WeatherReport>
      </InfoWrapper>
      <BackButton onClick={() => window.history.back()}>GO BACK</BackButton>
    </DayWrapper>
  )

}


export default Detailed;
