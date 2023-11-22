let numeroRandom = Math.floor(Math.random() * 1000) + 1;

const pokemonAPI = "https://pokeapi.co/api/v2/pokemon/" + numeroRandom + "/";
const divImageElement = document.querySelector(".imagen");
const elementoImagen = document.getElementById("pokemon-img");
const nombreElement = document.getElementById("pokemon-name");
const idElement = document.getElementById("pokemon-id");
const hpElement = document.getElementById("hp-pokemon");
const tipoElement = document.querySelector(".type");
const tipoElement2 = document.querySelector(".type2");
const tipoTextElement = document.getElementById("pokemon-type-1");
const tipoTextElement2 = document.getElementById("pokemon-type-2");
const cardElement = document.querySelector(".card");


fetch(pokemonAPI)
  .then(response => response.json())
  .then(data => {
    
    console.log(data);
    nombreElement.innerHTML = data.name;
    elementoImagen.src = data.sprites.front_default;
    idElement.innerHTML = "#" + data.id;
    tipoTextElement.innerHTML = data.types[0].type.name;
    if(data.types.length == 1){
      tipoTextElement2.innerHTML = "";
      tipoElement2.classList.add("hide");
    }else{
      tipoTextElement2.innerHTML = data.types[1].type.name;
      tipoElement2.classList.add(data.types[1].type.name);
      document.body.classList.add(data.types[1].type.name);
    }
    tipoElement.classList.add(data.types[0].type.name);

    
    hpElement.innerHTML = data.stats[0].base_stat + "<span> HP</span>";
  }); 
