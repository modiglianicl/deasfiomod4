import dataAnimals from "./animales.js";
import getInstance from "./modulos/tipos.js";

const animalSelect = document.getElementById("animal");
const preview = document.getElementById("preview");
const boton = document.getElementById("btnRegistrar");

let imagesSrc;
let soundSrc;
let tarjetas = [];

//Acá selecciona el tipo de animal y los mostramos en el preview
animalSelect.addEventListener("change", async () => {
  const name = animalSelect.value; // Nos traemos el valor de la seleccion
  const animals = await dataAnimals.getData(); // Traemos los animales del json
  const animal = animals.find((animal) => animal.name === name); //
  //Definimos la imagen y el sonido para guardarlo en las variables globales
  imagesSrc = `./assets/imgs/${animal.imagen}`; // Guardamos la imagen
  soundSrc = `./assets/sounds/${animal.sonido}`; // Guardamos el sonido
  preview.style.backgroundImage = `url(${imagesSrc})`; // Mostramos la imagen en preview
});

//Botón para registrar el animal
boton.addEventListener("click", () => {
  const name = animalSelect.value;
  const age = document.getElementById("edad").value;
  const comments = document.getElementById("comentarios").value;

  // Validamos que todos los campos estén completos
  if (name && age && comments) {
    let animalObject = getInstance(name, age, imagesSrc, comments, soundSrc); // obtenemos el animal instanciado

    tarjetas.push(animalObject); // agregamos el animal al array de animales de la linea 10

    card();
  } else {
    alert("Por favor, llene todos los campos del formulario");
  }
});

//Funcion para agregar los animales en una card

const card = () => {
  const cardInvest = document.getElementById("Animales");
  cardInvest.innerHTML = "";
  tarjetas.forEach((animal, i) => {
    cardInvest.innerHTML += `
    <div class="px-3 pb-2">
      <div class="bg-dark text-white">
        <img height="200" src="${animal._images}"  data-toggle="modal" data-target="#exampleModal" onclick="modalDetails('${i}')" />
          <div>
            <button onclick="playSound('${animal._name}')" class="btn btn-secondary w-100"><img height="30" src="assets/imgs/audio.svg" /> 
            </button>
          </div>
      </div>
    </div>
    `;
  });
};

//Funcion para ejecutar el método de sonido. se llama con el objeto window para que esté global en toda la pagina

window.playSound = (name) => {
  const animal = tarjetas.find((animal) => animal._name === name);

  if (name === "Leon") {
    animal.rugir();
    console.log(animal.rugir());
  } else if (name === "Lobo") {
    animal.aullar();
  } else if (name === "Oso") {
    animal.grunir();
  } else if (name === "Serpiente") {
    animal.sisear();
  } else if (name === "Aguila") {
    animal.chillar();
  }
};


//Funcion para mostrar el modal de los animales
window.modalDetails = (i) => {
  
  // aqui va la solución para mostrar el modal de los animales deben investigar

}
