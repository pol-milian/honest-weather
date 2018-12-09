import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ReactLogo from "../images/react.png";


const Navbar = styled.nav`
  background-color: var(--blue);
  z-index: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 0 1rem;
`;
const HeaderIcon = styled.img`
  width: 160px;
`;

function Header(props) {
  return (
    <Navbar>
      <Link to="/">
        <HeaderIcon src={ReactLogo} />
      </Link>
    </Navbar>
  );
}

module.exports = Header;
