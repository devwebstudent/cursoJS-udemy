let form = document.querySelector('#form')
let resultado = document.querySelector('#resultado');

function calcularIMC(evento) {
    evento.preventDefault();
    let txtpeso = document.querySelector('#peso');
    let txtaltura = document.querySelector('#altura');

    let peso = Number(txtpeso.value)
    let altura = Number(txtaltura.value)
    let imc = peso / (altura * altura);
    resultado.innerHTML = '';
    resultado.innerHTML = `<p style="text-align: center;">Seu IMC é de <strong style="color:green;">${imc.toFixed(2)}</strong></p>`;
}

let calc = form.addEventListener('submit', calcularIMC)