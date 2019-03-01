// import makePokedexTemplate from './make-pokedex-template.js';
import pokemon from '../data/pokedex.js';
import loadPokedex from './make-pokedex-template.js';
import loadPages from './loadPages.js';
import pageArray from './pageArray-function.js';

const pokedexLength = pokemon.length;

loadPages(pokedexLength, pageOptions => {
    const paged = pageArray(pokemon, pageOptions);
    loadPokedex(paged);
});

