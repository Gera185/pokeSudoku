body.addEventListener("click", cerrarMenu);

btnCasilla.forEach( boton => boton.addEventListener("click", (event) => {

    const botonId = event.currentTarget.id; // Conseguimos la id
    nodoPadre = document.getElementById(botonId).parentNode; // Conseguimos al padre.

    abrirCerrarMenu();

    botonSubmit.addEventListener("click", (event) => {
        event.preventDefault();
        botonSubmit.setAttribute("disabled", "");
        let pokemonName = text.value;
        
        try{
            fetch(URL + pokemonName)
                .then((response) => response.json())
                .then(data => añadirPokemon(data, nodoPadre))
                .catch((error) => {
                    console.log(error);
                    abrirCerrarMenu();
                    nodoPadre.classList.add("error");
                    setTimeout(function(){
                        nodoPadre.classList.remove("error")
                    },1000);
                })
            
        }catch(error) {
            console.log(error);
            nodoPadre.classList.add("error");
        }
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