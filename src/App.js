import React, { Component } from 'react';
import Header from './Header.js';
import PokeList from './PokeList.js';
import pokeTempData from './data-temp.js';
import request from 'superagent';
import './bootstrap-reboot.min.css';
import './style.css';
import './list.css';

export default class App extends Component {
  state = { 
    pokeData: []
  };

  async componentDidMount() {
    const data = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex');
    this.setState({ pokeData: data.body.results });
  }

  render() {
    return (
      <div>
        <Header />
        {/* { JSON.stringify(this.state.pokeData) } */}
        <PokeList pokeData={this.state.pokeData} />
      </div>
    );
  }
}
