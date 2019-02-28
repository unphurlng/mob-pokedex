// import makePokedexTemplate from './make-pokedex-template.js';
import pokemon from '../data/pokedex.js';
import loadPokedex from './make-pokedex-template.js';
import loadPages from './loadPages.js';

const pokedexLength = pokemon.length;

loadPages(pokedexLength, pageOptions => {
    console.log(pageOptions);
});

loadPokedex(pokemon);
