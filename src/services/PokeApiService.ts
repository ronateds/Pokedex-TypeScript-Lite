import { PokemonResumo } from "../models/Pokemon";

export async function buscarPokemon(nomeOuId: string): Promise<PokemonResumo | null> {
    return new Promise(async (resolve) => {
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${ nomeOuId }`);
        const dados = await resposta.json();

        const pokemon: PokemonResumo = {
            id: dados.id,
            nome: dados.name,
            tipos: dados.types,
            altura: dados.height,
            peso: dados.weight
        }

        resolve(pokemon)
    });
}