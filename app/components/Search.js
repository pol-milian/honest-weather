var React = require('react');
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

`;

const Input = styled.input`
text-align: justify;
margin: 0 0.5rem;
display: block;
padding: 0.3rem 0.25em;
border: none;
border-radius: 0.2em;
font-size: 1.5em;
text-align: center;
box-shadow: 0 0 1em 0.25em rgba(0, 0, 0, 0.2);
`;

const SearchButton = styled.button`
border-radius: 5px;
padding: 15px 25px;
font-size: 22px;
text-decoration: none;
margin: 1rem auto;
color: #fff;
position: relative;
display: block;
background-color: #55acee;

  &: active {
  transform: translate(0px, 5px);
  -webkit-transform: translate(0px, 5px);
  box-shadow: 0px 1px 0px 0px;
}
  &: hover {
  background-color: #6FC6FF;
}

`;




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

  // style = {{ flexDirection: this.props.direction }}

  render() {
    return (
      <Wrapper style={{ flexDirection: this.props.direction }} >
        <Input
          type="text"
          placeholder="city"
          value={this.state.city}
          onChange={this.handleChange}
          required
        />

        <SearchButton
          type="button"
          onClick={this.handleSubmit}>
          Get forecast
         </ SearchButton>
      </ Wrapper>
    )
  }
}





module.exports = Search;