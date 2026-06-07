import { TerminalController } from "./controllers/TerminalController";
import { PokemonResumo } from "./models/Pokemon";
import { BoxService } from "./services/BoxService";
import { PokeApiService } from "./services/PokeApiService";

main();

async function main(): Promise<void> {
    // Instancia serviços
    let pokeApi: PokeApiService = new PokeApiService();
    let boxService: BoxService<PokemonResumo> = new BoxService<PokemonResumo>();

    // Instancia controller
    const terminalController = new TerminalController(pokeApi, boxService);

    // Executa Instruções
    await terminalController.start();
}