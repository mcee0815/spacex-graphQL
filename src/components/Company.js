import React from 'react';


const Company = ({ company }) => {
  return (
    <div>
      <h2>{company.ceo}</h2>
      <h2>{company.founded}</h2>
      <p>{company.summary}</p>
      <p>{company.links.flickr}</p>
      <p>For more, information visit the official website:</p>
      <a href={company.links.website}>spacex.com</a>
    </div>
  );
};

export default Company;