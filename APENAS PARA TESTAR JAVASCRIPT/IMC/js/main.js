let form = document.querySelector('#form')
let resultado = document.querySelector('#resultado');

function calcularIMC(evento) {
    evento.preventDefault();
    let txtpeso = document.querySelector('#peso');
    let txtaltura = document.querySelector('#altura');    
        
    if (txtpeso.value.length === 0 || txtaltura.value.length === 0) {
        alert('[ERRO]: Peso ou altura inválidos. Tente novamente!')
    } else {
        let peso = Number(txtpeso.value)
        let altura = Number(txtaltura.value)
        let imc = peso / (altura * altura);
             
        
        resultado.innerHTML = '';
        resultado.innerHTML = `<p style="text-align: center;">Seu IMC é de <strong style="color:green;">${imc.toFixed(2)}</strong></p>`;        
    }

    
}
    

form.addEventListener('submit', calcularIMC)