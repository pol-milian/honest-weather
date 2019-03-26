import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.nav`
  z-index: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 0 1rem;
`;

function Header() {
  return (
    <Navbar>
      <Link to="/">
        <h1>Home</h1>
      </Link>
    </Navbar>
  );
}

export default Header;
