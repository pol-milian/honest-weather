var React = require('react');
var Search = require('./Search');
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const Navbar = styled.div`
  background-color: red;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10%;
  padding: 0 1rem;
`;
const HeaderText = styled.h3`
  margin: 0.3rem;
  color: white;
  
`;




function Header(props) {
  return (
    <Navbar>
      <Link to="/">
        <HeaderText>Another React Weather App</ HeaderText>
      </ Link>
      <Search direction='row'
        onSubmit={function (city) {
          props.history.push({
            pathname: '/forecast',
            search: '?city=' + city
          });
        }} />
    </ Navbar>
  )
}



module.exports = Header;