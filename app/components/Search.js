import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;

const Input = styled.input`
  margin-bottom: 76px;
  height: 180px;
  color: var(--black);
  width: 600px;
  display: block;
  padding: 0.3rem 0.25em;
  border: 1px #247ba0;
  border-radius: 52px;
  font-size: 4rem;
  box-shadow: 0 0 1em 0.25em rgba(36, 123, 160, 0.23);
  &::placeholder {
    color: #d9d9d9;
  }
`;

const SearchButton = styled.button`
  border-radius: 100px;
  padding: 2rem;
  border: none;
  font-size: 4rem;
  text-decoration: none;
  width: 400px;
  color: #fff;
  position: relative;
  display: block;
  background-color: var(--turquoise);
`;

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;

    this.setState(() => ({
      city: value
    }));
  }

  handleSubmit() {
    this.props.onSubmit(this.state.city);

    this.setState(() => ({
      city: ""
    }));
  }

  render() {
    const { city } = this.state;
    const { direction } = this.props;
    return (
      <Wrapper style={{ flexDirection: direction }}>
        <Input
          type="text"
          placeholder="your shitty city"
          value={city}
          onChange={this.handleChange}
          onKeyPress={event => {
            if (event.key === "Enter") {
              this.handleSubmit();
            }
          }}
          required
        />

        <SearchButton type="button" onClick={this.handleSubmit}>
          Search!
        </SearchButton>
      </Wrapper>
    );
  }
}

export default Search;
