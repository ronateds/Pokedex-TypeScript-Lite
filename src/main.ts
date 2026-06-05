import { PokemonResumo } from "./models/Pokemon";
import * as controller from "./controllers/TerminalController";

main();

async function main() {
    let catalogo: PokemonResumo[] = [];

    /*
        Busca pokemon no catalogo local,
        se não existir, busca na PokeAPI
        e adiciona ao catalogo.
    */
    let pikachuString: string = 'pikachu';
    let pikachuObj: PokemonResumo | null =
        catalogo.find(item => item.nome == pikachuString) ??
        await controller.buscarPokenonNaAPI(pikachuString);
    if(pikachuObj) controller.adicionarAoCatalogo(catalogo, pikachuObj);

    // Simula adicionar um pokemon duplicado
    let pikachu2String: string = 'pikachu';
    let pikachu2Obj: PokemonResumo | null =
        catalogo.find(item => item.nome == pikachuString) ??
        await controller.buscarPokenonNaAPI(pikachu2String);
    if (pikachu2Obj) controller.adicionarAoCatalogo(catalogo, pikachu2Obj);

    let charmanderString: string = 'charmander';
    let charmanderObj: PokemonResumo | null =
        catalogo.find(item => item.nome == charmanderString) ??
        await controller.buscarPokenonNaAPI(charmanderString);
    if (charmanderObj) controller.adicionarAoCatalogo(catalogo, charmanderObj);

    controller.listarCatalogo(catalogo);
}