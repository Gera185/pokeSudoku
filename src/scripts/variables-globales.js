botonSubmit = document.getElementById("btn-submit");
text = document.querySelector("#text-pokemon");
body = document.querySelector("body");

filaPrompt = document.querySelectorAll(".fila-prompt");
columnaPrompt = document.querySelectorAll(".columna-prompt");

btnCasilla = document.querySelectorAll(".bingo-boton");

buscador = document.querySelector(".buscador");
contenedorBingo = document.querySelector(".contenedor-bingo");


let URL = "https://pokeapi.co/api/v2/pokemon/";

preguntasFila = [
                {id:"generation-i", texto:"Primera Generación"},
                {id:"generation-ii", texto:"Segunda Generación"},
                {id:"generation-iii", texto:"Tercera Generación"},
                {id:"generation-iv", texto:"Cuarta Generación"},
                {id:"generation-v", texto:"Quinta Generación"},
                {id:"generation-vi", texto:"Sexta Generación"},
                {id:"generation-vii", texto:"Séptima Generación"},
                {id:"generation-viii", texto:"Octava Generación"},
                {id:"generation-ix", texto:"Novena Generación"}
                ];

preguntasColumna = [
                    {id:"electric", texto:"Tipo Eléctrico"},
                    {id:"fire", texto:"Tipo Fuego"},
                    {id:"steel", texto:"Tipo Acero"},
                    {id:"water", texto:"Tipo Agua"},
                    {id:"bug", texto:"Tipo Bicho"},
                    {id:"dragon", texto:"Tipo Dragón"},
                    {id:"ghost", texto:"Tipo Fantasma"},
                    {id:"fairy", texto:"Tipo Hada"},
                    {id:"ice", texto:"Tipo Hielo"},
                    {id:"fighting", texto:"Tipo Lucha"},
                    {id:"normal", texto:"Tipo Normal"},
                    {id:"grass", texto:"Tipo Planta"},
                    {id:"psychic", texto:"Tipo Psíquico"},
                    {id:"rock", texto:"Tipo Roca"},
                    {id:"dark", texto:"Tipo Siniestro"},
                    {id:"ground", texto:"Tipo Tierra"},
                    {id:"poison", texto:"Tipo Veneno"},
                    {id:"flying", texto:"Tipo Volador"}
                    ];