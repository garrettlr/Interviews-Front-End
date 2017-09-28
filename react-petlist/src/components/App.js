import React, { Component } from 'react';
import axios from 'axios';
import Pets from './Pets';

const ROUTE = 'http://localhost:3000/static/search.json';

const err = [
  {err: 'err'}
]
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { petList: [] };
    this.fetchPets(ROUTE);
  }

/* call fetchPets in constructor, which acts like componentDidMount
in order to allow site to partially load,
giving the user some feedback and keeping them on the page.
also makes clear that component will render w/out data initially, giving dev feedback.
*/

  fetchPets = route => axios.get(route)
    .then(response => this.setState({ petList: response.data.search }))
    .catch(error => console.log('ERROR! ', error));

  render() {
    const { petList } = this.state;

    const pets = petList.map(({ pet, title, description, user }) => (<Pets
      key={pet.name}
      title={title}
      firstName={user.first}
      lastName={user.last}
      petName={pet.name}
      description={description}
    />));

    return (
      <div className='container'>
        {pets}
      </div>
    );
  }

}

export default App;
