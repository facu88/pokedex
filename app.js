const pokeCard = document.querySelector('[data-poke-card]');
const pokeName = document.querySelector('[data-poke-name]');
const pokeImg = document.querySelector('[data-poke-img]');
const pokeImgContainer = document.querySelector('[data-poke-img-container]');
const pokeId = document.querySelector('[data-poke-id]');
const pokeTypes = document.querySelector('[data-poke-types]');
const pokeStats = document.querySelector('[data-poke-stats]');


const typeColors = {
  electric: '#FFEA70',
  normal: '#B09398',
  fire: '#FF675C',
  water: '#0596C7',
  ice: '#AFEAFD',
  rock: '#999799',
  flying: '#7AE7C7',
  grass: '#4A9681',
  psychic: '#FFC6D9',
  ghost: '#561D25',
  bug: '#A2FAA3',
  poison: '#795663',
  ground: '#D2B074',
  dragon: '#DA627D',
  steel: '#1D8A99',
  fighting: '#2F2F2F',
  default: '#2A1A1F',
};

const searchPokemon = event => {
  event.preventDefault();
  const {

  value} = event.target.pokemon;
  fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
    .then(data => data.json())
    .then(response => renderPokemonData(response))
}

const renderPokemonData = data => {
  const sprite = data.sprites.front_default;
  const {
    stats,
    types
  } = data;
  pokeName.textContent = data.name;
  pokeImg.setAttribute('src', sprite);
  pokeId.textContent = `Nº ${data.id}`;
  // setCardColor(types);
  renderPokemonType(types);
}
const renderPokemonType = types => {
  pokeTypes.innerHTML = '';
  types.forEach(type => {
    const typeTextElement = document.createElement("div");
    typeTextElement.style.color = typeColors[type.type.name];
    typeTextElement.textContent = type.type.name;
    pokeTypes.appendChild(typeTextElement);
  })
}

// const setCardColor= types=>{
//   const colorOne = typeColors[types[0].type.name];
//     const colorTwo = types[1] ? typeColors[types[1].type.name] : typeColors.default;
//     pokeImg.style.background =  `radial-gradient(${colorTwo} 33%, ${colorOne} 33%)`;
//     pokeImg.style.backgroundSize = ' 5px 5px';
// }

// captura el id el campo seleccionado
var campoTexto = "Editbox1"; // por defecto var global
entradas = document.getElementsByTagName("input"); // toma el grupo de input
// genere un listening para el grupo de input
for (var i = 0; i < entradas.length; i++) {
  entradas[i].addEventListener('click', function(evt) {
    // filtra solo los input text
    if (evt.target.type == 'text') {
      campoTexto = evt.target.id; // optiene el id
    }// } else if (evt.target.type == 'submit') {
    //   campoTexto = evt.target.searchPokemon();
    // }
  });
}
// para el text area
// document.getElementById("TextArea1").addEventListener('click',function (evt) {
//                     campoTexto = evt.target.id   // optiene el id
//                });

function str1(valor) {
  var elemento = document.getElementById(campoTexto);
  document.getElementById(campoTexto).focus(); // foco del campo
  var value = elemento.value;
  elemento.value = value + valor;

}
function enviar_formulario(){
   document.formulario1.submit()
}
function submitChar() {
  var elemento = document.getElementById(campoTexto);
  elemento.value.submit(campoTexto);
  searchPokemon();
}

function deleteChar() {
  var elemento = document.getElementById(campoTexto);
  elemento.value = elemento.value.slice(0, -1)
}
