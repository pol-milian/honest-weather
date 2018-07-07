var React = require('react');
var utils = require('../utils/helpers');
var getDate = utils.getDate;

import { css } from 'emotion';

const dayContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 1rem;
`




function DayItem(props) {
  var date = getDate(props.day.dt);
  var icon = props.day.weather[0].icon;
  return (
    <div className={dayContainer} onClick={props.onClick}>
      <img
        className={css`
          width: 5rem;
          height: auto;
        `}
        src={'../app/images/weather-icons/' + icon + '.svg'}
        alt="Weather"
      />
      <h2 className={css`color: #338b90;`}>{date}</h2>
    </div>
  )
}







module.exports = DayItem;