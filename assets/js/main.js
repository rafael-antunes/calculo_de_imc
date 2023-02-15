const form = document.querySelector('.form');

function calculoImc (evento) {
    evento.preventDefault();

    const resultado = document.querySelector('.resultado');
    let peso = document.querySelector('#input-peso');
    let altura = document.querySelector('#input-altura');
    
    peso = Number(peso.value);
    altura = Number(altura.value);
    
    console.log(peso, altura); 
    console.log(typeof peso, typeof altura); 

    const imc = peso / (altura * altura);

    console.log(imc);

    if (imc >= 0 && imc <= 18.5) {
        resultado.innerHTML += `<p>Abaixo do peso</p>`;
    } else if (imc >= 18.6 && imc <= 24.9) {
        resultado.innerHTML += `<p>Peso normal</p>`;
    } else if (imc >= 25 && imc <= 29.9) {
        resultado.innerHTML += `<p>Sobrepeso</p>`;
    } else if (imc >= 30 && imc <= 34.9) {
        resultado.innerHTML += `<p>Obesidade grau 1</p>`;
    } else if (imc >= 35 && imc <= 39.9) {
        resultado.innerHTML += `<p>Obesidade grau 2</p>`;
    } else if (imc >= 40) {
        resultado.innerHTML += `<p>Obesidade grau 3</p>`;
    }
}



form.addEventListener('submit', calculoImc);