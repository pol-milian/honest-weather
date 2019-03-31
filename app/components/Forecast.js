import React from "react";
import queryString from "query-string";
import { Link, navigate } from "@reach/router";
import styled from "styled-components";
import { Planet } from "react-kawaii";
import DayItem from "./DayItem";
import KawaiiAnimated from "./KawaiiAnimated";
import api from "../utils/api";

const ForecastWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CityName = styled.h1`
  text-align: center;
  display: block;
  font-size: 5rem;
`;

const ForecastDays = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: auto;
`;

const ErrorContainer = styled.div`
  margin: 10vh auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  text-align: center;
`;

const ImageWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
`;

const ErrorText = styled.p`
  font-size: 3rem;
`;

const ErrorHeader = styled.h1`
  font-size: 5rem;
  margin: 0;
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
          // FIXME: REMEMBER TO CHANGE TO 'FALSE' FOR PROD
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
    navigate(`/detailed/${this.city}`, { state: city });
  }

  render() {
    const { error, loading, forecastData } = this.state;
    if (loading === true) {
      return (
        <ImageWrapper>
          <KawaiiAnimated />
        </ImageWrapper>
      );
    }

    if (error) {
      return (
        <ErrorContainer>
          <ErrorHeader>{error}</ErrorHeader>
          <ImageWrapper>
            <Planet size={200} mood="sad" color="#FDA7DC" />
          </ImageWrapper>
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
          {forecastData.list.map(function(listItem) {
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

export default Forecast;
