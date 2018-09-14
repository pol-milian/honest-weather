import { Link } from "react-router-dom";
import styled from "styled-components";
import RainyUmbrella from "../images/rainy_optimized.gif";
import ErrorDonald from "../images/donald_optimized.gif";

const React = require("react");
const queryString = require("query-string");
const DayItem = require("./DayItem");

const api = require("../utils/api");

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
  margin: 5vh auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  text-align: center;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

const BigImage = styled.img`
  width: 70vw;
  border-radius: 50%;
`;

const ErrorText = styled.p`
  font-size: 3.5rem;
`;

const TryButton = styled.button`
  border-radius: 100px;
  padding: 2rem;
  border: none;
  font-size: 3.5rem;
  text-decoration: none;
  width: 400px;
  color: #fff;
  position: relative;
  display: block;
  background-color: #70c1b3;
`;

class Forecast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      forecastData: [],
      loading: true,
      error: null
    };
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
    this.setState(() => ({
      loading: true
    }));

    api
      .getForecast(city)
      .then(res => {
        this.setState(() => ({
          loading: false,
          forecastData: res,
          error: null
        }));
      })
      .catch(error => {
        this.setState(() => ({
          error: "City not found😢",
          loading: false
        }));
      });
  }

  handleClick(city) {
    this.props.history.push({
      pathname: `/detailed/${this.city}`,
      state: city
    });
  }

  render() {
    const error = this.state.error;
    if (this.state.loading === true) {
      return (
        <ImageWrapper>
          <BigImage src={RainyUmbrella} alt="Loading" />
        </ImageWrapper>
      );
    }

    if (error) {
      return (
        <ErrorContainer>
          <ErrorText>{error}</ErrorText>
          <BigImage src={ErrorDonald} alt="Error" />
          <ErrorText>
            Please make sure you typed a valid city. Would you like to try
            again?
          </ErrorText>
          <Link to="/">
            <TryButton>Try Again!</TryButton>
          </Link>
        </ErrorContainer>
      );
    }

    return (
      <ForecastWrapper>
        <CityName>{this.city.toUpperCase()}</CityName>
        <ForecastDays>
          {this.state.forecastData.list.map(function(listItem) {
            return (
              <DayItem
                onClick={this.handleClick.bind(this, listItem)}
                key={listItem.dt}
                day={listItem}
              />
            );
          }, this)}
        </ForecastDays>
      </ForecastWrapper>
    );
  }
}

module.exports = Forecast;
