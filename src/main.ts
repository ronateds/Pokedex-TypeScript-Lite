import * as controller from "./controllers/TerminalController";
import { Catalogo } from "./models/Catalogo";

main();

async function main() {
    let catalogo = new Catalogo();

    controller.listarCatalogo(catalogo);

    await controller.adicionarPokemon(catalogo, 'pikachu');
    await controller.adicionarPokemon(catalogo, 'pikachu');
    await controller.adicionarPokemon(catalogo, 'charmander');
    await controller.adicionarPokemon(catalogo, '42');
    await controller.adicionarPokemon(catalogo, 'pokemon-inexistente');

    controller.listarCatalogo(catalogo);
    controller.removerDoCatalogo(catalogo, 25);
    controller.listarCatalogo(catalogo);
}