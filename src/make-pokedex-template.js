export default function makePokedexTemplate(pokemon) {
    const html = `
        <li>
            <p>${pokemon.name}</p>
            <img src="${pokemon.url_image}">
            <p>${pokemon.attack}</p>
            <p>${pokemon.hp}</p>
        </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}