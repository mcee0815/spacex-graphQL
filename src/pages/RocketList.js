import React from "react";
import {useQuery,gql} from '@apollo/client';
import styled from 'styled-components'
import Rockets from "../components/Rockets";

//  css for card
 const Card = styled.div`
 width:80%;
 margin:0 auto;
  display:flex;
  flex-direction:column;

 `;
 

 // query structure
 const GET_ROCKETS = gql`
  {
  rockets {
    id
    name
    description
  }
}
`;

const  RocketList = () => {
  const { loading, error, data } = useQuery(GET_ROCKETS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
    console.log(data.rockets);
 
          return(
            <Card>
              <Rockets rockets={data.rockets}/>
            </Card>
            
          )
}

export default RocketList;
  