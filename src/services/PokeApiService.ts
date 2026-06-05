import { PokemonApiResponse, PokemonResumo } from '../models/Pokemon';

export async function buscarPokemon(nomeOuId: string): Promise<PokemonResumo | null> {
    return new Promise(async (resolve) => {
        try {
            const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${ nomeOuId }`);

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