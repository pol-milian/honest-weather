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
    <div>
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
  }


  componentDidMount() {
    this.city = queryString.parse(this.props.location.search).city;

    api.getForecast(this.city)
      .then(function (res) {

        this.setState(function () {
          return {
            loading: false,
            forecastData: res
          }

        });


      }.bind(this));

  }

  handleClick() {

  }

  render() {
    return this.state.loading === true
      ? <h1>Loading</h1>
      : <div>
        <h1>{this.city}</h1>
        <div>
          {this.state.forecastData.list.map(function (listItem) {
            return <DayItem key={listItem.dt} day={listItem} onClick={this.handleClick} />
          })}
        </div>
      </div>






  }
}

module.exports = Forecast;