var React = require('react');
var DayItem = require('./DayItem')
var queryString = require('query-string');
var api = require('../utils/api');
var utils = require('../utils/helpers');
var convertTemp = utils.convertTemp;
import { css } from 'emotion';






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
        <div>
          <p>{error}</p>

        </div>
      )
    }

    return (
      <div>
        <h1>{(this.city).toUpperCase()}</h1>
        <div>
          {this.state.forecastData.list.map(function (listItem) {
            return <DayItem onClick={this.handleClick.bind(this, listItem)} key={listItem.dt} day={listItem} />
          }, this)}
        </div>
      </div>
    )
  }
}

module.exports = Forecast;
