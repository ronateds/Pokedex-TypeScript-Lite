import { CatalogoPokemon, PokemonResumo } from "../models/Pokemon";

// Cria novo catalogo na memória
const catalogo = new CatalogoPokemon()

// Adiciona pokemon no catálogo
function adicionarAoCatalogo(pokemon: PokemonResumo): void {
    return catalogo.adicionar(pokemon)
}