import { PokemonResumo } from "./Pokemon";

export class CatalogoPokemon {
    private pokemons: PokemonResumo[] = [];

    adicionar(pokemon: PokemonResumo): void {
        this.pokemons.push(pokemon);
    }

    existe(pokemon: string | number): boolean {
        return this.pokemons.some(item => item.id == pokemon || item.nome == pokemon);
    }

    encontrar(pokemon: string | number): PokemonResumo | undefined {
        return this.pokemons.find(item => item.id == pokemon || item.nome == pokemon);
    }

    listar(): PokemonResumo[] {
        return this.pokemons;
    }

    remover(id: number): void {
        this.pokemons = this.pokemons.filter(pokemon => pokemon.id !== id);
    }
}