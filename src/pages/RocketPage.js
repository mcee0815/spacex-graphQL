import React from 'react';

// import GraphQL dependencies
import { useQuery, gql } from '@apollo/client';

// import the Note component
import Rocket from '../components/Rocket';
import styled from 'styled-components';

const StyledRocket = styled.article`
margin:0 auto;

@media (min-width: 776px) {
  
  width:75%;
}

`;

// the note query, which accepts an ID variable
const GET_ROCKET = gql`
  query rocket($id: ID!) {
    rocket(id: $id) {
      id
      name
      description
      }
    }
  
`;

const RocketPage = props => {

  // store the id found in the url as a variable
  const id = props.match.params.id;

  // query hook, passing the id value as a variable
  const { loading, error, data } = useQuery(GET_ROCKET, { variables: { id } });

  // if the data is loading, display a loading message
  if (loading) return <p>Loading...</p>;
  // if there is an error fetching the data, display an error message” 
   if (error) return <p>Error! Note not found</p>;

  // if the data is successful, display the data in our UI
  return (
    <StyledRocket>
    <Rocket rocket={data.rocket} />
    </StyledRocket>
    
  )
  
};

export default RocketPage;




