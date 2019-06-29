import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import styledNormalize from 'styled-normalize'
// import { } from 'styled-components/cssprop'
import * as types from 'styled-components/cssprop'
import Main from './Main'
import Forecast from './Forecast'
import Detailed from './Detailed'
import Header from './Header'


const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  @import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
  :root {
    --black: #707070;
    --blue: #247ba0;
    --turquoise: #70c1b3;
    --generalMargin: 10vh auto;
    
  }
  * {
    box-sizing: border-box;
  }
  body {
    max-width: 38rem;
    padding: 2rem;
    margin: 0 auto;
    color: var(--black);
    font-size: 20px;
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h1 {
    font-size: 48px;
    font-weight: 400;
  }
  h2 {
    font-size: 36px;
  }
  p {
    line-height: 1.3;
  }
  a {
    text-decoration: none;
  }
`

export const LocationDisplay = withRouter(({ location }) => (
  <div data-testid="location-display">{location.pathname}</div>
));

const NoMatch = () => <div>No match</div>



const App = () => {
  return (
    <div>
      <GlobalStyle />
      {/* <Header /> */}
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/forecast" component={Forecast} />
          <Route path="/detailed/:city" component={Detailed} />
          <Route component={NoMatch} />
          
        </Switch>
        <LocationDisplay />
    </div>
  );
}

export default App;
