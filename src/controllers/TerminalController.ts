import { Catalogo } from "../models/Catalogo";
import { PokemonResumo } from "../models/Pokemon";
import { buscarPokemon } from "../services/PokeApiService";

// Busca pokemon no catalogo local, se não existir, busca na PokeAPI e adiciona ao catalogo.
export async function adicionarPokemon(catalogo: Catalogo, pokemon: string): Promise<void> {
    const pokemonObj: PokemonResumo | null =
        catalogo.encontrar(pokemon) ??
        await buscarPokenonNaAPI(pokemon);

    if (pokemonObj) adicionarAoCatalogo(catalogo, pokemonObj);
}

export async function buscarPokenonNaAPI(pokemon: string): Promise<PokemonResumo | null>{
    return new Promise(async (resolve) => {
        const _pokemon: PokemonResumo | null = await buscarPokemon(pokemon);

        if(!_pokemon) resolve(null);

        resolve(_pokemon);
    })
}

export function adicionarAoCatalogo(catalogo: Catalogo, pokemon: PokemonResumo): void {
    catalogo.adicionar(pokemon)
}

export function listarCatalogo(catalogo: Catalogo): void {
    catalogo.listar()
}