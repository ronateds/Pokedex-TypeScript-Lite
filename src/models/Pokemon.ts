// src/models/Pokemon.ts

/**
 * Interface que representa o modelo simplificado de um Pokémon.
 * Utilizado para mapear o retorno da PokeAPI e salvar no catálogo local.
 */
export interface PokemonResumo {
  id: number;
  nome: string;
  tipos: string[];
  altura: number;
  peso: number;
}