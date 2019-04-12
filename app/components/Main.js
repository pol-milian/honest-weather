import { Link, navigate } from "@reach/router";
import React from "react";
import styled from "styled-components";
import Search from "./Search";

const CityPrompt = styled.p`
  text-align: center;
  font-size: 3.5rem;
  margin-bottom: 102px;
`;

const MainWrapper = styled.main`
  margin: 10vh auto;
`;
function Main(props) {
  return (
    <MainWrapper>
      <CityPrompt>What is the weather like in...</CityPrompt>
      <Search
        onSubmit={function(city) {
          navigate(`/forecast?city=${city}`);
        }}
      />
    </MainWrapper>
  );
}
export default Main;
