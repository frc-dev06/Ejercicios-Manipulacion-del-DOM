const btnInicioPausa = document.querySelector("#boton-inicio-pausa");
const btnReiniciar = document.querySelector("#boton-reiniciar");
const cronometro = document.querySelector("#cronometro")
let [horas, minutos, segundos] = [0, 0, 0]

let intervalo;
let estadoCrono = 'pausa'

function actualizarCrono() {
    segundos++;
    if (segundos / 60 === 1) {
        segundos = 0;
        minutos++;

        if (minutos / 60 === 1) {
            minutos = 0;
            horas++;
        }
    }

    const segundosFormato = asignarFormato(segundos);
    const minutosFormato = asignarFormato(minutos);
    const horasFormato = asignarFormato(horas);

    cronometro.innerText = `${horasFormato}:${minutosFormato}:${segundosFormato}`
}



function asignarFormato(val) {
    return val < 10 ? '0' + val : val
}

function activar(){
    intervalo = window.setInterval(actualizarCrono, 1000);
        btnInicioPausa.innerHTML = '<i class="bi bi-pause-fill"></i>'
        btnInicioPausa.classList.remove('iniciar')
        btnInicioPausa.classList.add('pausar')
        estadoCrono = 'andando'
}
function pausar(){
    window.clearInterval(intervalo);
        btnInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>'
        btnInicioPausa.classList.remove('pausar')
        btnInicioPausa.classList.add('iniciar')
        estadoCrono = 'pausa'
}
btnInicioPausa.addEventListener('click', function () {
    if (estadoCrono === 'pausa') {
        activar()
    } else {
        pausar()
    }
});

btnReiniciar.addEventListener('click', function () {
    window.clearInterval(intervalo);
    segundos = 0
    minutos = 0
    horas = 0
    cronometro.innerText = '00:00:00'
    pausar()
})