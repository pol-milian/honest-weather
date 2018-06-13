var React = require('react');
var Header = require('./Header');
var MainSearch = require('./MainSearch');

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
      <div>
        <Header />
        <MainSearch />
      </div>
    )
  }
}




module.exports = App;