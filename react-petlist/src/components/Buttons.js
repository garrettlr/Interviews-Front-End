import React, { PropTypes } from 'react';

const Buttons = ({ fetchPets, route}) => {
  const fetchLocal = qs => fetchPets(route+qs);

  return (
    <div id='buttons'>
      <button
        onClick={() => fetchLocal('?service=boarding')}>
        Filter Boarding
      </button>
      <button onClick={() => fetchLocal('?service=sitting')}>
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
