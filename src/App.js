import React, { Component } from 'react';
import Header from './Header.js';
import PokeList from './PokeList.js';
import pokeData from './data-temp.js';
import request from 'superagent';
import './bootstrap-reboot.min.css';
import './style.css';
import './gallery.css';

export default class App extends Component {
  state = { 
    selected: null,
    selectedTwo: null,
  };

  async componentDidMount() {
    const data = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex');
    this.setState({ data: data.body });
  }

  render() {
    return (
      <div>
        {/* { JSON.stringify(this.state.data) } */}
        <Header />
        <PokeList pokeData={pokeData} />
      </div>
    );
  }
}
