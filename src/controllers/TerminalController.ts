import { CatalogoPokemon } from "../models/CatalogoPokemon";
import { PokemonResumo } from "../models/Pokemon";
import { PokeApiService } from "../services/PokeApiService";

export class TerminalController {
    constructor(
        private readonly api: PokeApiService,
        private readonly catalogo: CatalogoPokemon
    ) {}

    public async start(): Promise<void> {
        this.listarCatalogo(this.catalogo);

        await this.adicionarPokemon(this.catalogo, 'pikachu');
        await this.adicionarPokemon(this.catalogo, 'pikachu');
        await this.adicionarPokemon(this.catalogo, 'charmander');
        await this.adicionarPokemon(this.catalogo, '42');
        await this.adicionarPokemon(this.catalogo, 'pokemon-inexistente');

        this.listarCatalogo(this.catalogo);
        this.removerDoCatalogo(this.catalogo, 25);
        this.listarCatalogo(this.catalogo);
    }

    // Busca pokemon no catalogo local, se não existir, busca na PokeAPI e adiciona ao catalogo.
    private async adicionarPokemon(catalogo: CatalogoPokemon, pokemon: string): Promise<void> {
        const pokemonObj: PokemonResumo | null =
            catalogo.encontrar(pokemon) ??
            await this.api.buscarPokemon(pokemon);

        if (pokemonObj) this.adicionarAoCatalogo(catalogo, pokemonObj);
    }

    adicionarAoCatalogo(catalogo: CatalogoPokemon, pokemon: PokemonResumo): void {
        catalogo.adicionar(pokemon)
    }

    listarCatalogo(catalogo: CatalogoPokemon): void {
        catalogo.listar()
    }

    removerDoCatalogo(catalogo: CatalogoPokemon, pokemonId: number): void {
        catalogo.remover(pokemonId)
    }
}