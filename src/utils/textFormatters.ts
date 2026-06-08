import { PokemonResumo } from "../models/Pokemon";

export function adicionado(pokemon: PokemonResumo): string {
    return `[OK] ${ pokemon.nome } adicionado ao catálogo.\n` + listar(pokemon) + '\n'
}

export function listar(pokemon: PokemonResumo): string {
    return `#${ pokemon.id } - ${ pokemon.nome } | Tipos: ${ pokemon.tipos.join(", ") } | Altura: ${ pokemon.altura } | Peso: ${ pokemon.peso }`
}