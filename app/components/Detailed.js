var React = require('react');
var DayItem = require('./DayItem');
var convertTemp = require('../utils/helpers').convertTemp;

import { css } from 'emotion'





class Detailed extends React.Component {
  render() {
    var props = this.props.location.state;
    return (
      <div className={css`
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: center;
        margin-top: 4rem;
      `}>
        <DayItem day={props} />
        <div>
          <p>{props.city}</p>
          <p>{props.weather[0].description}</p>
          <p>min temp: {convertTemp(props.temp.min)} degrees C</p>
          <p>max temp: {convertTemp(props.temp.max)} degrees C</p>
        </div>
      </div>
    )
  }
}












module.exports = Detailed;