import React from 'react'
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  font-weight: 500;
  color: #4f21d7;
  font-size: 25px;
`;

const TopBar = (props) => {
  return (
    <div>
      <Title>{props.title}</Title>
    </div>
  )
}

export default TopBar