var React = require('react');
var Search = require('./Search');
import { Link } from 'react-router-dom';
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
      <Link className={css`text-decoration: none;`} to="/"><h2 className={navHeader}>Another React Weather App</h2> </ Link>
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