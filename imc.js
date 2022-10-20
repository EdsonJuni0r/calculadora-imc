const calcular = document.getElementById('calcular')

function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado')
    
    if (nome !== '' && altura !== '' && peso !== ''){
        
        const IMC = (peso / (altura * altura)).toFixed(2)

        resultado.textContent = `${nome} seu IMC é ${IMC}`;

    }else{
        alert('Preencha todos os campos!!!')
    } 
}


calcular.addEventListener('click', imc);
