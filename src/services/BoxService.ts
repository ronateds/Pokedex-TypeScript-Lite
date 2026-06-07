import { CatalogoPokemon } from "../models/CatalogoPokemon";
import { PokemonResumo } from "../models/Pokemon";

export class BoxService<T extends PokemonResumo> {
    private readonly catalogo: CatalogoPokemon;

    constructor () {
        this.catalogo = new CatalogoPokemon()
    }

    public adicionar(pokemon: T): void {
        this.catalogo.adicionar(pokemon);
    }

    public encontrar(pokemonName: string): void {
        this.catalogo.encontrar(pokemonName);
    }

    public listar(): void {
        this.catalogo.listar();
    }

    public remover(id: number): void {
        this.catalogo.remover(id);
    }
}