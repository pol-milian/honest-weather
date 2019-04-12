import { createGlobalStyle } from "styled-components";
import React from "react";
import { Router } from "@reach/router";
import Header from "./Header";
import Main from "./Main";
import Forecast from "./Forecast";
// import Footer from "./Footer";
import Detailed from "./Detailed";

require.context("../images", true, /\.svg$/);

const GlobalStyle = createGlobalStyle`
  :root {
    --black: #707070;
    --blue: #247ba0;
    --turquoise: #70c1b3;
    --generalMargin: 10vh auto;
    
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
    margin: 0;
    color: var(--black);
  }
  a {
    text-decoration: none;
  }
`;

const App = () => (
  <div>
    <GlobalStyle />
    <Header />
    <Router>
      <Main path="/" />
      <Forecast path="/forecast" />
      <Detailed path="/detailed/:city" />
    </Router>
    {/* <Footer /> */}
  </div>
);

export default App;
