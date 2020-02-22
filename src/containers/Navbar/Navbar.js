import React from 'react';
import { Avatar, Menu, Dropdown, message } from 'antd';
import styled from 'styled-components';

import UpdateTime from '../../components/Time/Time';

// Styles
const MenuContainer = styled.div`
  display: flex;
  background: #555d5e;
  padding: 0.25rem 1rem;
  align-items: baseline;
  justify-content: space-between;
`;

let AvatarStyled = styled(Avatar)`
  margin: 0 0.5rem;
`;

const Link = styled.a`
  color: #cde1e3;
  font-weight: 400;
  margin: 0 0.75rem;
  &.active {
    font-weight: 700;
  }
`;

const Time = styled(UpdateTime)``;

const Navbar = () => {
  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

  const hoverFile = () => {
    return (
      <Menu onClick={onClick}>
        <Menu.Item key='1'>Projects</Menu.Item>
        <Menu.Item key='2'>Blog</Menu.Item>
      </Menu>
    );
  };

  return (
    <MenuContainer>
      <div>
        <AvatarStyled icon='user' />
        <Link className='active'>Jordo</Link>
        <Dropdown overlay={hoverFile}>
          <Link className='ant-dropdown-link' href='#'>
            File
          </Link>
        </Dropdown>
        <Link>Edit</Link>
      </div>
      <div className='row'>
        <Time />
      </div>
    </MenuContainer>
  );
};

export default Navbar;