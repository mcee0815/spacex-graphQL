import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Rocket from '../components/Rocket';


const StyledLink = styled(Link)`
  marging-left:20px;
`;

const Rockets = ({ rockets }) => {
  return (
    <div>
      {rockets.map(rocket => (
        <div key={rocket.id}>
            <Rocket rocket={rocket} />
            <StyledLink to={`rocket/${rocket.id}`}>Read More</StyledLink>
        </div>
        
      ))}
    </div>
  );
};

export default Rockets;