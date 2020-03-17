import React from "react";
import { Menu, Dropdown, message } from "antd";
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

const Link = styled.a`
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
    message.info(`Click on item ${key}`);
  };

  const hoverFile = () => {
    return (
      <Menu onClick={onClick}>
        <Menu.Item key="1">Projects</Menu.Item>
        <Menu.Item key="2">Blog</Menu.Item>
      </Menu>
    );
  };

  return (
    <MenuContainer>
      <Div className="row">
        <Tilt className="Tilt" option={{ max: 25 }}>
          <Img className="Tilt-inner" />
        </Tilt>
        <Link className="active">Jordo</Link>
        <Dropdown overlay={hoverFile}>
          <Link className="ant-dropdown-link" href="#">
            File
          </Link>
        </Dropdown>
        <Link>Edit</Link>
      </Div>
      <Div className="row">
        <Time />
      </Div>
    </MenuContainer>
  );
};

export default Navbar;
