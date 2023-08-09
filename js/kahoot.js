


const preguntasRespuestas = [
    {
        pregunta: "¿Cúal es la capital de Colombia?",
        imagen: "/img/kahootprincipal.webp",
        respuestas: ["Bogotá", "Cali", "Medellin", "Dubai"],
        respuestaCorrecta: 1,
        
    },

    {
        pregunta: "¿Cuándo acabó la II Guerra Mundial?",
        imagen: "/img/kahootprincipal.webp",
        respuestas: [ "1848", "1042", "1945", "1940"],
        respuestaCorrecta: 3,

    },

    {
        pregunta: "¿En qué país nació Adolf Hitler?",
        imagen: "/img/kahootprincipal.webp",
        respuestas: ["Bogotá", "Cali", "Medellin", "Australia"],
        respuestaCorrecta: 4,

    },

    {
        pregunta: " ¿Cuál es el océano más grande?",
        imagen: "/img/kahootprincipal.webp",
        respuestas: ["Oceano de Berlin", "Océano Medellin", "Océano Atlantico","Océano Pacífico"],
        respuestaCorrecta: 4,
        
    }
];


let indicePreguntaActual = 0;
let respuestasCorrectas = 0;
let respuestasIncorrectas = 0;
let temporizador;


const containerLogin = document.querySelector(".container-login");
const mainKahoot = document.querySelector(".main-kahoot");
const nombre = document.querySelector(".nombre");
const btnLogin = document.querySelector(".loginbtn");
  
btnLogin.addEventListener("click", () => {
    const ingresa = nombre.value.trim();
    if (ingresa === "") {

        alert("Por favor, ingresa tu nombre para continuar.");
    } else {
        containerLogin.style.display = "none";
        mainKahoot.style = "block"; 
        mostrarPregunta();
      }
    });


function mostrarPregunta() {
    if (indicePreguntaActual >= preguntasRespuestas.length) {
        mostrarResultado();
      
    }

    const preguntaElemento = document.querySelector('.pregunta');
    const respuestaElementos = document.querySelectorAll('.contenedor-btn div');
    const preguntaActual = preguntasRespuestas[indicePreguntaActual];

    preguntaElemento.textContent = preguntaActual.pregunta;



    for (let i = 0; i < respuestaElementos.length; i++) {
        respuestaElementos[i].textContent = preguntaActual.respuestas[i];

    }

    tiempoSegundo();
}



let numeroSegundo = 10; 
const SEGUNDOSR = document.querySelector(".time"); 

const tiempoSegundo = setInterval(() => {
    SEGUNDOSR.innerHTML = numeroSegundo; 
    numeroSegundo--; 

    if (numeroSegundo < 0) {
        clearInterval(tiempoSegundo); 
        // respuestasIncorrectas++;
        tiempoSegundo();
    
        
    }
    else{
        mostrarPregunta();
        tiempoSegundo();
        
        
    }
    
}, 1000); 


function verificarRespuesta(respuestaSeleccionada) {
    clearInterval(numeroSegundo);
    const preguntaActual = preguntasRespuestas[indicePreguntaActual];
    if (respuestaSeleccionada == preguntaActual.respuestaCorrecta) {
        respuestasCorrectas++;
    } else {
        respuestasIncorrectas++;
    }
    indicePreguntaActual++;
    mostrarPregunta();
}


function mostrarResultado() {  
    const nombre = document.querySelector(".nombre");
    const resultado = document.querySelector(".resultado");
    resultado.textContent = ` Respuestas correctas: ${respuestasCorrectas}, respuestas incorrectas: ${respuestasIncorrectas}`;
}

