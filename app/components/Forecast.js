var React = require('react');
var DayItem = require('./DayItem')
import { Link } from 'react-router-dom';
var queryString = require('query-string');
var api = require('../utils/api');
import styled from 'styled-components';


const ForecastWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CityName = styled.h1`
  text-align: center;
  color: #338b90;
  display: block;
`;

const ForecastDays = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: auto;
`;

const ErrorContainer = styled.div`
  margin: 4rem auto;
  color: white;
  text-align: center;
`;



class Forecast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      forecastData: [],
      loading: true,
      error: null,
    }
    this.makeRequest = this.makeRequest.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  componentDidMount() {
    this.city = queryString.parse(this.props.location.search).city;
    this.makeRequest(this.city);
  }

  componentWillReceiveProps(nextProps) {
    this.city = queryString.parse(nextProps.location.search).city;
    this.makeRequest(this.city);
  }

  makeRequest(city) {
    this.setState(function () {
      return {
        loading: true
      }
    })

    api.getForecast(city)
      .then(function (res) {
        this.setState(function () {
          return {
            loading: false,
            forecastData: res,
            error: null,
          }
        })
      }.bind(this))
      .catch(function (error) {
        this.setState(function () {
          return {
            error: 'An error has occurred. Please check that the location you wrote is correct.',
            loading: false,
          }
        })
      }.bind(this));

  }

  handleClick(city) {
    this.props.history.push({
      pathname: '/detailed/' + this.city,
      state: city,
    })
  }



  render() {
    var error = this.state.error;
    if (this.state.loading === true) {
      return (<h1>Loading</h1>)
    }

    if (error) {
      return (
        <ErrorContainer>
          <p>{error}</p>
          <Link to="/">Try searching for another city </ Link>

        </ ErrorContainer>
      )
    }

    return (
      <ForecastWrapper>
        <CityName>{(this.city).toUpperCase()}</ CityName>
        <ForecastDays>
          {this.state.forecastData.list.map(function (listItem) {
            return <DayItem onClick={this.handleClick.bind(this, listItem)} key={listItem.dt} day={listItem} />
          }, this)}
        </ ForecastDays>
      </ ForecastWrapper>
    )
  }
}

module.exports = Forecast;
