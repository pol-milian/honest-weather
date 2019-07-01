import React from "react";
import styled from "styled-components";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  font-weight: 600;
  a {
    margin: auto;
    color: var(--blue);
  }
`;

function Header() {
  return (
    <Navbar>
      <a
        css="
            margin: auto;
          "
        href="/"
      >
        <p
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
        </p>
      </a>
    </Navbar>
  );
}

export default Header;