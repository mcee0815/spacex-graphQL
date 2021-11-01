import React from 'react';
//import logo from '../img/logo.svg';

import styled from 'styled-components';

const HeaderBar = styled.header`
  width: 100%;
  padding: 0.5em 1em;
  display: flex;
  height: 64px;
  background-color: #fff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  z-index: 1;
  color:black;
  position:fixed;
  margin-bottom:30px;
  text-align:center;
`;

const Header = () => {
  return (
    <HeaderBar>
      <span>🚀</span>
      <h4>SpaceX</h4>
    </HeaderBar>
  );
};

export default Header;

