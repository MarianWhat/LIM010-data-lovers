const reducirDataPokemon = (data) => {
  let newArray = [];
  for (let infoPokemon of data) {
    let reducedInfoPokemon = {
      id: infoPokemon.id,
      num: infoPokemon.num,
      name: infoPokemon.name,
      img: infoPokemon.img,
      type: infoPokemon.type,
      multipliers: infoPokemon.multipliers,
      avgSpawns: infoPokemon.avg_spawns,
      weaknesses: infoPokemon.weaknesses,
      egg: infoPokemon.egg,
      spawnTime: infoPokemon.spawn_time,
      candy: infoPokemon.candy,
      candyCount: infoPokemon.candy_count,
      weight: infoPokemon.weight,
      height: infoPokemon.height
    };
    newArray.push(reducedInfoPokemon);
  }
  return newArray;
};
const calculateEggPercentage = (data) => {
  let totalPokemon = data.length;
  let total2KmEggs = 0, total5KmEggs = 0, total10KmEggs = 0, totalNoEggs = 0;
  for (let pokemon of data) {
    switch (pokemon.egg) {
    case '2 km':
      total2KmEggs++;
      break;
    case '5 km':
      total5KmEggs++;
      break;
    case '10 km':
      total10KmEggs++;
      break;
    default:
      totalNoEggs++;
    }
  }
  return {
    'km2': ((total2KmEggs / totalPokemon) * 100).toFixed(2),
    'km5': ((total5KmEggs / totalPokemon) * 100).toFixed(2),
    'km10': ((total10KmEggs / totalPokemon) * 100).toFixed(2),
    'noEgg': ((totalNoEggs / totalPokemon) * 100).toFixed(2)
  };
};
const getPokemonTypes = (data) => {
  let listOfPokemonTypes = [];
  for (let pokemon of data) {
    for (let type of pokemon.type)
      if (!(listOfPokemonTypes.includes(type)))
        listOfPokemonTypes.push(type);
  }
  return listOfPokemonTypes;
};
const masterSorter = (pokedexToShow, nameSorterValue, avgSpawnsSorterValue) => {
  if ((nameSorterValue !== 'default') && (avgSpawnsSorterValue === 'default')) {// el usuario solicito ordenar por nombre    
    return (nameSorterValue === 'ascName') ? orderAscName(pokedexToShow) : orderDescName(pokedexToShow);
  }
  if ((nameSorterValue === 'default') && (avgSpawnsSorterValue !== 'default')) {// el usuario solicito ordenar por avg spawn
    return (avgSpawnsSorterValue === 'ascSpawns') ? orderAscSpawns(pokedexToShow) : orderDescSpawns(pokedexToShow);
  }
  return ((nameSorterValue === 'default') && (avgSpawnsSorterValue === 'default')) ? orderIdPokemon(pokedexToShow) : false;
};
const orderIdPokemon = (pokedexToShow) => {
  return pokedexToShow.sort((pkmA, pkmB) => {
    if (pkmA.id < pkmB.id) return -1;
  });
};
const orderAscName = (pokedexToShow) => {
  return pokedexToShow.sort((pkmA, pkmB) => {
    if (pkmA.name < pkmB.name) return -1;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
  });
};
const orderDescName = (pokedexToShow) => {
  return pokedexToShow.sort((pkmA, pkmB) => {
    if (pkmA.name > pkmB.name) return -1;
  });
};
const orderAscSpawns = (pokedexToShow) => {
  return pokedexToShow.sort((pkmA, pkmB) => {
    if (pkmA.avgSpawns < pkmB.avgSpawns) return -1;
  });
};
const orderDescSpawns = (pokedexToShow) => {
  return pokedexToShow.sort((pkmA, pkmB) => {
    if (pkmA.avgSpawns > pkmB.avgSpawns) return -1;
  });
};
const masterFilter = (data, pkmsFilterValue, typeFilterValue, weaknessFilterValue, eggFilterValue) => {
  return data.filter(pokemon => {
    return (
      complyPkmsFilter(pokemon, pkmsFilterValue)
      && complyTypeFilter(pokemon, typeFilterValue)
      && complyWeaknessFilter(pokemon, weaknessFilterValue)
      && complyEggFilter(pokemon, eggFilterValue)
    ) ? true : false;
  });
};
const complyPkmsFilter = (pokemon, value) => {
  switch (value) {
  case 'catched':
    return (pokemon.multipliers);
  case 'uncatched':
    return !(pokemon.multipliers);
  default:
    return true;
  };
};
const complyTypeFilter = (pokemon, value) => {
  if (value === 'default') return true;
  else return (pokemon.type.includes(value)) ? true : false;
};
const complyWeaknessFilter = (pokemon, value) => {
  if (value === 'default') return true;
  else return (pokemon.weaknesses.includes(value)) ? true : false;
};
const complyEggFilter = (pokemon, value) => {
  if (value === 'default') return true;
  else return (pokemon.egg === value) ? true : false;
};
window.calculateEggPercentage = calculateEggPercentage;
window.getPokemonTypes = getPokemonTypes;
window.masterSorter = masterSorter;
window.orderIdPokemon = orderIdPokemon;
window.orderAscName = orderAscName;
window.orderDescName = orderDescName;
window.orderAscSpawns = orderAscSpawns;
window.orderDescSpawns = orderDescSpawns;
window.masterFilter = masterFilter;
window.complyPkmsFilter = complyPkmsFilter;
window.complyTypeFilter = complyTypeFilter;
window.complyWeaknessFilter = complyWeaknessFilter;
window.complyEggFilter = complyEggFilter;
window.reducirDataPokemon = reducirDataPokemon;

