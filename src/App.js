import React from 'react';

import styled from 'styled-components';
// import {useQuery,gql} from '@apollo/client'
// import ExchangeRates from './components/exchange-rates';

import Pages from './pages';
import CreateGlobalStyles from './components/GlobalStyles';

const Wrapper = styled.div`
    
`;
const Heading = styled.h1`
    color:#FFF;
    text-align:center;
`

function App() {
  
  return (
    <div>
      <Wrapper>
      <CreateGlobalStyles/>
        <Pages/>
      </Wrapper>
    </div>
    
  );
}

export default App;
