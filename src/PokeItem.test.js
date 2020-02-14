import React from 'react';
import renderer from 'react-test-renderer';
import PokeItem from './PokeItem.js';

const testObject = {
  _id: "5cef3501ef6005a77cd4fd29",
  pokemon: "pidgey",
  id: 21,
  species_id: 16,
  height: 3,
  weight: 18,
  base_experience: 50,
  type_1: "normal",
  type_2: "flying",
  attack: 45,
  defense: 40,
  hp: 40,
  special_attack: 35,
  special_defense: 35,
  speed: 56,
  ability_1: "keen-eye",
  ability_2: "tangled-feet",
  ability_hidden: "big-pecks",
  color_1: "#A8A878",
  color_2: "#A890F0",
  color_f: "#A8A295",
  egg_group_1: "flying",
  egg_group_2: "NA",
  url_image: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png",
  generation_id: 1,
  evolves_from_species_id: "NA",
  evolution_chain_id: 6,
  shape_id: 9,
  shape: "wings",
  pokebase: "pidgey",
  pokedex: "http://www.pokemon.com/us/pokedex/pidgey"
}

it('PokeItem renders a Pidgey', () => {
  const tree = renderer
    .create(<PokeItem pokemon={testObject} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});