import React from "react";

import styled from "styled-components";

import { getDate } from "../utils/helpers";

const DayContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

const WeatherIcon = styled.img`
  width: 50%;
`;
const Date = styled.h2`
  font-weight: 500;
`;


export interface DayItemProps {
  day: {
    dt: number,
    weather: {
      icon: string
    }[],
  },
  onClick?(event: any): void;
}

function DayItem(props: DayItemProps) {
  const date = getDate(props.day.dt);
  const { icon } = props.day.weather[0];
  return (
    <DayContainer onClick={props.onClick}>
      <WeatherIcon src={process.env.PUBLIC_URL + `/weather-icons/${icon}.svg`} alt="Weather" />
      <Date>{date}</Date>
    </DayContainer>
  );
}

export default DayItem;
