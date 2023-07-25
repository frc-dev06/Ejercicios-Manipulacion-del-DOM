let btn= document.querySelector("#btnCambiar")
let citaElem= document.querySelector("#cita")
let autorElem= document.querySelector("#autor")

function numAleatorio(min,max){
    let num=Math.floor(Math.random()*(max-min+1))+min
    return num
}

function cambiarCita(){
    let indiceAleatorio= numAleatorio(0, citas.length-1);
    citaElem.innerText=citas[indiceAleatorio].texto;
    autorElem.innerText=citas[indiceAleatorio].autor;
}

document.addEventListener('DOMContentLoaded',cambiarCita)

btn.addEventListener('click', cambiarCita)