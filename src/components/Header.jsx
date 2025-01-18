import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <Logo>
        <span>이거해줘</span>
      </Logo>
      <Nav>
        <NavLink to="/">해줘</NavLink>
        <Divider></Divider>
        <NavLink to="/funding">돈줘</NavLink>
        <LoginButton onClick={() => navigate("auth")}>Login</LoginButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

const Divider = styled.div`
  width: 1px;
  height: 15px;
  opacity: 0.5;
  border-left: 1px solid black;
`;
const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 50px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  span {
    font-size: 24px;
    font-weight: bold;
    color: #343a40;
    font-family: "BagelFatOne-Regular";
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #495057;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    color: #007bff;
  }
`;

const LoginButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  background-color: #000000;
  color: #fff;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
