import { CatalogoPokemon } from "../models/CatalogoPokemon";
import { PokemonResumo } from "../models/Pokemon";
import * as msg from "../utils/textFormatters";

export class BoxService<T extends PokemonResumo> {
    private readonly catalogo: CatalogoPokemon;

    constructor() {
        this.catalogo = new CatalogoPokemon()
    }

    public adicionar(pokemon: T): void {
        if (this.catalogo.existe(pokemon.id)) {
            console.log(`[AVISO] ${ pokemon.nome } já está no catálogo.\n`);
            return;
        }

        this.catalogo.adicionar(pokemon);

        console.log(msg.adicionado(pokemon));
    }

    public encontrar(pokemonNomeOuId: string | number): PokemonResumo | undefined {
        return this.catalogo.encontrar(pokemonNomeOuId);
    }

    public listar(): void {
        let pokemons = this.catalogo.listar();

        if (pokemons.length === 0) {
            console.log("[AVISO] Catálogo vazio.\n");
            return
        }

        console.log('Catálogo atual:');

        pokemons.forEach(pokemon => {
            console.log(msg.listar(pokemon));
        });

        console.log(); // só pra formatação, deixa uma linha vazia no final
    }

    public remover(id: number): void {
        const existe = this.catalogo.existe(id);

        if (!existe) {
            console.log(`[AVISO] Nenhum Pokémon encontrado com esse ID: ${ id }\n`);
            return;
        }

        this.catalogo.remover(id);
        console.log(`[OK] Pokémon removido do catálogo.\n`);
    }
}