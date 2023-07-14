import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <Container>
      <Main>
        <Logo src={logo} />
        <NavHolder>
          <Nav>Home</Nav>
          <Nav> About us</Nav>
          <Nav>Services</Nav>
          <Nav>Contact us</Nav>
        </NavHolder>
        <EndPoint>Sign in / Explore now</EndPoint>
      </Main>
    </Container>
  );
};

export default Header;

const NavHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EndPoint = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700px;
`;

const Nav = styled.div`
  margin-left: 15px;
  font-size: 16px;
  color: #9e9ea7;
`;

const Logo = styled.img`
display: flex;
align-items: center;
`;

const Main = styled.div`
  width: 89%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  /* background-color: gray; */
`;

const Container = styled.div`
  width: 100%;
  height: 70px;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 50%,
    rgba(209, 211, 212, 1) 50%
  );
  display: flex;
  justify-content: center;
`;
