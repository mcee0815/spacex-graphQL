import React from 'react';

// import GraphQL dependencies
import { useQuery, gql } from '@apollo/client';

// import the Note component
import LaunchPad from '../components/LaunchPad';

// the note query, which accepts an ID variable
const GET_LAUNCHPAD = gql`
  query launchpad($id: ID!) {
    launchpad(id: $id) {
      id
      details
      name
      status
      
      }
    }
  
`;
const LaunchPadPage = props => {

  // store the id found in the url as a variable
  const id = props.match.params.id;

  // query hook, passing the id value as a variable
  const { loading, error, data } = useQuery(GET_LAUNCHPAD, { variables: { id } });

  // if the data is loading, display a loading message
  if (loading) return <p>Loading...</p>;
  // if there is an error fetching the data, display an error message” 
   if (error) return <p>Error! Note not found</p>;

  // if the data is successful, display the data in our UI
  console.log(data.launchpad);
  return <LaunchPad launchpad={data.launchpad} />;
};

export default LaunchPadPage;




