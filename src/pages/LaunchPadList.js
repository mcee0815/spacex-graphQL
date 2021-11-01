import React from "react";
import {useQuery,gql} from '@apollo/client';
import styled from 'styled-components'
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import LaunchPads from "../components/LaunchPads";

//  css for card
const Wrapper = styled.div`
width: 80%;
margin: auto;
`;

 // query structure
 const GET_LAUNCHPADS = gql`
  {
  launchpads {
    id
    status
    name
    details
    
    
  }
}
`;
const  LaunchPadList = () => {
  const { loading, error, data } = useQuery(GET_LAUNCHPADS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
    console.log(data.launchpads);
 
          return(
            <div>
              <Wrapper>
                <LaunchPads launchpads={data.launchpads}/>
              </Wrapper>
            </div>
            
          )
}

export default LaunchPadList;
  