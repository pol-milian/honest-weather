var React = require('react');
var DayItem = require('./DayItem')
var queryString = require('query-string');
var api = require('../utils/api');
var utils = require('../utils/helpers');
var convertTemp = utils.convertTemp;
import { css } from 'emotion';





DayItem.a

class Forecast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      forecastData: [],
      loading: true
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
            forecastData: res
          }
        });
      }.bind(this));
  }

  handleClick(city) {
    this.props.history.push({
      pathname: '/detailed/' + this.city,
      state: city,
    })
  }



  render() {
    return this.state.loading === true
      ? <h1>Loading</h1>
      : <div>
        <h1>{(this.city).toUpperCase()}</h1>
        <div>
          {this.state.forecastData.list.map(function (listItem) {
            return <DayItem onClick={this.handleClick.bind(this, listItem)} key={listItem.dt} day={listItem} />
          }, this)}
        </div>
      </div>
  }
}

module.exports = Forecast;
