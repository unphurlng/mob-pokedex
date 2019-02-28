import { makePokedexTemplate } from '../src/make-pokedex-template.js';
const test = QUnit.test;

QUnit.module('POKEDEX TEMPLATE');

const pokemon = {

    pokemon: 'bulbasaur',
    url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    attack: 49,
    hp: 49,
    type_1: 'grass'
};

test('dynamically populate pokedex to browser', assert => {
    //arrange
    const expected = `
        <li class="grass">
            <p>bulbasaur</p>
            <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png">
            <p>A:49</p>
            <p>HP:49</p>
        </li>
    `;
    //act
    const result = makePokedexTemplate(pokemon);
    //assert
    assert.htmlEqual(result, expected);
});