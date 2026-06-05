import { CatalogoPokemon, PokemonResumo } from "../models/Pokemon";

const catalogo = new CatalogoPokemon();

function adicionarAoCatalogo(pokemon: PokemonResumo): void {
    catalogo.adicionar(pokemon);
}

function listarCatalogo(catalogo: PokemonResumo[]): void {
    if (catalogo.length === 0) {
        console.log("[AVISO] Catálogo vazio.");
        return;
    }

    console.log("Catálogo atual:");
    catalogo.forEach(pokemon => {
        console.log(`#${pokemon.id} - ${pokemon.nome} | Tipos: ${pokemon.tipos.join(", ")} | Altura: ${pokemon.altura} | Peso: ${pokemon.peso}`);
    });
}

export { adicionarAoCatalogo, listarCatalogo, catalogo };