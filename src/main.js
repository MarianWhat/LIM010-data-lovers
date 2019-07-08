<<<<<<< HEAD
/* Manejo del DOM */
const contLogin = document.getElementById('cont-login');    
const btnSubmit = document.getElementById('inputSubmit');    
const enteredUsername = document.getElementById('inputUname').value;
const enteredPassword = document.getElementById('inputPsw').value;
const selectPokemon = document.getElementById('select-pokemon');
const navbar = document.getElementById('navbar');
const datosPokemones = mostrarPokemones(POKEMON.pokemon);
let iconsTipo = '';
let esNull = '';
let cantMultipliers = 0;
let tiposPokemon = '';

 // Login  
btnSubmit.addEventListener('click', () => {
	if (enteredUsername === '' && enteredPassword === '') {
		pokedex.classList.add('flex');
		navbar.classList.add("flex");
		contLogin.classList.add("none");
	}
});
selectPokemon.addEventListener("change", 
	() => {
	console.log(selectPokemon.value);
	if (selectPokemon.value==='Mis Pokémones') {
		pokedex.classList.add("soloMisPokemones");
	}
});



for (let i = 0; i < datosPokemones.length; i++) { 
	pokemon = datosPokemones[i];
	tiposPokemon = pokemon.tipo;

	if (pokemon.cant_pokemon===null) {
		esNull='por-atrapar';
	}else{
		cantMultipliers = pokemon.cant_pokemon.length;
	}

	for (let n = 0; n < tiposPokemon.length; n++) {
		iconsTipo +=`<img src="img/icon-${tiposPokemon[n]}.png" alt="${tiposPokemon[n]}">`;
	}
	
	pokedex.innerHTML +=`<div class="content-pokemones display-flex ${esNull}">
          <span class="cant-multipliers">x${cantMultipliers}</span>
          <img class="img-pokemon" src="${pokemon.imagen}">
          <div class="contenido-poke">
            <h2 class="nombre-pokemon">${pokemon.nombre}</h2>
            <p class="num-pokemon">#${pokemon.num}</p>
            <div class="cont-tipo">${iconsTipo}</div>
          </div>
        </div>`;
  iconsTipo='';
  esNull='';
}
=======
const header = document.getElementById('header');
const contLogin = document.getElementById('cont-login');
const btnSubmit = document.getElementById('input-submit');
const mensajeAlerta = document.getElementById('mensaje-alerta');
const btnMostrarClave = document.getElementById('icon-clave');
const enteredUsername = document.getElementById('input-name');
const enteredPassword = document.getElementById('input-psw');

const selectPokemon = document.getElementById('select-pokemon');
const selectName = document.getElementById('select-name');
const selectSpawns = document.getElementById('select-spawns');
const selectType = document.getElementById('select-type');
const selectWeaknesses = document.getElementById('select-weaknesses');
const navbar = document.getElementById('navbar');


let sectionPokedex = document.getElementById('pokedex');
let pokedexToShow = getAllPokemon();
let misPokemon = getCatchedPokemon();
let cadenaMostrar = '';
let claveOculta = 0;

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
btnMostrarClave.addEventListener('click', () =>{
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
selectPokemon.addEventListener('change', () => {
  switch (selectPokemon.value) {
  case 'all':
    renderPokedex(getAllPokemon());
    break;
  case 'catched':
    renderPokedex(getCatchedPokemon());
    break;
  case 'uncatched':
    renderPokedex(getUncatchedPokemon());
    break;
  };
});
selectName.addEventListener('change', () => {
  switch (selectName.value) {
  case 'default':
    renderPokedex(getAllPokemon());
    break;
  case 'asc':
    orderAscPokemon(pokedexToShow);
    renderPokedex(pokedexToShow);
    break;
  case 'desc':
    orderDescPokemon(pokedexToShow);
    renderPokedex(pokedexToShow);
    break;
  };
});
selectSpawns.addEventListener('change', () => {
  switch (selectSpawns.value) {
  case 'default':
    renderPokedex(getAllPokemon());
    break;
  case 'ascSpawns':
    orderAscSpawns(misPokemon);
    renderPokedex(misPokemon);
    break;
  case 'descSpawns':
    orderDescSpawns(misPokemon);
    renderPokedex(misPokemon);
    break;
  };
});
selectType.addEventListener('change', () => {
  if (selectType.value === 'default') {
    renderPokedex(getAllPokemon());
  } else {
    renderPokedex(getTypePokemon(selectType.value));
  }
});
selectWeaknesses.addEventListener('change', () => {
  if (selectWeaknesses.value === 'default') {
    renderPokedex(getAllPokemon());
  } else {
    renderPokedex(getWeaknessesPokemon(selectWeaknesses.value));
  }
});
const renderPokedex = (pokemonList) => {
  sectionPokedex.innerHTML = '';
  for (let pokemon of pokemonList.pokemon) {
    let esNull = '';
    let cantMultipliers = 0;
    let iconsTipo = '';

    if (pokemon.multipliers === null) esNull = 'por-atrapar';
    else cantMultipliers = pokemon.multipliers.length;

    for (let pokemonType of pokemon.type)
      iconsTipo += `<img src="img/icon-${pokemonType}.png" alt="${pokemonType}">`;

    sectionPokedex.innerHTML +=
      `<div class="content-pokemones display-flex ${esNull}">
			<span class="cant-multipliers">x${cantMultipliers}</span>
			<img class="img-pokemon" src="${pokemon.img}">
			<div class="contenido-poke">
				<h2 class="nombre-pokemon">${pokemon.name}</h2>
				<p class="num-pokemon">#${pokemon.num}</p>
        <div class="cont-tipo">${iconsTipo}</div>
				<div>${pokemon.avgSpawns}</div>        
			</div>
		</div>`;
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
>>>>>>> c4f042e458ccae512bbe44393cb5fc8d80d569cf

