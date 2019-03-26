import { injectGlobal } from "styled-components";

import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import MainSearch from "./Main";
import Forecast from "./Forecast";
import Detailed from "./Detailed";

require.context("../images", true, /\.svg$/);

injectGlobal`
  :root {
    --black: #707070;
    --blue: #247ba0;
    --turquoise: #70c1b3;
    
  }
  * {
    box-sizing: border-box;
  }
  html {
    width: 100%;
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
      "Helvetica Neue", Arial, sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 1.2rem;  
    
  }
  body {
    position: relative;
    margin: 0;
    color: var(--black);
  }
  a {
    text-decoration: none;
  }
`;

const App = () => (
  <BrowserRouter>
    <div>
      <Route render={Header} />
      <Route exact path="/" render={MainSearch} />
      <Route path="/forecast" component={Forecast} />
      <Route path="/detailed/:city" component={Detailed} />
    </div>
  </BrowserRouter>
);

module.exports = App;
