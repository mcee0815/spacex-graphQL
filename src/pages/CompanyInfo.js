import React from "react";
import {useQuery,gql} from '@apollo/client'
import styled from 'styled-components'
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Company from '../components/Company';

//  css for card
 const Card = styled.div`
  width: 80%;
  margin: auto;
 `;

 // query structure
 const GET_COMPANY = gql`
  {
  company {
    summary
    ceo
    founded
    links{
      flickr
      website
    }
  }
}
`;

function CompanyInfo() {
    const { loading, error, data } = useQuery(GET_COMPANY);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

      
      return(
          <Card>
            <Company company={data.company}/>
          </Card>
      )
  }
  export default CompanyInfo;
  