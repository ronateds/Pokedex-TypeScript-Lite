import { PokemonApiResponse, PokemonResumo } from '../models/Pokemon';

export class PokeApiService {
    private readonly baseUrl: string;

    constructor(baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/' ) {
        this.baseUrl = baseUrl
    }

    public async buscarPokemon(nomeOuId: string): Promise<PokemonResumo | null> {
        return new Promise(async (resolve) => {
            try {
                const resposta = await fetch(`${ this.baseUrl + nomeOuId }`);

                if (!resposta.ok) {
                    console.log(`[ERRO] Pokémon não encontrado: ${ nomeOuId }`);
                    resolve(null);
                    return;
                }

                const dados: PokemonApiResponse = await resposta.json();

                const pokemon: PokemonResumo = {
                    id: dados.id,
                    nome: dados.name,
                    tipos: dados.types.map((item: any) => item.type.name),
                    altura: dados.height,
                    peso: dados.weight
                };

                resolve(pokemon);
            } catch (erro) {
                console.log("[ERRO] Não foi possível buscar o Pokémon.");
                resolve(null);
            }
        });
    }
}