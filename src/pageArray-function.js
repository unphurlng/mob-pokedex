export default function pageArray(pokemon, pageOptions) {
    const startIndex = (pageOptions.currentPageNumber - 1) * (pageOptions.perPage);
    const endIndex = startIndex + pageOptions.perPage;
    return pokemon.slice(startIndex, endIndex);
}