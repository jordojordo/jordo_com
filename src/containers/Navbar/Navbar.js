import React from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown } from "antd";
import styled from "styled-components";
import Tilt from "react-tilt";

import UpdateTime from "../../components/Time/Time";
import favicon from "../../assets/favicon.ico";

// Styles
const MenuContainer = styled.div`
  display: flex;
  background: #555d5e;
  padding: 0.25rem 1rem;
  align-items: center;
  justify-content: space-between;
`;

const Div = styled.div`
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: #cde1e3;
  font-weight: 400;
  margin: 0 0.75rem;
  &.active {
    font-weight: 700;
  }
`;

const Img = styled.div`
  width: 50px;
  height: 50px;
  margin: 0 0.5rem;
  border-radius: 12px;
  background: hsla(187, 100%, 85%, 0.3) center / 70% no-repeat url(${favicon});
  cursor: pointer;
`;

const Time = styled(UpdateTime)``;

const Navbar = () => {
  const onClick = ({ key }) => {
    console.log(`Click on item ${key}`);
  };

  const hoverFile = () => {
    return (
      <Menu onClick={onClick}>
        <Menu.Item key="1">
          <Link to={`../../routes/Two`}>Projects</Link>
        </Menu.Item>
        <Menu.Item key="2">Blog</Menu.Item>
      </Menu>
    );
  };

  return (
    <MenuContainer>
      <Div className="row">
        <Link to={`/`}>
          <Tilt className="Tilt" option={{ max: 25 }}>
            <Img className="Tilt-inner" />
          </Tilt>
        </Link>

        <StyledLink className="active" to={`/`} >Jordo</StyledLink>
        <Dropdown overlay={hoverFile}>
          <StyledLink className="ant-dropdown-StyledLink" href="#" to={`/`}>
            File
          </StyledLink>
        </Dropdown>
        <StyledLink to={`/`}>Edit</StyledLink>
      </Div>
      <Div className="row">
        <Time />
      </Div>
    </MenuContainer>
  );
};

export default Navbar;
