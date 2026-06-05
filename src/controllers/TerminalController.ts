import { CatalogoPokemon } from "../models/CatalogoPokemon";
import { PokemonResumo } from "../models/Pokemon";
import { buscarPokemon } from "../services/PokeApiService";

// Busca pokemon no catalogo local, se não existir, busca na PokeAPI e adiciona ao catalogo.
export async function adicionarPokemon(catalogo: CatalogoPokemon, pokemon: string): Promise<void> {
    const pokemonObj: PokemonResumo | null =
        catalogo.encontrar(pokemon) ??
        await buscarPokemon(pokemon);

    if (pokemonObj) adicionarAoCatalogo(catalogo, pokemonObj);
}

export function adicionarAoCatalogo(catalogo: CatalogoPokemon, pokemon: PokemonResumo): void {
    catalogo.adicionar(pokemon)
}

export function listarCatalogo(catalogo: CatalogoPokemon): void {
    catalogo.listar()
}

export function removerDoCatalogo(catalogo: CatalogoPokemon, pokemonId: number): void {
    catalogo.remover(pokemonId)
}