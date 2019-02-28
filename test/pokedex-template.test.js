const test = QUnit.test;

QUnit.module('POKEDEX TEMPLATE');

const pokemon = {
    name: 'bulbasaur',
    url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    attack: 49,
    hp: 49
};

function makePokedexTemplate(pokemon) {
    return `
        <li>
            <p>${pokemon.name}</p>
            <img src="${pokemon.url_image}">
            <p>${pokemon.attack}</p>
            <p>${pokemon.hp}</p>
        </li>
    `;
}

test('dynamically populate pokedex to browser', assert => {
    //arrange
    const expected = `
        <li>
            <p>bulbasaur</p>
            <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png">
            <p>49</p>
            <p>49</p>
        </li>
    `;
    //act
    const result = makePokedexTemplate(pokemon);
    //assert
    assert.equal(result, expected);
});