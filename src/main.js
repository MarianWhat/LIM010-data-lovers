const header = document.getElementById('header');
const contLogin = document.getElementById('cont-login');
const btnSubmit = document.getElementById('inputSubmit');
const mensajeAlerta = document.getElementById('mensaje-alerta');
const btnMostrarClave = document.getElementById('iconClave');
const enteredUsername = document.getElementById('inputUname');
const enteredPassword = document.getElementById('inputPsw');
const selectPokemon = document.getElementById('select-pokemon');
const selectName = document.getElementById('select-name');
const selectAvgSpawns = document.getElementById('select-avgSpawns');
const selectType = document.getElementById('select-type');
const selectWeaknesses = document.getElementById('select-weaknesses');
const navbar = document.getElementById('navbar');
const btnMenu = document.getElementById('btn-menu');

let sectionPokedex = document.getElementById('pokedex');
let pokedexToShow = getAllPokemon();
let cadenaMostrar = '';
let claveOculta = 0;
let menuOpen = 0;

btnSubmit.addEventListener('click', () => {
  if (enteredUsername.value === '' && enteredPassword.value === '') {
    sectionPokedex.classList.add('flex');
    navbar.classList.add('flex');
    contLogin.classList.add('none');
    header.classList.add('show-elements');
  } else {
    mensajeAlerta.innerHTML = '**Usuario o/y contraseña incorrecta, intenta de nuevo.';
    enteredPassword.value = '';
    enteredUsername.value = '';
  }
});
btnMostrarClave.addEventListener('click', () => {
  if (claveOculta === 0) {
    enteredPassword.setAttribute('type', 'text');
    claveOculta = 1;
    btnMostrarClave.classList.add('mostrar');
  } else {
    enteredPassword.setAttribute('type', 'password');
    claveOculta = 0;
    btnMostrarClave.classList.remove('mostrar');
  }
});
btnMenu.addEventListener('click', () =>{
  if (menuOpen === 0) {
    navbar.classList.add('navbar-show');
    btnMenu.classList.add('btn-menu-activo');  
    menuOpen = 1;  
  } else {    
    navbar.classList.remove('navbar-show');
    btnMenu.classList.remove('btn-menu-activo');  
    menuOpen = 0;  
  }
});
selectPokemon.addEventListener('change', () => {
  switch (selectPokemon.value) {
  case 'all':
    pokedexToShow = getAllPokemon();
    renderPokedex(pokedexToShow);
    reset();
    break;
  case 'catched':
    pokedexToShow = getCatchedPokemon();
    renderPokedex(pokedexToShow);
    reset();
    break;
  case 'uncatched':
    pokedexToShow = getUncatchedPokemon();
    renderPokedex(pokedexToShow);
    reset();
    break;
  };
});
selectName.addEventListener('change', () => {
  switch (selectName.value) {
  case 'default':
    selectAvgSpawns.value = 'default';
    orderIdPokemon(pokedexToShow);
    renderPokedex(pokedexToShow);   // aqui con el pokedextoshow ya ordenado, lo mando a renderpokedex para que actualice la pantalla.
    break;
  case 'asc':
    selectAvgSpawns.value = 'default';
    orderAscPokemon(pokedexToShow);
    renderPokedex(pokedexToShow);   // aqui con el pokedextoshow ya ordenado, lo mando a renderpokedex para que actualice la pantalla.
    break;
  case 'desc':
    selectAvgSpawns.value = 'default';
    orderDescPokemon(pokedexToShow);
    renderPokedex(pokedexToShow);
    break;
  };
});
selectAvgSpawns.addEventListener('change', () => {
  switch (selectAvgSpawns.value) {
  case 'default':
    selectName.value = 'default';
    orderIdPokemon(pokedexToShow);
    renderPokedex(pokedexToShow);   // aqui con el pokedextoshow ya ordenado, lo mando a renderpokedex para que actualice la pantalla.
    break;
  case 'ascSpawns':
    selectName.value = 'default';
    orderAscSpawns(pokedexToShow);
    renderPokedex(pokedexToShow);   // aqui con el pokedextoshow ya ordenado, lo mando a renderpokedex para que actualice la pantalla.
    break;
  case 'descSpawns':
    selectName.value = 'default';
    orderDescSpawns(pokedexToShow);
    renderPokedex(pokedexToShow);
    break;
  };
});
// Otra seccion
selectType.addEventListener('change', () => {
  if (selectType.value === 'default') {
    renderPokedex(getAllPokemon());
    resetDos();
    selectWeaknesses.value = 'default';
  } else {
    renderPokedex(getTypePokemon(selectType.value, getAllPokemon()));
    resetDos();
    selectWeaknesses.value = 'default';
  }
});
selectWeaknesses.addEventListener('change', () => {
  if (selectWeaknesses.value === 'default') {
    renderPokedex(getAllPokemon());
    resetDos();
    selectType.value = 'default';
  } else {
    renderPokedex(getTypePokemon(selectWeaknesses.value, getAllPokemon()));
    resetDos();
    selectType.value = 'default';
  }
});
const renderPokedex = (listOfPokemonToShow) => {
  sectionPokedex.innerHTML = '';
  for (let pokemon of listOfPokemonToShow) {
    let esNull = '';
    let cantMultipliers = 0;
    let iconsTipo = '';
    let tipoEgg = '';
    
    if (pokemon.multipliers === null) esNull = 'por-atrapar';
    else cantMultipliers = pokemon.multipliers.length;
    if (pokemon.egg !== 'Not in Eggs') {
      tipoEgg = `<span class="line-vertical"></span><div class="item-tripack"><div class='cont-tipo'><img src="img/icon-huevo.png" alt="icon-huevo">
      <p class='text-tripack'>${pokemon.egg}</p></div></div>`;
    }
    for (let pokemonType of pokemon.type)
      iconsTipo += `<div class='cont-tipo'><img src="img/icon-${pokemonType}.png" alt="${pokemonType}">
      <strong class='text-tripack'>${pokemonType}</strong></div>`;

    sectionPokedex.innerHTML += `<div class="content-pokemones display-flex ${esNull}">
    <span class="cant-multipliers">x${cantMultipliers}</span>
    <img class="img-pokemon" src="${pokemon.img}">
    <div class="contenido-poke">
      <h2 class="nombre-pokemon">${pokemon.name}</h2>
<!-- <p class="num-pokemon">#${pokemon.num}</p> -->
      <div class='info-tripack display-flex'>
        <div class="item-tripack ">${iconsTipo}</div>
        ${tipoEgg}
      </div>
      <div class='info-tripack display-flex'>
        <div class='item-tripack'>
          <p class="num-pokemon">${pokemon.weight}</p>
          <strong class='text-tripack'>Peso</strong>
        </div>
        <div class='item-tripack'>
          <p class="num-pokemon">${pokemon.avgSpawns}</p>
          <strong class='text-tripack'>% Spawns</strong>
        </div>
        <div class='item-tripack'>
          <p class="num-pokemon">${pokemon.height}</p>
          <strong class='text-tripack'>Altura</strong>
        </div>
      </div>
      <table class="more-info">
  <tr>
    <th>Hora de Spawn:</th>
    <td>${pokemon.spawnTime}</td>
  </tr>
  <tr>
    <th>Debilidad:</th>
    <td>${ pokemon.weaknesses.toString().replace(/,/g, ', ')}</td>
  </tr>
  <tr>
    <th>Caramelo:</th>
    <td>${pokemon.candy}</td>
  </tr>
  <tr>
    <th>Cant. Caramelo:</th>
    <td>${pokemon.candyCount}</td>
  </tr>
</table>
    </div>
    
    <button id="" class="btn btn-more"></button>
</div>` ;
  };
};
const renderTypeOrWeaknessesPokedex = (select, pokemonList) => {
  for (let index = 0; index < pokemonList.length; index++) {
    select.innerHTML += `<option value=${pokemonList[index]}>${pokemonList[index]}</option>`;
  };
};
renderPokedex(pokedexToShow);
renderTypeOrWeaknessesPokedex(selectType, getListTypePokemon());
renderTypeOrWeaknessesPokedex(selectWeaknesses, getListWeaknessesPokemon());
const reset = () =>{
  selectName.value = 'default';
  selectAvgSpawns.value = 'default';
  selectType.value = 'default';
  selectWeaknesses.value = 'default';
};
const resetDos = () =>{
  selectPokemon.value = 'all';
  selectName.value = 'default';
  selectAvgSpawns.value = 'default';
};