import styled from "styled-components";

const ReactRouter = require("react-router-dom");

const Link = ReactRouter.Link;

const React = require("react");
const DayItem = require("./DayItem");
const convertTemp = require("../utils/helpers").convertTemp;

const BackButton = styled.button`
  margin: auto;
  border-radius: 100px;
  padding: 2rem;
  border: none;
  font-size: 4rem;
  text-decoration: none;
  width: 400px;
  color: #fff;
  position: relative;
  display: block;
  background-color: var(--turquoise);
`;

const DayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  margin-top: 4rem;
`;

const InfoWrapper = styled.div`
  margin: 1vh 10vw;
`;

const WeatherReport = styled.p`
  font-size: 3rem;
`;

const MinTemp = styled.span`
  color: blue;
  font-weight: 700;
`;

const MaxTemp = styled.span`
  color: red;
  font-weight: 700;
`;

class Detailed extends React.Component {
  render() {
    const props = this.props.location.state;
    const generalForecast = props.weather[0].description;
    const minDeg = convertTemp(props.temp.min);
    const maxDeg = convertTemp(props.temp.max);
    return (
      <DayWrapper>
        <DayItem day={props} />
        <InfoWrapper>
          <WeatherReport>
            <strong>{generalForecast}</strong> for today. The lowest temperature
            is <MinTemp>{minDeg} C</MinTemp> and the maximum is{" "}
            <MaxTemp>{maxDeg} C</MaxTemp>.
          </WeatherReport>
        </InfoWrapper>
        <BackButton onClick={() => this.props.history.goBack()}>
          Go Back
        </BackButton>
      </DayWrapper>
    );
  }
}

module.exports = Detailed;
