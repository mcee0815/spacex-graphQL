import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  
  padding: 1em;
  background: #f5f4f0;
  

  @media (min-width: 700px) {
    max-width: 100%;
    /*height: calc(100% - 64px);*/
    margin-top:20px;
  }

  @media (max-width: 780px) {
    max-width: 100%;
    padding-top: 34px;

    
    margin-top:80px;
  }
`;
const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 2;

  /* We can nest styles in styled-components */
  /* The following styles will apply to links within the NavList component */
  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1em;
    color: #333;
  }
  span{
    margin-right:8px;
  }

  a:visited {
    color: #333;
  }

  a:hover,
  a:focus {
    color: #0077cc;
  }
`;

const Navigation = () => {
  return (
    <Nav>
    <NavList>
    <nav>
    <ul>
      <li>
        <Link to="/">
          <span aria-hidden="true" role="img">
          🏠
          </span>
          Home
        </Link>
      </li>
      <li>
        <Link to="/company">
          <span aria-hidden="true" role="img">
          🏢
          </span>
          Company
        </Link>
      </li>
      
      <li>
        <Link to="/launchpads">
          <span aria-hidden="true" role="img">
          🌌
          </span>
          Launchpads
        </Link>
      </li>
      <li>
        <Link to="/Rockets">
          <span aria-hidden="true" role="img">
          🚀
          </span>
          Rockets
        </Link>
      </li>
    </ul>
  </nav>
  </NavList>
    </Nav>
  );
};

export default Navigation;
