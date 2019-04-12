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
`;

function Header() {
  return (
    <Navbar>
      <Link to="/">
        <h1
          css="
            display: inline-block;
          "
        >
          <span role="img" aria-label="middle finger and rain emoji">
            🖕🌧️
          </span>{" "}
          Honest Weather
        </h1>
      </Link>
    </Navbar>
  );
}

export default Header;
