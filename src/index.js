import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  
} from "@apollo/client";

// import ExchangeRates from './components/exchange-rates';

// sanitize url string
const sanitizeUrl = (url) => {
  if (typeof url.trim() === 'string' && url.length > 0) {
      return url;
  }
  throw new Error('Invalid url')
}

const spacex = sanitizeUrl("https://api.spacex.land/graphql")
// const exchangeRate = sanitizeUrl('https://48p1r2roz4.sse.codesandbox.io')

const client = new ApolloClient({
  uri: spacex,
  cache: new InMemoryCache()
});


ReactDOM.render(
  <React.StrictMode>
  <ApolloProvider client = {client}>
    <App />
  </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
