import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  margin: 6rem 0;
`;

const Input = styled.input`
  height: 180px;
  margin-bottom: 3rem;
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

interface Props {
  onSubmit(event: any): void,
}

const Search = ({ onSubmit}: Props) => {
  const [city, setCity] = useState("")
  const handleSubmit = () => {
    onSubmit(city)
    setCity("")
  }
  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="your shitty city 💩"
        value={city}
        onChange={e => setCity(e.target.value)}
        onKeyPress={event => {
          if (event.key === "Enter") {
            handleSubmit();
          }
        }}
        required
      />

      <SearchButton type="button" onClick={handleSubmit}>
        Search!
        </SearchButton>
    </Wrapper >
  )
}


export default Search;