let peso = Number(document.querySelector('#peso'));
let altura = Number(document.querySelector('#altura'));
let form = document.querySelector('#form')
let resultado = document.querySelector('#resultado');

function calcularIMC(evento) {
    evento.preventDefault();
    let imc = peso / (altura * altura);
    resultado.innerHTML = '';
    resultado.innerHTML = `Seu IMC é de ${imc}`;
}

let calc = form.addEventListener('click', calcularIMC)