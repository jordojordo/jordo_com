import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/Button/Button';

const Div = styled('div')`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 70px;
  width: 60%;
  border-radius: 50px;
  background: transparent;
  box-shadow: -5px 5px 9px #70b3bc, 5px -5px 9px #98f2fe;
  transition: .2s linear;
  @media (max-width: 768px) {
    width: 75%;
  }
  @media (max-width: 567px) {
    width: 90%;
  }
`;

const Taskbar = () => {
  return (
    <div className='container-fluid'>
      <div className='container'>
        <Div>
          <Button route={`../../routes/One`}>
            <FontAwesomeIcon icon={faCoffee} />
          </Button>
          <Button route={`../../routes/Two`} />
          <Button route={`../../routes/Three`} />
        </Div>
      </div>
    </div>
  );
};

export default Taskbar;
