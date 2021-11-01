import React from 'react';
import styled from 'styled-components';

// Keep notes from extending wider than 800px
const StyledCompany = styled.article`
  padding:20px;
`;

const LaunchPad = ({ launchpad }) => {
  return (
    <StyledCompany>
      <h2>{launchpad.name}</h2>
      <p>{launchpad.details}</p>
      {
        launchpad.status === 'active' ? <h3 style={{'color':'green'}}>Active</h3>:<h3 style={{'color':'red'}}>Retired</h3>
      }
    </StyledCompany>
  );
};

export default LaunchPad;