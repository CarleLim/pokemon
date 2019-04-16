import React, { Component } from 'react';
import styled from 'styled-components';
import { HashRouter as Router, Route, } from 'react-router-dom';
import { db } from './lib/firebase';


import Main from './Main';

class App extends Component {

state = {
  data: [],
}

  componentDidMount() {
    db.ref('/').on('value', (snapshot) => {
      const data = snapshot.val();
      this.setState({ data });
    })
  }

  render() {
    const { data } = this.state;
    const withData = Comp => props => <Comp {...props} data={data} />;

    return (
      <Router>
        <div>
          <Route exact path="/" component={withData(Main)} />
        </div>
      </Router>
    );
  }
}

export default App;
// "name":"Bulbasaur","img":"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bulbasaur.png","types":["Grass","Poison"],"height":"2′04″ (0.7 m)","weight":"15.2 lbs (6.9 kg)"}