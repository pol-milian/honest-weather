var React = require('react');
var utils = require('../utils/helpers');
var getDate = utils.getDate;
import styled from 'styled-components';


const DayContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 1rem;
`;

const WeatherIcon = styled.img`
  width: 5rem;
  height: auto;
`;
const Date = styled.h2`
  color: #338b90;
  
`;



function DayItem(props) {
  var date = getDate(props.day.dt);
  var icon = props.day.weather[0].icon;
  return (
    <DayContainer onClick={props.onClick}>
      <WeatherIcon
        src={'./app/images/weather-icons/' + icon + '.svg'}
        alt="Weather"
      />
      <Date>{date}</ Date>
    </ DayContainer>
  )
}







module.exports = DayItem;