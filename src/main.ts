import * as controller from "./controllers/TerminalController";
import { CatalogoPokemon } from "./models/CatalogoPokemon";

main();

async function main() {
    let catalogo = new CatalogoPokemon();

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