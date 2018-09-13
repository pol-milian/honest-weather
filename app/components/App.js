import { injectGlobal } from "styled-components";

const React = require("react");
const ReactRouter = require("react-router-dom");

const BrowserRouter = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;

const Header = require("./Header");
const MainSearch = require("./MainSearch");
const Forecast = require("./Forecast");
const Detailed = require("./Detailed");

require.context("../images", true, /\.svg$/);

injectGlobal`
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
    color: #707070;
  }
  a {
    text-decoration: none;
  }
`;

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route render={Header} />
          <Route exact path="/" render={MainSearch} />
          <Route path="/forecast" component={Forecast} />

          <Route path="/detailed/:city" component={Detailed} />
        </div>
      </BrowserRouter>
    );
  }
}

module.exports = App;
