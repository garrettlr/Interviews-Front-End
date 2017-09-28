import React, { PropTypes } from 'react';
import buildURL from '../utilities/buildURL';
import buildName from '../utilities/buildName';
import buildDesc from '../utilities/buildDesc';
const Pets = ({ title, firstName, lastName, petName, description }) => (
  <div id='petContainer'>
    <a
      href={buildURL(title)}
      target='_blank'
    >{title}</a>
    <div>{buildName(firstName, lastName)}</div>
    <div>{petName}</div>
    <div>{buildDesc(description)}</div>
  </div>
);

Pets.propTypes = {
  title: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  petName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Pets;
