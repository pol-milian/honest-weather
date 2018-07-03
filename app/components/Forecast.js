var React = require('react');
var queryString = require('query-string');
var api = require('../utils/api');
var utils = require('../utils/helpers');
var getDate = utils.getDate;
var convertTemp = utils.convertTemp;
import { css } from 'emotion';


function DayItem(props) {
  var date = getDate(props.day.dt);
  var icon = props.day.weather[0].icon;
  return (
    <div onClick={props.onClick}>
      <img src={'./app/images/weather-icons/' + icon + '.svg'} alt="Weather" />
      <h2>{date}</h2>
    </div>
  )
}




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
        <h1>{this.city}</h1>
        <div>
          {this.state.forecastData.list.map(function (listItem) {
            return <DayItem onClick={this.handleClick.bind(this, listItem)} key={listItem.dt} day={listItem} />
          }, this)}
        </div>
      </div>
  }
}

module.exports = Forecast;