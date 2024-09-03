export const fetchPokemonData = async () => {
    try {
        const data = await fetch("https://pokeapi.co/api/v2/pokemon/")
        const response = await data.json();
        console.log(response.results);
    } catch (error) {
        console.error(error);
    }
}