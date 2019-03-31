import { Link, navigate } from "@reach/router";
import React from "react";
import styled from "styled-components";
import Search from "./Search";

const Wrapper = styled.div`
  margin: 10vh auto;
`;

const CityPrompt = styled.p`
  text-align: center;
  font-size: 3.5rem;
  margin-bottom: 102px;
`;

function Main(props) {
  return (
    <Wrapper>
      <CityPrompt>What is the weather like in...</CityPrompt>
      <Search
        onSubmit={function(city) {
          navigate(`/forecast?city=${city}`);
        }}
      />
    </Wrapper>
  );
}
export default Main;
