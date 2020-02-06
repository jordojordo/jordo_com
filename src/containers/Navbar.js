import React, { Component } from 'react';
import { Avatar, Menu, Dropdown, Icon, message } from 'antd';
import styled from 'styled-components';

import UpdateTime from '../components/Time';

// Styles
const MenuContainer = styled.div`
  display: flex;
  background: #fff;
  padding: .25rem 1rem;
  align-items: baseline;
  justify-content: space-between;
`;

let AvatarStyled = styled(Avatar)`
  margin: 0 .5rem;
`;

const Link = styled.a`
  color: #666;
  font-weight: 400;
  margin: 0 .75rem;
  &.active {
    font-weight: 700;
  }
`;

const Time = styled(UpdateTime)`
  
`;

export default class Navbar extends Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

  hoverFile = () => {
    return (
      <Menu onClick={this.onClick}>
        <Menu.Item key='1'>Projects</Menu.Item>
        <Menu.Item key='2'>Blog</Menu.Item>
      </Menu>
    )
  }


  render() {
    return (
      <MenuContainer>
        <div>
          <AvatarStyled icon='user' />
          <Link className='active'>Jordo</Link>
          <Dropdown overlay={this.hoverFile}>
            <Link className='ant-dropdown-link' href='#'>File</Link>
          </Dropdown>
          <Link>Edit</Link>
        </div>
        <Time />   
      </MenuContainer>
    );
  }
}