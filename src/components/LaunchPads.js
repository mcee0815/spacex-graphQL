import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import LaunchPad from './LaunchPad';

const Wrapper = styled.div`
    
`;

const StyledLink  = styled(Link)`
margin-left: 20px;
     
`;

const LaunchPads = ({launchpads}) => {
    return (
        <div>
          {launchpads.map(launchpad => (
            <div key={launchpad.id}>
            <LaunchPad launchpad={launchpad} />
            <StyledLink to={`launchpad/${launchpad.id}`}>Read More</StyledLink>
            
        </div>
            
          ))}
      </div>    )
}


export default LaunchPads;