var React = require('react');
var Search = require('./Search');
import { css } from 'emotion';



const nav = css`
  background-color: red;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10%;
`
const navHeader = css`
  margin: 0.3rem;
  color: white;
  
`



function Header(props) {
  return (
    <div className={nav}>
      <h2 className={navHeader}>Pol's React Weather App</h2>
      <Search
        onSubmit={function (city) {
          props.history.push({
            pathname: '/forecast',
            search: '?city=' + city
          });
        }} />
    </div>
  )
}



module.exports = Header;