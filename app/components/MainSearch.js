var React = require('react');
var Search = require('./Search');
import { css } from 'emotion';

const wrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20vh;
`


function MainSearch(props) {

  return (
    <div className={wrapper}>
      <h1 className={css`
        color: white;
        @media (max-width: 348px) {
          font-size: 1.1em;
        }`}>Please enter a city:
      </h1>
      <Search
        onSubmit={function (city) {
          props.history.push({
            pathname: 'forecast',
            search: '?city=' + city
          });
        }} />
    </div>
  )
}





module.exports = MainSearch;