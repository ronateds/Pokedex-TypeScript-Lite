import { PokemonResumo } from "./models/Pokemon";
import * as controller from "./controllers/TerminalController";

main();

async function main() {
    let catalogo: PokemonResumo[] = [];

    controller.listarCatalogo(catalogo);

    await controller.adicionarPokemon(catalogo, 'pikachu');
    await controller.adicionarPokemon(catalogo, 'pikachu');
    await controller.adicionarPokemon(catalogo, 'charmander');
    await controller.adicionarPokemon(catalogo, '42');
    await controller.adicionarPokemon(catalogo, 'pokemon-inexistente');

    controller.listarCatalogo(catalogo);
    // controller.removerDoCatalogo(catalogo, '25'); // TODO
    // controller.listarCatalogo(catalogo);
}