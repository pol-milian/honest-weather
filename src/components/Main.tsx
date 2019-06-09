import { RouteComponentProps } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import Search from "./Search";

const CityPrompt = styled.p`
  text-align: center;
  font-size: 3.5rem;
`;

const MainWrapper = styled.main`
  margin: 0;
`;


function Main({ history }: RouteComponentProps) {
  const handleSubmit = (city: string) => {
    history.push(`/forecast?city=${city}`)
  }
  return (
    <MainWrapper>
      <CityPrompt>What is the weather like in...</CityPrompt>
      <Search
        onSubmit={handleSubmit}
      />
    </MainWrapper>
  );
}
export default Main;