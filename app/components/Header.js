import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
// import HomeIcon from "../images/home.png";

const Navbar = styled.nav`
  z-index: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 0 1rem;
`;

const Home = styled.img`
  width: 100px;
`;

function Header() {
  return (
    <Navbar>
      <Link to="/">
        {/* <Home src={HomeIcon} /> */}
        <h1>Home</h1>
      </Link>
    </Navbar>
  );
}

export default Header;
