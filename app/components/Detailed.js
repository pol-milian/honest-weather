var React = require('react');
var DayItem = require('./DayItem');
var convertTemp = require('../utils/helpers').convertTemp;
import styled from 'styled-components';


const DayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  margin-top: 4rem;
`;

const InfoWrapper = styled.div`
  color: white;
`;






class Detailed extends React.Component {
  render() {
    var props = this.props.location.state;
    return (
      <DayWrapper>
        <DayItem day={props} />
        <InfoWrapper>
          <p>{props.city}</p>
          <p>{props.weather[0].description}</p>
          <p>min temp: {convertTemp(props.temp.min)} degrees C</p>
          <p>max temp: {convertTemp(props.temp.max)} degrees C</p>
        </ InfoWrapper>
      </ DayWrapper>
    )
  }
}












module.exports = Detailed;