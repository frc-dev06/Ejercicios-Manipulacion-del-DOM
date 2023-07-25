const controles = document.querySelectorAll("input")

const inputRojo = document.querySelector("#rojo")
const inputVerde = document.querySelector("#verde")
const inputAzul = document.querySelector("#azul")

const txtRojo = document.querySelector(".texto-rojo")
const txtVerde = document.querySelector(".texto-verde")
const txtAzul = document.querySelector(".texto-azul")
const body= document.querySelector("body")

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

txtRojo.innerText = rojo;
txtVerde.innerText = verde;
txtAzul.innerText = azul;

document.addEventListener('DOMContentLoaded', function () {
    controles.forEach((control) => {
        control.setAttribute('min', 0)
        control.setAttribute('max', 255)
        control.setAttribute('step', 1)
    })
})



function actualizarColor(r,g,b){
    const colorRGB=`rgb(${r},${g},${b})`
    body.style.backgroundColor=colorRGB;
}

inputRojo.addEventListener('change', (e)=>{
    rojo= e.target.value;
    txtRojo.innerText= rojo;
    actualizarColor(rojo,verde,azul)
})
inputVerde.addEventListener('change', (e)=>{
    verde= e.target.value;
    txtVerde.innerText=verde;
    actualizarColor(rojo, verde, azul)
})
inputAzul.addEventListener('click', (e)=>{
    azul= e.target.value;
    txtAzul.innerText=azul;
    actualizarColor(rojo,verde,azul);
})

console.log(rojo, verde, azul)