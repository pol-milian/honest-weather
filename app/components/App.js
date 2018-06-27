var React = require('react');
var ReactRouter = require("react-router-dom");
var Router = ReactRouter.BrowserRouter;
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
  }
  body {
    position: relative;
  }


`




class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={MainSearch} />
            <Route exact path='/forecast:params' component={Forecast} />
            <Route exact path='/detail/:somecity' component={Detailed} />
            <Route render={function () {
              return <p>not found</p>
            }} />

          </Switch>
        </div>
      </Router>


      // <div>
      //   <Header />
      //   <MainSearch />
      // </div>
    )
  }
}




module.exports = App;