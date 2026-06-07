import { PokemonResumo } from "../models/Pokemon";
import { BoxService } from "../services/BoxService";
import { PokeApiService } from "../services/PokeApiService";

export class TerminalController {
    constructor(
        private readonly api: PokeApiService,
        private readonly boxService: BoxService<PokemonResumo>
    ) {}

    public async start(): Promise<void> {
        this.listarCatalogo();

        await this.adicionarPokemon('pikachu');
        await this.adicionarPokemon('pikachu');
        await this.adicionarPokemon('charmander');
        await this.adicionarPokemon('42');
        await this.adicionarPokemon('pokemon-inexistente');

        this.listarCatalogo();
        this.removerDoCatalogo(25);
        this.listarCatalogo();
    }

    // Busca pokemon no catalogo local, se não existir, busca na PokeAPI e adiciona ao catalogo.
    private async adicionarPokemon(pokemonNameorId: string): Promise<void> {
        const pokemonObj: PokemonResumo | null =
            this.boxService.encontrar(pokemonNameorId) ??
            await this.api.buscarPokemon(pokemonNameorId);

        if (pokemonObj) this.adicionarAoCatalogo(pokemonObj);
    }

    private adicionarAoCatalogo(pokemon: PokemonResumo): void {
        this.boxService.adicionar(pokemon);
    }

    private listarCatalogo(): void {
        this.boxService.listar();
    }

    private removerDoCatalogo(pokemonId: number): void {
        this.boxService.remover(pokemonId)
    }
}