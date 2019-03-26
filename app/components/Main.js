import styled from "styled-components";

const React = require("react");
const Search = require("./Search");

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
      <CityPrompt>What's the weather like in...</CityPrompt>
      <Search
        onSubmit={function(city) {
          props.history.push({
            pathname: "forecast",
            search: `?city=${city}`
          });
        }}
      />
    </Wrapper>
  );
}
export default Main;
