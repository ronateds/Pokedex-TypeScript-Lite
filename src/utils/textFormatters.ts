import { PokemonResumo } from "../models/Pokemon";

export function listarFormato(pokemon: PokemonResumo): string {
    return `#${ pokemon.id } - ${ pokemon.nome } | Tipos: ${ pokemon.tipos.join(", ") } | Altura: ${ pokemon.altura } | Peso: ${ pokemon.peso }`
}