import React from 'react';
import styled from 'styled-components';


const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15vh;
  font-weight: 200;
  p {
    font-size: 16px;
  }
  a {
    text-decoration: underline;
    color: inherit;
  }

`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>Made by <a
        href="mailto:pol.milian.dev@gmail.com"
      >Pol Milian</a></p>
    </FooterWrapper>
  );
};

export default Footer;