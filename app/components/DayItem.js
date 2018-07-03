var React = require('react');
var utils = require('../utils/helpers');
var getDate = utils.getDate;

import { css } from 'emotion';


function DayItem(props) {
  var date = getDate(props.day.dt);
  var icon = props.day.weather[0].icon;
  return (
    <div onClick={props.onClick}>
      <img
        className={css`
          width: 10rem;
          height: auto;
        `}
        src={'../app/images/weather-icons/' + icon + '.svg'}
        alt="Weather"
      />
      <h2>{date}</h2>
    </div>
  )
}







module.exports = DayItem;