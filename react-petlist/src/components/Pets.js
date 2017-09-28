import React from 'react';

const Pets = ({ title, person, petName, description }) => (
  <div id='petContainer'>
    <a href={title}>{title}</a>
    <div>{person}</div>
    <div>{petName}</div>
    <div>{description}</div>
  </div>
);

export default Pets;
