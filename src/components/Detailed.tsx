import React from "react";
import styled from "styled-components";
import DayItem from "./DayItem";
import { convertTemp } from "../utils/helpers";
import honestText from "../utils/honestText";

const BackButton = styled.button`
  margin: auto;
  border-radius: 100px;
  padding: 2rem;
  border: none;
  font-size: 4rem;
  text-decoration: none;
  width: 400px;
  color: #fff;
  position: relative;
  display: block;
  background-color: var(--turquoise);
`;

const DayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  margin: var(--generalMargin);
`;

const InfoWrapper = styled.div`
  margin: 1vh 10vw;
`;

const WeatherReport = styled.p`
  font-size: 3rem;
`;

const MinTemp = styled.span`
  color: blue;
  font-weight: 700;
`;

const MaxTemp = styled.span`
  color: red;
  font-weight: 700;
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
      <BackButton onClick={() => window.history.back()}>Go Back</BackButton>
    </DayWrapper>
  )

}


export default Detailed;
