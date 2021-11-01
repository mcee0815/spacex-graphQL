import React from "react";
import {useQuery,gql} from '@apollo/client';
import styled from 'styled-components'
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Missions from "../components/Missions";

//  css for card
 const Card = styled.div`
    
 `;

 // query structure
 const GET_MISSIONS = gql`
  {
  missions {
    id
    name
    description
  }
}
`;


const  MissionList = () => {
  const { loading, error, data } = useQuery(GET_MISSIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
    console.log(data.missions)
 
          return(
            <div>
              <Header/>
              <Navigation/>
              <Missions missions={data.missions}/>
            </div>
            
          )
}

export default MissionList;
  