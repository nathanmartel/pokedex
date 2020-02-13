import React, { Component } from 'react';

export default class Header extends Component {
    render() {

    return (
    <header>
      <h1 className="hidden">Pokemon</h1>
      <div class="img-container">
        <img src="pokemon-logo-png-2000.png" alt="Pokemon logo" />
      </div>
    </header>
    )
    }
}