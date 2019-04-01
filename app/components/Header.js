import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import HomeIcon from "../images/home-insurance.svg";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

const Home = styled.img`
  width: 60px;
  display: inline-block;
`;

function Header() {
  return (
    <Navbar>
      <Link to="/">
        <Home src={HomeIcon} />
        <h1
          css="
            display: inline-block;
          "
        >
          Home
        </h1>
      </Link>
    </Navbar>
  );
}

export default Header;
