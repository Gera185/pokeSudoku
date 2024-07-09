body.addEventListener("click", cerrarMenu);

filaPrompt.forEach(element => {
    element.innerText = preguntasFila[(Math.floor(Math.random() * (preguntasFila.length)))].texto
});

columnaPrompt.forEach(element => {
    element.innerText = preguntasColumna[(Math.floor(Math.random() * (preguntasColumna.length)))].texto
});


btnCasilla.forEach( boton => boton.addEventListener("click", (event) => {

    const botonId = event.currentTarget.id; // Conseguimos la id
    nodoPadre = document.getElementById(botonId).parentNode; // Conseguimos al padre.

    abrirCerrarMenu();

    botonSubmit.addEventListener("click", (event) => {
        event.preventDefault();
        botonSubmit.setAttribute("disabled", "");
        let pokemonName = text.value.toLowerCase();
        
        fetch(URL + pokemonName)
            .then((response) => response.json())
            .then(data => comprobarPokemon(data, nodoPadre))
            .catch((error) => {
                console.log(error);
                abrirCerrarMenu();
                nodoPadre.classList.add("error");
                setTimeout(function(){
                    nodoPadre.classList.remove("error")
                },1000);
            })
            
        botonSubmit.removeAttribute("disabled", "");
    });
    
    event.stopPropagation();
}))

function añadirPokemon(data, nodoPadre) {
    const div = nodoPadre;

    div.innerHTML = `
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <p>${data.name}</p>
    `;
    buscador.classList.remove("visible");

    contenedorBingo.append(div);
}

async function comprobarGeneracion(prompt, url){
    const res = await fetch(url);
    const moreData = await res.json();
    gen = moreData.generation.name

    index = encontrarIndice(prompt.innerText, preguntasFila)


    if(gen === preguntasFila[index].id){
        return true
    }
}

function comprobarTipo(prompt, data){
    index = encontrarIndice(prompt.innerText, preguntasColumna);
    // console.log(index)

    if(data === preguntasColumna[index].id){
        return true
    }
}

function comprobarPokemon(data, nodoPadre){
    if(nodoPadre.id === "casilla1"){
        promptX = document.getElementById("prompt1");
        promptY = document.getElementById("prompt4");

        console.log(data.types[1])

        if(data.types[1] === undefined){
            if(comprobarGeneracion(promptX, promptY, data, data.species.url) && comprobarTipo(promptY, data.types[0].type.name)){
                añadirPokemon(data, nodoPadre)
            }
        }else{
            console.log("Hola")
            if(comprobarGeneracion(promptX, promptY, data, data.species.url) && (comprobarTipo(promptY, data.types[0].type.name) || comprobarTipo(promptY, data.types[1].type.name))){
                añadirPokemon(data, nodoPadre)
            }
        }
        
    }else if(nodoPadre.id === "casilla2"){
        promptX = document.getElementById("prompt2");
        promptY = document.getElementById("prompt4");

        if(comprobarGeneracion(promptX, promptY, data, data.species.url) && (comprobarTipo(promptY, data.types[0].type.name) || comprobarTipo(promptY, data.types[1].type.name))){
            añadirPokemon(data, nodoPadre)
        }
    }else if(nodoPadre.id === "casilla3"){
        promptX = document.getElementById("prompt3");
        promptY = document.getElementById("prompt4");

        if(comprobarGeneracion(promptX, promptY, data, data.species.url) && (comprobarTipo(promptY, data.types[0].type.name) || comprobarTipo(promptY, data.types[1].type.name))){
            añadirPokemon(data, nodoPadre)
        }

    }else if(nodoPadre.id === "casilla4"){
        promptX = document.getElementById("prompt1");
        promptY = document.getElementById("prompt5");

        if(comprobarGeneracion(promptX, promptY, data, data.species.url) && (comprobarTipo(promptY, data.types[0].type.name) || comprobarTipo(promptY, data.types[1].type.name))){
            añadirPokemon(data, nodoPadre)
        }

    }else if(nodoPadre.id === "casilla5"){
        promptX = document.getElementById("prompt2");
        promptY = document.getElementById("prompt5");

        if(comprobarGeneracion(promptX, promptY, data, data.species.url) && (comprobarTipo(promptY, data.types[0].type.name) || comprobarTipo(promptY, data.types[1].type.name))){
            añadirPokemon(data, nodoPadre)
        }

    }else if(nodoPadre.id === "casilla6"){
        promptX = document.getElementById("prompt3");
        promptY = document.getElementById("prompt5");

        if(comprobarGeneracion(promptX, promptY, data, data.species.url) && (comprobarTipo(promptY, data.types[0].type.name) || comprobarTipo(promptY, data.types[1].type.name))){
            añadirPokemon(data, nodoPadre)
        }   

    }else if(nodoPadre.id === "casilla7"){
        promptX = document.getElementById("prompt1");
        promptY = document.getElementById("prompt6");

        if(comprobarGeneracion(promptX, promptY, data, data.species.url) && (comprobarTipo(promptY, data.types[0].type.name) || comprobarTipo(promptY, data.types[1].type.name))){
            añadirPokemon(data, nodoPadre)
        }
        
    }else if(nodoPadre.id === "casilla8"){
        promptX = document.getElementById("prompt2");
        promptY = document.getElementById("prompt6");

        if(comprobarGeneracion(promptX, promptY, data, data.species.url) && (comprobarTipo(promptY, data.types[0].type.name) || comprobarTipo(promptY, data.types[1].type.name))){
            añadirPokemon(data, nodoPadre)
        }
    }else if(nodoPadre.id === "casilla9"){
        promptX = document.getElementById("prompt3");
        promptY = document.getElementById("prompt6");

        if(comprobarGeneracion(promptX, promptY, data, data.species.url) && (comprobarTipo(promptY, data.types[0].type.name) || comprobarTipo(promptY, data.types[1].type.name))){
            añadirPokemon(data, nodoPadre)
        }
    }
}

function fetchInfo(URL){
    return fetch(URL).then((response) => response.json());
}

function cerrarMenu(evento){
    if (evento.target.closest(".buscador")) return;
    buscador.classList.remove("visible");
}

function abrirCerrarMenu(){
    if(buscador.classList.contains("visible")) {
        buscador.classList.remove("visible");
    }else{
        buscador.classList.add("visible");
    }
}

function encontrarIndice(gen, preguntas){
    for (let index = 0; index < preguntas.length; index++) {
        if(preguntas[index].texto===gen){
            return index
        }
        
    }
}