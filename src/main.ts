import { TerminalController } from "./controllers/TerminalController";
import { CatalogoPokemon } from "./models/CatalogoPokemon";
import { PokeApiService } from "./services/PokeApiService";

main();

async function main() {
    let pokeapi = new PokeApiService();
    let catalogo = new CatalogoPokemon();

    const terminalController = new TerminalController(pokeapi, catalogo);

    await terminalController.start()
}