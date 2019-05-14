import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  a {
    color: var(--blue);
  }
  #emojis {
    &:hover {
      font-size: 6rem;
      transition: all 0.5s ease-in;
    }
    transition: all 0.5s ease-in;
  }
`;

function Header() {
  return (
    <Navbar>
      <Link
        css="
            margin: auto;
          "
        to="/"
      >
        <h1
          css="
            display: inline-block;
          "
        >
          <span
            id="emojis"
            role="img"
            aria-label="middle finger and rain emoji"
          >
            🖕🌧️
          </span>{" "}
          Honest Weather
        </h1>
      </Link>
    </Navbar>
  );
}

export default Header;
