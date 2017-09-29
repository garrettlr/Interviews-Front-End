import React, { Component } from 'react';
import axios from 'axios';
import Pets from './Pets';
import Buttons from './Buttons';
const ROUTE = 'http://localhost:3000/static/search.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { petList: [], err: null };
    this.fetchPets(ROUTE);
  }

/* call fetchPets in constructor, which acts like componentDidMount
in order to allow site to partially load,
giving the user some feedback and keeping them on the page.
also makes clear that component will render w/out data initially, giving dev feedback.
*/

  fetchPets = route => axios.get(route)
    .then(response => this.setState({ petList: response.data.search, err: null }))
    .catch(error => this.handleError(error));

  handleError = error => {
    const err = `An Error has occurred. Please try again! ${error}`;

    this.setState({ err });
  }

  render() {
    const { petList, err } = this.state;

    const pets = petList.map(({ pet, title, description, user }) => (<Pets
      key={pet.name}
      title={title}
      firstName={user.first}
      lastName={user.last}
      petName={pet.name}
      description={description}
    />));
// utilizes do expressions, see https://babeljs.io/docs/plugins/transform-do-expressions/
    return (
      <div className='container'>
         <Buttons
           route={ROUTE}
           fetchPets={this.fetchPets}
         />

      {do {
        if (err !== null) <div id='err'>{err}</div>
        else pets
      }}
      </div>

    );
  }
}

export default App;
