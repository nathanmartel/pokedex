import React, { Component } from 'react';
import { capitalizeFirstLetter, evolvesFrom } from './api.js';

export default class PokeItem extends Component {
    render() {
    return <li>
        <div className="card-image">
            <img src={this.props.pokemon.url_image} alt={this.props.pokemon.pokemon} />
        </div>
        <div className="card-text">
            <h2><a href={this.props.pokemon.pokedex}>{capitalizeFirstLetter(this.props.pokemon.pokemon)}</a></h2>
            <p>Evolves from {this.props.pokemon.evolves_from_species_id}</p>
        </div>
        <div className="card-table">
            <table>
                {/* Should really modularize this. */}
                <tbody>
                <tr>
                    <td class="left">Attack</td>
                    <td>{this.props.pokemon.attack}</td>
                </tr>
                <tr>
                    <td class="left">Defense</td>
                    <td>{this.props.pokemon.defense}</td>
                </tr>
                <tr>
                    <td class="left">HP</td>
                    <td>{this.props.pokemon.hp}</td>
                </tr>
                <tr>
                    <td class="left">Special Attack</td>
                    <td>{this.props.pokemon.special_attack}</td>
                </tr>
                <tr>
                    <td class="left">Defense</td>
                    <td>{this.props.pokemon.special_defense}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </li>
    }
}


// Data Object example:
// {
//     _id: "5cef3501ef6005a77cd4fd16",
//     pokemon: "venusaur",
//     id: 3,
//     species_id: 3,
//     height: 20,
//     weight: 1000,
//     base_experience: 236,
//     type_1: "grass",
//     type_2: "poison",
//     attack: 82,
//     defense: 83,
//     hp: 80,
//     special_attack: 100,
//     special_defense: 100,
//     speed: 80,
//     ability_1: "overgrow",
//     ability_2: "NA",
//     ability_hidden: "chlorophyll",
//     color_1: "#78C850",
//     color_2: "#A040A0",
//     color_f: "#81A763",
//     egg_group_1: "monster",
//     egg_group_2: "plant",
//     url_image: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
//     generation_id: 1,
//     evolves_from_species_id: "2",
//     evolution_chain_id: 1,
//     shape_id: 8,
//     shape: "quadruped",
//     pokebase: "venusaur",
//     pokedex: "http://www.pokemon.com/us/pokedex/venusaur"
//  }