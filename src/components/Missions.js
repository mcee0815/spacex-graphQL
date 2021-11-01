import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Mission from '../components/Mission';

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 2em;
  padding-bottom: 2em;
  border-bottom: 1px solid #f5f4f0;
`;

const Missions = ({ missions }) => {
  return (
    <div>
      {missions.map(mission => (
        <Wrapper key={mission.id}>
          <Mission mission={mission} />
          <Link to={`mission/${mission.id}`}>Read More</Link>
        </Wrapper>
      ))}
    </div>
  );
};

export default Mission;