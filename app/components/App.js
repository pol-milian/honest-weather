var React = require('react');
var ReactRouter = require("react-router-dom");
var BrowserRouter = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

var Header = require('./Header');
var MainSearch = require('./MainSearch');
var Forecast = require('./Forecast');
var Detailed = require('./Detailed');


import { injectGlobal } from 'emotion';


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
  }


`




class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route render={Header} />
          <Route exact path='/' render={MainSearch} />
          <Route path='/forecast' component={Forecast} />

          <Route path='/detailed/:city' component={Detailed} />
        </div>
      </BrowserRouter>



    )
  }
}




module.exports = App;