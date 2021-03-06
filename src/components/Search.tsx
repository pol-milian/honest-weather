import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 6rem;
`;

const Input = styled.input`
  height: 100px;
  margin-bottom: 20px;
  color: var(--black);
  display: block;
  font-size: 36px;
  @media only screen and (max-width: 500px) {
    font-size: 20px;
  }
  padding: 0.3rem 0.25em;
  border: 1px solid lightgrey
  border-radius: 10px;
  box-shadow: 0 0 1em 0.25em rgba(36, 123, 160, 0.23);
  &::placeholder {
    color: #d9d9d9;
  }
  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const SearchButton = styled.button`
  border-radius: 100px;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: .05em;
  margin: auto;
  padding: 2rem;
  border: none;
  text-decoration: none;
  width: 200px;
  @media only screen and (max-width: 480px) {
    width: 60%;
  }
  color: #fff;
  display: block;
  background-color: var(--turquoise);
  box-shadow: 0 15px 35px hsla(0, 0%, 0%, .2);
  transition: all linear .1s;
  &:hover {
    box-shadow: none;
  }
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
        data-testid="search"
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
        SEARCH!
      </SearchButton>
    </Wrapper >
  )
}


export default Search;