var React = require('react');
var PropTypes = require("prop-types");
var api = require('../utils/api');
var Link = require('react-router-dom').Link;
import { css } from 'emotion';
import styled from 'react-emotion';

const Wrapper = styled('div')`
  margin-right: 2rem;
`

const inputs = css`
  margin: 0 0.5rem;
  display: block;
  padding: 0.3rem 0.25em;
  border: none;
  border-radius: 0.2em;
  font-size: 1.5em;
  text-align: center;
  box-shadow: 0 0 1em 0.25em rgba(0,0,0,0.2);
`
const searchButton = css` {
  border-radius: 5px;
  padding: 15px 25px;
  font-size: 22px;
  text-decoration: none;
  margin: 1rem auto;
  color: #fff;
  position: relative;
  display: block;
  background-color: #55acee;

  &:active {
    transform: translate(0px, 5px);
    -webkit-transform: translate(0px, 5px);
    box-shadow: 0px 1px 0px 0px;
  }
  &:hover {
  background-color: #6FC6FF;
  }
}
`




class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var value = event.target.value;

    this.setState(function () {
      return {
        city: value
      }
    });
  }



  handleSubmit() {

    this.props.onSubmit(
      this.state.city
    );



    this.setState(function () {
      return {
        city: ''
      }
    })
  }

  render() {
    var cityURI = encodeURI(this.state.city);
    return (
      <Wrapper>
        <label htmlFor='city'></label>
        {this.props.label}
        <input
          className={inputs}
          type="text"
          placeholder="City"
          value={this.state.city}
          onChange={this.handleChange}
          required
        />

        <button
          className={searchButton}
          type="button"
          onClick={this.handleSubmit}>
          Get forecast
          </button>




      </ Wrapper>
    )
  }
}





module.exports = Search;