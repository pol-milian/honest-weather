var React = require('react');
var Search = require('./Search');
import styled from 'styled-components';



const Wrapper = styled.div`
  margin-top: 20vh;
`;

const CityPrompt = styled.h1`
  text-align: center;
  color: white;
  @media (max-width: 348px) {
          font-size: 1.1em;
        }

`;

function MainSearch(props) {

  return (
    <Wrapper>
      <CityPrompt>Please enter a city:
      </ CityPrompt>
      <Search
        onSubmit={function (city) {
          props.history.push({
            pathname: 'forecast',
            search: '?city=' + city
          });
        }} />
    </ Wrapper>
  )
}





module.exports = MainSearch;