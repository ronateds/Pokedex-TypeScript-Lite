import { buscarPokemon } from "./services/PokeApiService";

async function main() {
    const pikachu = await buscarPokemon('pikachu');
    console.log(pikachu);
}

main();