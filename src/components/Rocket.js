import React from 'react';
import styled from 'styled-components';

// Keep notes from extending wider than 800px


const Rocket = ({ rocket }) => {
  return (
    <div>
      <h2>{rocket.name}</h2>
      <p>{rocket.description}</p>
      
    </div>
  );
};

export default Rocket;