import React, { Component } from 'react';
import PokeItem from './PokeItem.js';

export default class PokeList extends Component {
    render() {
    return <ul className='data-list'>
      { this.props.pokeData.map(item => <PokeItem pokemon={item} key={item._id} />) }
    </ul>
    }
}