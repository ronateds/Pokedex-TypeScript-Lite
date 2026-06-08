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

        await this.adicionarAoCatalogo('pikachu');
        await this.adicionarAoCatalogo('pikachu');
        await this.adicionarAoCatalogo('charmander');
        await this.adicionarAoCatalogo('42');
        await this.adicionarAoCatalogo('pokemon-inexistente');

        this.listarCatalogo();
        this.removerDoCatalogo(25);
        this.removerDoCatalogo(25);
        this.listarCatalogo();
    }

    /*
      Busca pokemon no catalogo local, se não existir, busca na PokeAPI e tenta adicionar ao catalogo.
      Mesmo se o obj já está no catálogo, vai ser tentado adicionar novamente para simular o aviso de que já existe, conforme requerimento.
    */
    private async adicionarAoCatalogo(pokemonNomeOuId: string): Promise<void> {
        let pokemonObj: PokemonResumo | null =
            this.boxService.encontrar(pokemonNomeOuId) ??
            await this.api.buscarPokemon(pokemonNomeOuId);

        if (pokemonObj) this.boxService.adicionar(pokemonObj);
    }

    private listarCatalogo(): void {
        this.boxService.listar();
    }

    private removerDoCatalogo(pokemonId: number): void {
        this.boxService.remover(pokemonId);
    }
}