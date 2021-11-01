import React from 'react';

// import GraphQL dependencies
import { useQuery, gql } from '@apollo/client';

// import the Note component
import Mission from '../components/Mission';

// the note query, which accepts an ID variable
const GET_MISSION = gql`
  query mission($id: ID!) {
    mission(id: $id) {
      
      
      description
      }
    }
  
`;

const MissionPage = props => {

  // store the id found in the url as a variable
  const id = props.match.params.id;

  // query hook, passing the id value as a variable
  const { loading, error, data } = useQuery(GET_MISSION, { variables: { id } });

  // if the data is loading, display a loading message
  if (loading) return <p>Loading...</p>;
  // if there is an error fetching the data, display an error message” 
   if (error) return <p>Error! Note not found</p>;

  // if the data is successful, display the data in our UI
  
  return <Mission mission={data.mission} />;
};

export default MissionPage;




