# Pokédex TypeScript Lite

## Sobre o projeto

O Pokédex TypeScript Lite é uma aplicação simples em Node.js com TypeScript que consulta dados de Pokémon na PokeAPI e organiza alguns resultados em um catálogo local durante a execução do programa.

## Objetivo

Praticar os principais conceitos do Módulo 01 do curso de Desenvolvimeto Backend do SCTEC:

- Node.js;
- JavaScript no back-end;
- TypeScript;
- interfaces;
- funções tipadas;
- arrays;
- objetos;
- JSON;
- métodos de array;
- classes;
- async/await;
- fetch;
- tratamento de erros;
- GitHub;
- GitFlow;
- Kanban.

## Tecnologias utilizadas

- Node.js
- TypeScript
- TSX
- PokeAPI
- Git
- GitHub

## Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:
- Node.js
- npm
- Git

## Como instalar e executar

Copie e cole os códigos abaixo no terminal.

```bash
git clone https://github.com/ronateds/Pokedex-TypeScript-Lite
cd Pokedex-TypeScript-Lite
npm install
npm run build
npm start
```
## Estrutura do projeto

```
pokedex-typescript/
├── src/
│   ├── controllers/
│   │   └── TerminalController.ts
│   ├── models/
│   │   └── CatalogoPokemon.ts
│   │   ├── Pokemon.ts
│   ├── services/
│   │   └── BoxService.ts
│   │   └── PokeApiService.ts
│   ├── utils/
│   │   └── textFormatters.ts
│   └── main.ts
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## Funcionalidades

- Buscar Pokémon por nome ou ID
- Tratar erro de Pokémon inexistente
- Transformar resposta da API em objeto simplificado
- Adicionar Pokémon ao catálogo local
- Impedir Pokémon duplicado
- Listar catálogo
- Remover Pokémon por ID
- Exibir mensagens no terminal
- Exemplos de execução
- Busca válida

## Entradas testadas:

### Adicionar Pikachu
Entrada testada: `pikachu`

Saída obtida:
```
[OK] Pokémon encontrado: pikachu
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60
```

### Entrada duplicada de Pikachu
Entrada testada: `pikachu`

Saída obtida:
```
[AVISO] pikachu já está no catálogo.
```

### Adicionar Charmander
Entrada testada: `charmander`

Saída obtida:
```
[OK] Pokémon encontrado: charmander
#25 - charmander | Tipos: fire | Altura: 6 | Peso: 85|
```

### Adicionar um Pokemón por ID
Entrada testada: `42`

Saída obtida:
```
[OK] Pokémon encontrado: golbat
#25 - golbat | Tipos: poison, flying | Altura: 16 | Peso: 550
```
### Adicionar um Pokemón inexistente
Entrada testada: `pokemon-inexistente`

Saída obtida:
```
[ERRO] Pokémon não encontrado: pokemon-inexistente
```

### Remover um Pokemón
Entrada testada: `25`

Saída obtida:
```
[OK] Pokémon removido do catálogo.
```

### Remover um Pokemón que não está no catálogo
Entrada testada: `25`

Saída obtida:
```
[AVISO] Nenhum Pokémon encontrado com esse ID: 25
```

## Conceitos aplicados

### TypeScript
Interfaces foram utilizadas no arquivo models/Pokemon.ts.
Foram utilizados parâmetros e retornos tipados em todas as funções e método do projeto.

### Interface PokemonResumo
A interface foi criada para representar os dados simplificados do Pokémon e garantir a tipagem correta do objeto que ele representa.

## Fetch e async/await
A aplicação faz consultas a PokeAPI utilizando a função fetch, e para tal é preciso utilizar funções assíncronas (async) e esperando o retorno com o (await).

## Tratamento de erros
A função de consulta na PokeAPI está envolta em um try/catch e que em casos de Pokémon inexistente ou erro retorna null, porém não quebra o sistema, apenas imprime no terminal uma mensagem de erro.

## Métodos de array utilizados
### CatalogoPokemon.ts
- `push` - adiciona pokemon no catálogo
- `some` - verifica se existe no catálogo
- `find` - busca Pokémon por ID no catálogo
- `filter` - remove Pokémon pelo ID

### BoxService.ts
- `forEach` - imprimir cada Pokémon da lista

### PokeApiService.ts
- `map` - transforma os tipos da API em array de strings

### textFormatters.ts
- `join` - formatação dos tipos para imprimir

## Classe CatalogoPokemon
Foi criado o atributo pokemons e os métodos: adicionar, existe, encontrar, listar e remover.

## Organização do Kanban

`Backlog` → `A Fazer` → `Em Andamento` → `Homologação` → `Concluído`

Link do Kanban:
https://github.com/users/ronateds/projects/14

## Branches utilizadas

- main
- develop
- feat/api-pokemon
- feat/catalogo
- docs/readme

## Autores

- ### Ronate dos Santos
- ### Willian Piccinin

Projeto desenvolvido para fins acadêmicos, no curso de Desenvolvimento Back End Node.
