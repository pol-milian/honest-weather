import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route } from "react-router-dom";
import styledNormalize from 'styled-normalize'
// import { } from 'styled-components/cssprop'
import * as types from 'styled-components/cssprop'
import Main from './Main'
import Forecast from './Forecast'
import Detailed from './Detailed'
import Header from './Header'


const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a {
    text-decoration: none;
  }
`


const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Router>
        <Route path="/" exact component={Main} />
        <Route path="/forecast" component={Forecast} />
        <Route path="/detailed/:city" component={Detailed} />
      </Router>
    </>
  );
}

export default App;
