var React = require('react');
var PropTypes = require("prop-types");

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

  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(
      this.props.id,
      this.state.city
    );
  }

  render() {
    return (
      <div className={wrapper}>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='city'></label>
          {this.props.label}
          <input
            className={inputs}
            type="text"
            id="city"
            placeholder="City"
            value={this.state.city}
            onChange={this.handleChange}
          />
          <button
            className='button'
            type='submit'
            disabled={!this.state.city}>
            Submit
          </button>
        </form>
      </div>
    )
  }
}





module.exports = Search;