import React from 'react';
import buildURL from '../utilities/buildURL';
import buildName from '../utilities/buildName';
import buildDesc from '../utilities/buildDesc';
const Pets = ({ title, firstName, lastName, petName, description }) => (
  <div id='petContainer'>
    <a href={buildURL(title)}>{title}</a>
    <div>{buildName(firstName, lastName)}</div>
    <div>{petName}</div>
    <div>{buildDesc(description)}</div>
  </div>
);

Pets.propTypes = {
  title: React.PropTypes.string.isRequired,
  firstName: React.PropTypes.string.isRequired,
  lastName: React.PropTypes.string.isRequired,
  petName: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
};

export default Pets;
