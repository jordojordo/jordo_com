import React from 'react';
import styled from 'styled-components';
import { Spin } from "antd";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin: 1rem 0;
`;

const Spinner = () => {
  return (
    <Div>
      <Spin size="large" tip="Loading..." />
    </Div>
  )
}

export default Spinner;