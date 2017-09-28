import React, { PropTypes } from 'react';

const Buttons = ({ fetchPets, route }) => {
  const fetchBoarding = () => fetchPets(route + '?service=boarding');
  const fetchSitting = () => fetchPets(route + '?service=sitting');
  
  return (
    <div id='buttons'>
      <button onClick={fetchBoarding}>
        Filter Boarding
      </button>
      <button onClick={fetchSitting}>
        Filter Sitting
      </button>
    </div>
  );
}

Buttons.propTypes = {
  route: PropTypes.string.isRequired,
  fetchPets: PropTypes.func.isRequired,
}
export default Buttons;
