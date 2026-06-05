import { PokemonResumo } from "../models/Pokemon";
import { buscarPokemon } from "../services/PokeApiService";

export async function buscarPokenonNaAPI(pokemon: string): Promise<PokemonResumo | null>{
    return new Promise(async (resolve) => {
        const _pokemon: PokemonResumo | null = await buscarPokemon(pokemon);

        if(!_pokemon) return null;

        resolve(_pokemon);
    })
}

export function adicionarAoCatalogo(catalogo: PokemonResumo[], pokemon: PokemonResumo): PokemonResumo[] {
    const jaExiste = catalogo.some(item => item.id === pokemon.id);

    if (jaExiste) {
        console.log(`[AVISO] ${ pokemon.nome } já está no catálogo.`);
        return catalogo;
    }

    catalogo.push(pokemon);
    console.log(`[OK] ${ pokemon.nome } adicionado ao catálogo.`);
    return catalogo
}

export function listarCatalogo(catalogo: PokemonResumo[]): void {
    if (catalogo.length === 0) {
        console.log("[AVISO] Catálogo vazio.");
        return;
    }

    console.log("Catálogo atual:");
    catalogo.forEach(pokemon => {
        console.log(`#${ pokemon.id } - ${ pokemon.nome } | Tipos: ${ pokemon.tipos.join(", ") } | Altura: ${ pokemon.altura } | Peso: ${ pokemon.peso }`);
    });
}