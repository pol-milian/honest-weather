import React from "react";

import styled from "styled-components";

import { getDate } from "../utils/helpers";

const DayContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 1rem;
`;

const WeatherIcon = styled.img`
  width: 300px;
  height: auto;
`;
const Date = styled.h2`
  font-size: 3rem;
  font-weight: 500;
`;

function DayItem(props) {
  const date = getDate(props.day.dt);
  const { icon } = props.day.weather[0];
  return (
    <DayContainer onClick={props.onClick}>
      <WeatherIcon src={`/images/${icon}.svg`} alt="Weather" />
      <Date>{date}</Date>
    </DayContainer>
  );
}

module.exports = DayItem;
