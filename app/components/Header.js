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
  margin: 1rem;
  color: white;
  font-size: 2rem;
`



function Header(props) {
  return (
    <div className={nav}>
      <h1 className={navHeader}>Hello</h1>
      <Search />
    </div>
  )
}



module.exports = Header;