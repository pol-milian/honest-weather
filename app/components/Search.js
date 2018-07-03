var React = require('react');
var PropTypes = require("prop-types");
var api = require('../utils/api');
var Link = require('react-router-dom').Link;
import { css } from 'emotion';

const wrapper = css`
  margin-right: 2rem;
`

const inputs = css`
  margin: 0 0.5rem;
  border-radius: 10px;
`




class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var value = event.target.value;

    this.setState(function () {
      return {
        city: value
      }
    });
  }

  handleSubmit() {

    this.props.onSubmit(
      this.state.city
    );



    this.setState(function () {
      return {
        city: ''
      }
    })
  }

  render() {
    var cityURI = encodeURI(this.state.city);
    return (
      <div className={wrapper}>
        <div>
          <label htmlFor='city'></label>
          {this.props.label}
          <input
            className={inputs}
            type="text"
            placeholder="City"
            value={this.state.city}
            onChange={this.handleChange}
          />

          <button
            className="button"
            type="button"
            onClick={this.handleSubmit}>
            Get forecast
          </button>



        </div>
      </div>
    )
  }
}





module.exports = Search;