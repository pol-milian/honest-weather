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
      <h1>Please enter a city:</h1>
      <Search />
    </div>
  )
}





module.exports = MainSearch;