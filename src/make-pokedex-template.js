export function makePokedexTemplate(pokemon) {
    const html = `
        <li class="${pokemon.type_1}">
            <p>${pokemon.pokemon}</p>
            <img src="${pokemon.url_image}">
            <p>A:${pokemon.attack}</p>
            <p>HP:${pokemon.hp}</p>
        </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}

const pokedexGallery = document.getElementById('pokedex-gallery');

export default function loadPokedex(pokedex) {
    pokedex.forEach(pokemon => {
        const dom = makePokedexTemplate(pokemon);
        pokedexGallery.appendChild(dom);
    });
}