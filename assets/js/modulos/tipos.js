import Animal from "./animal.js";

let audioPlayer = document.getElementById("player");
class Leon extends Animal {
  constructor(name, age, images, comments, sounds) {
    super(name, age, images, comments, sounds);
  }

  rugir() {
    audioPlayer.src = `./${this._sounds}`;
    audioPlayer.play();
  }
}

class Lobo extends Animal {
  constructor(name, age, images, comments, sounds) {
    super(name, age, images, comments, sounds);
  }
  aullar() {
    audioPlayer.src = `./${this._sounds}`;
    audioPlayer.play();
  }
}

class Oso extends Animal {
  constructor(name, age, images, comments, sounds) {
    super(name, age, images, comments, sounds);
  }
  grunir() {
    audioPlayer.src = `./${this._sounds}`;
    audioPlayer.play();
  }
}

class Serpiente extends Animal {
  constructor(name, age, images, comments, sounds) {
    super(name, age, images, comments, sounds);
  }
  sisear() {
    audioPlayer.src = `./${this._sounds}`;
    audioPlayer.play();
  }
}

class Aguila extends Animal {
  constructor(name, age, images, comments, sounds) {
    super(name, age, images, comments, sounds);
  }
  chillar() {
    audioPlayer.src = `./${this._sounds}`;
    audioPlayer.play();
  }
}


// Se puede hacer con else if

/* const getInstance = (name, age, images, comments, sounds) =>{
    if(name === "Leon"){
        return new Leon(name, age, images, comments, sounds);
    }else if(name === "Lobo"){
        return new Lobo(name, age, images, comments, sounds);
    }else if(name === "Oso"){
        return new Oso(name, age, images, comments, sounds);
    }else if(name === "Serpiente"){
        return new Serpiente(name, age, images, comments, sounds);
    }else if(name === "Aguila"){
        return new Aguila(name, age, images, comments, sounds);
    }else{
        throw new Error("No se encontro el animal");
    }
} */

//se puede hacer con ternarios:
/* const getInstance = (name, age, images, comments, sounds) => {
    name === "Leon"
        ? new Leon(name, age, images, comments, sounds)
        : name === "Lobo"
            ? new Lobo(name, age, images, comments, sounds)
            : name === "Oso"
                ? new Oso(name, age, images, comments, sounds)
                : name === "Serpiente"
                    ? new Serpiente(name, age, images, comments, sounds)
                    : name === "Aguila"
                        ? new Aguila(name, age, images, comments, sounds)
                        : undefined
} */


// Se puede hacer con un switch
const getInstance = (name, age, images, comments, sounds) =>{
    switch (name) {
        case "Leon":
            return new Leon(name, age, images, comments, sounds);
        case "Lobo":
            return new Lobo(name, age, images, comments, sounds);
        case "Oso":
            return new Oso(name, age, images, comments, sounds);
        case "Serpiente":
            return new Serpiente(name, age, images, comments, sounds);
        case "Aguila":
            return new Aguila(name, age, images, comments, sounds);
        default:
            throw new Error("No se encontro el animal");
    }
}

export default getInstance;
