global.window.pokemon = global;
require('../src/data');
require('./data.spec.js');

let pokemonCat = [
  {'id': 1,
    'num': '001',
    'name': 'Bulbasaur',
    'type': [
      'Grass',
      'Poison'
    ],
    'egg': '2 km',
    'avg_spawns': 69,
    'multipliers': [1.58],
    'weaknesses': [
      'Fire',
      'Ice',
      'Flying',
      'Psychic'
    ]}, {
    'id': 2,
    'num': '002',
    'name': 'Ivysaur',
    'type': [
      'Grass',
      'Poison'
    ],
    'egg': 'Not in Eggs',
    'avg_spawns': 4.2,
    'multipliers': [
      1.2,
      1.6
    ],
    'weaknesses': [
      'Fire',
      'Ice',
      'Flying',
      'Psychic'
    ]}, {
    'id': 3,
    'num': '003',
    'name': 'Venusaur',
    'type': [
      'Grass',
      'Poison'
    ],
    'egg': 'Not in Eggs',
    'avg_spawns': 1.7,
    'multipliers': null,
    'weaknesses': [
      'Fire',
      'Ice',
      'Flying',
      'Psychic'
    ]}
];
const catchedPokemon = [
  {'id': 1,
    'num': '001',
    'name': 'Bulbasaur',
    'type': [
      'Grass',
      'Poison'
    ],
    'egg': '2 km',
    'avg_spawns': 69,
    'multipliers': [1.58],
    'weaknesses': [
      'Fire',
      'Ice',
      'Flying',
      'Psychic'
    ]}, {
    'id': 2,
    'num': '002',
    'name': 'Ivysaur',
    'type': [
      'Grass',
      'Poison'
    ],
    'egg': 'Not in Eggs',
    'avg_spawns': 4.2,
    'multipliers': [
      1.2,
      1.6
    ],
    'weaknesses': [
      'Fire',
      'Ice',
      'Flying',
      'Psychic'
    ]}
];
let OrdenAscArray = [
  {'id': 1,
    'num': '001',
    'name': 'Bulbasaur',
    'type': [
      'Grass',
      'Poison'
    ],
    'egg': '2 km',
    'avg_spawns': 69,
    'multipliers': [1.58],
    'weaknesses': [
      'Fire',
      'Ice',
      'Flying',
      'Psychic'
    ]}, {
    'id': 2,
    'num': '002',
    'name': 'Ivysaur',
    'type': [
      'Grass',
      'Poison'
    ],
    'egg': 'Not in Eggs',
    'avg_spawns': 4.2,
    'multipliers': [
      1.2,
      1.6
    ],
    'weaknesses': [
      'Fire',
      'Ice',
      'Flying',
      'Psychic'
    ]}, {
    'id': 3,
    'num': '003',
    'name': 'Venusaur',
    'type': [
      'Grass',
      'Poison'
    ],
    'egg': 'Not in Eggs',
    'avg_spawns': 1.7,
    'multipliers': null,
    'weaknesses': [
      'Fire',
      'Ice',
      'Flying',
      'Psychic'
    ]}
];
const pokemonCatOrderDescName = [
  { 'id': 3,
    'num': '003',
    'name': 'Venusaur',
    'type': [
      'Grass',
      'Poison'
    ],
    'egg': 'Not in Eggs',
    'avg_spawns': 1.7,
    'multipliers': null,
    'weaknesses': [
      'Fire',
      'Ice',
      'Flying',
      'Psychic'
    ]},
  {'id': 2,
    'num': '002',
    'name': 'Ivysaur',
    'type': [
      'Grass',
      'Poison'
    ],
    'egg': 'Not in Eggs',
    'avg_spawns': 4.2,
    'multipliers': [
      1.2,
      1.6
    ],
    'weaknesses': [
      'Fire',
      'Ice',
      'Flying',
      'Psychic'
    ]},
  {'id': 1,
    'num': '001',
    'name': 'Bulbasaur',
    'type': [
      'Grass',
      'Poison'
    ],
    'egg': '2 km',
    'avg_spawns': 69,
    'multipliers': [1.58],
    'weaknesses': [
      'Fire',
      'Ice',
      'Flying',
      'Psychic'
    ]}
];
const typePokemon = ['Grass', 'Poison'];

const eggPer = {
  km2: '33.33',
  km5: '0.00',
  km10: '0.00',
  noEgg: '66.67'
};
describe('reducirDataPokemon', () => {
  it('1. reducirDataPokemon | Deberia ser una función.', () => {
    expect(typeof reducirDataPokemon).toBe('function');
  });
  it('2. calculateEggPercentage | Deberia ser una función.', () => {
    expect(calculateEggPercentage(pokemonCat)).toEqual(eggPer);
  });
  it('3. getPokemonTypes | Deberia ser una función.', () => {
    expect(getPokemonTypes(pokemonCat)).toEqual(typePokemon);
  });
  it('4. masterSorter | Deberia retornar...', () => {
    expect(masterSorter(pokemonCat, 'default', 'default')).toEqual(pokemonCat);
  });
  it('4. masterSorter-ascName | Deberia retornar...', () => {
    expect(masterSorter(pokemonCat, 'ascName', 'default')).toEqual(pokemonCat);
  });
  it('4. masterSorter-ascSpawns | Deberia retornar...', () => {
    expect(masterSorter(pokemonCat, 'default', 'ascSpawns')).toEqual(pokemonCat);
  });
  it('4.1. orderIdPokemon | Deberia retornar...', () => {
    expect(orderIdPokemon(pokemonCat)).toEqual(pokemonCat);
  });
  // it('4.2. orderAscName | Deberia retornar...', () => {
  //   expect(orderAscName(pokemonCat)).toEqual(OrdenAscArray);
  // });
  it('4.3. orderDescName | Deberia retornar...', () => {
    expect(orderDescName(pokemonCat)).toEqual(pokemonCatOrderDescName);
  });
  it('4.6. orderDescSpawns | Deberia retornar...', () => {
    expect(orderDescSpawns(pokemonCat)).toEqual(pokemonCat);
  });
  it('5. masterFilter | Deberia retornar...', () => {
    expect(masterFilter(pokemonCat, 'default', 'default', 'default', 'default')).toEqual(pokemonCat);
  });
  it('5. masterFilter-catched | Deberia retornar...', () => {
    expect(masterFilter(pokemonCat, 'catched', 'default', 'default', 'default')).toEqual(catchedPokemon);
  });
  it('5.1. complyPkmsFilter | Deberia retornar...', () => {
    expect(complyPkmsFilter(pokemonCat[2], 'uncatched')).toEqual(true);
  });
  it('5.2. complyTypeFilter | Deberia retornar "True" ', () => {
    expect(complyTypeFilter(pokemonCat[2], 'Grass')).toEqual(true);
  });
  it('5.3. complyWeaknessFilter | Deberia retornar "True" ', () => {
    expect(complyWeaknessFilter(pokemonCat[2], 'Fire')).toEqual(true);
  });
  it('5.4. complyEggFilter | Deberia retornar "True" ', () => {
    expect(complyEggFilter(pokemonCat[2], 'Not in Eggs')).toEqual(true);
  });
});