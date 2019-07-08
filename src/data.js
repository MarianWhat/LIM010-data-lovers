<<<<<<< HEAD
/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
const mostrarPokemones = (todoPokemon) => {
  const newArrayPokemones = [];
  for(let i = 0; i < todoPokemon.length; i++){
  	
  	newArrayPokemones.push({
  		id : todoPokemon[i].id, 
  		num : todoPokemon[i].num,  		
  		nombre : todoPokemon[i].name,
  		imagen : todoPokemon[i].img,
  		tipo : todoPokemon[i].type,
  		altura : todoPokemon[i].height,
        peso: todoPokemon[i].weight,
        caramelo: todoPokemon[i].candy,
        cant_caramelo: todoPokemon[i].candy_count,
        huevo: todoPokemon[i].egg,
        prom_aparicion : todoPokemon[i].avg_spawns,
        cant_pokemon: todoPokemon[i].multipliers,
        debilidad: todoPokemon[i].weaknesses,
        pre_evolucion : todoPokemon[i].prev_evolution,
        sig_evolucion : todoPokemon[i].next_evolution
  	})

  }

  return newArrayPokemones;
};

window.example = mostrarPokemones;
=======
const todoPokemon = POKEMON.pokemon;
const pokemonesArray = () => {
  const newArrayPokemones = [];
  for (let i = 0; i < todoPokemon.length; i++) {
    newArrayPokemones.push({
      id: todoPokemon[i].id, 
  		num: todoPokemon[i].num,  		
  		name: todoPokemon[i].name,
  		img: todoPokemon[i].img,
  		type: todoPokemon[i].type,
      height: todoPokemon[i].height,
      weight: todoPokemon[i].weight,
      candy: todoPokemon[i].candy,
      candyCount: todoPokemon[i].candy_count,
      egg: todoPokemon[i].egg,
      avgSpawns: todoPokemon[i].avg_spawns,
      multipliers: todoPokemon[i].multipliers,
      weaknesses: todoPokemon[i].weaknesses,
      prevEvolution: todoPokemon[i].prev_evolution,
      nextEvolution: todoPokemon[i].next_evolution
  	});
  }
  return newArrayPokemones;
};
const createEmptyObj = () => {
  return {
    pokemon: []
  };
};
const getAllPokemon = () => {
  let pokedexAll = createEmptyObj();
  pokedexAll.pokemon = pokemonesArray().filter(pkm => true);
  return pokedexAll;
};
const getCatchedPokemon = () => {
  let pokedexCatched = createEmptyObj();
  pokedexCatched.pokemon = pokemonesArray().filter(pkm => pkm.multipliers);
  return pokedexCatched;
};
const getUncatchedPokemon = () => {
  let pokedexUncatched = createEmptyObj();
  pokedexUncatched.pokemon = pokemonesArray().filter(pkm => !(pkm.multipliers));
  return pokedexUncatched;
};
const orderAscPokemon = (pokedexToShow) => {
  pokedexToShow.pokemon.sort((pkmA, pkmB) => {
    if (pkmA.name < pkmB.name) return -1;
    if (pkmA.name > pkmB.name) return 1;
    return 0;
  });
};
const orderDescPokemon = (pokedexToShow) => {
  pokedexToShow.pokemon.sort((pkmA, pkmB) => {
    if (pkmA.name > pkmB.name) return -1;
    if (pkmA.name < pkmB.name) return 1;
    return 0;
  });
};
const orderAscSpawns = (pokedexToShow) => {
  pokedexToShow.pokemon.sort((pkmA, pkmB) => {
    if (pkmA.avgSpawns < pkmB.avgSpawns) return -1;
    if (pkmA.avgSpawns > pkmB.avgSpawns) return 1;
    return 0;
  });
};
const orderDescSpawns = (pokedexToShow) => {
  pokedexToShow.pokemon.sort((pkmA, pkmB) => {
    if (pkmA.avgSpawns > pkmB.avgSpawns) return -1;
    if (pkmA.avgSpawns < pkmB.avgSpawns) return 1;
    return 0;
  });
};
const getTypePokemon = (opcion) =>{
  let pokedexUncatched = createEmptyObj();
  for (let y = 0; y < pokemonesArray().length; y++) {
    let pokemon = pokemonesArray()[y];
    for (let i = 0; i < pokemon.type.length; i++) {
      if (pokemon.type[i].indexOf(opcion) > -1) {
        pokedexUncatched.pokemon.push(pokemon);
      }
    }
  }
  return pokedexUncatched;
};
const getListTypePokemon = () =>{
  const arrayType = [];
  for (let x = 0; x < pokemonesArray().length; x++) {
    for (let y = 0; y < pokemonesArray()[x].type.length; y++) {
      arrayType.push(pokemonesArray()[x].type[y]);
    }
  }
  let sinRepetidos = [...new Set(arrayType)];
  return sinRepetidos;
};
const getWeaknessesPokemon = (opcion) =>{
  let pokedexUncatched = createEmptyObj();
  for (let y = 0; y < pokemonesArray().length; y++) {
    let pokemon = pokemonesArray()[y];
    for (let i = 0; i < pokemon.weaknesses.length; i++) {
      if (pokemon.weaknesses[i].indexOf(opcion) > -1) {
        pokedexUncatched.pokemon.push(pokemon);
      }
    }
  }
  return pokedexUncatched;
};
const getListWeaknessesPokemon = () =>{
  const arrayWeaknesses = [];
  for (let x = 0; x < pokemonesArray().length; x++) {
    for (let y = 0; y < pokemonesArray()[x].weaknesses.length; y++) {
      arrayWeaknesses.push(pokemonesArray()[x].weaknesses[y]);
    }
  }
  let sinRepetidos = [...new Set(arrayWeaknesses)];
  return sinRepetidos;
};
window.example = pokemonesArray;
>>>>>>> c4f042e458ccae512bbe44393cb5fc8d80d569cf
