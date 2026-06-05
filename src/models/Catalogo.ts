import { PokemonResumo } from "./Pokemon";

export class Catalogo {
    private pokemons: PokemonResumo[] = [];

    adicionar(pokemon: PokemonResumo): void {
        const jaExiste = this.pokemons.some(item => item.id === pokemon.id);

        if (jaExiste) {
            console.log(`[AVISO] ${ pokemon.nome } já está no catálogo.`);
            return;
        }

        this.pokemons.push(pokemon);
        console.log(`[OK] ${ pokemon.nome } adicionado ao catálogo.`);
    }

    encontrar(pokemon: string): PokemonResumo | undefined {
        return this.pokemons.find(item => item.nome == pokemon);
    }

    listar(): void {
        if (this.pokemons.length === 0) {
            console.log("[AVISO] Catálogo vazio.");
            return;
        }

        this.pokemons.forEach(pokemon => {
            console.log(`#${ pokemon.id } - ${ pokemon.nome } | Tipos: ${ pokemon.tipos.join(", ") }`);
        });
    }

    remover(id: number): void {
        const existe = this.pokemons.some(pokemon => pokemon.id === id);

        if (!existe) {
            console.log(`[AVISO] Nenhum Pokémon encontrado com esse ID: ${ id }`);
            return;
        }

        this.pokemons = this.pokemons.filter(pokemon => pokemon.id !== id);
        console.log(`[OK] Pokémon removido do catálogo.`);
    }
}