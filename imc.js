const nome = document.getElementById('nome')
const altura = document.getElementById('altura')
const peso = document.getElementById('peso')
const calcular = document.getElementById('calcular')
const resultado = document.getElementById('resultado')

function imc(){
    alert('oi')

}

//resultado.textContent = 
//(peso / (altura * altura)).toFixe(2)

calcular.addEventListener('click', imc);
