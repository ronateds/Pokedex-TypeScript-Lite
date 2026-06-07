import { listarFormato } from "../utils/textFormatters";
import { PokemonResumo } from "./Pokemon";

export class CatalogoPokemon {
    private pokemons: PokemonResumo[] = [];

    adicionar(pokemon: PokemonResumo): void {
        const jaExiste = this.pokemons.some(item => item.id === pokemon.id);

        if (jaExiste) {
            console.log(`[AVISO] ${ pokemon.nome } já está no catálogo.\n`);
            return;
        }

        this.pokemons.push(pokemon);
        console.log(`[OK] ${ pokemon.nome } adicionado ao catálogo.`);
        console.log(listarFormato(pokemon), '\n');
    }

    encontrar(pokemon: string): PokemonResumo | undefined {
        return this.pokemons.find(item => item.nome == pokemon);
    }

    listar(): void {
        if (this.pokemons.length === 0) {
            console.log("[AVISO] Catálogo vazio.\n");
            return;
        }

        console.log('Catálogo atual:');

        this.pokemons.forEach(pokemon => {
            console.log(listarFormato(pokemon));
        });
        
        console.log('\n')
    }

    remover(id: number): void {
        const existe = this.pokemons.some(pokemon => pokemon.id === id);

        if (!existe) {
            console.log(`[AVISO] Nenhum Pokémon encontrado com esse ID: ${ id }\n`);
            return;
        }

        this.pokemons = this.pokemons.filter(pokemon => pokemon.id !== id);
        console.log(`[OK] Pokémon removido do catálogo.\n`);
    }
}