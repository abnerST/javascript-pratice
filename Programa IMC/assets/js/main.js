function main() {
    const form = document.querySelector('#form');

    form.addEventListener(
        'submit',
        (evento) => {
            evento.preventDefault(); 
            console.log("Evento prevenido");

            let peso = Number(form.querySelector('#peso').value);
            let altura = Number(form.querySelector('#altura').value);

            if (isNaN(peso) || peso <= 0) {
                setResultado('Peso inválido!', false);
                return;
            }

            if (isNaN(altura) || altura <= 0) {
                setResultado('Altura inválida!', false);
                return;
            }

            let imc = getImc(peso, altura);
            let nivelImc = getNivelImc(imc);

            setResultado(`O IMC é ${imc} (${nivelImc})`, true);
        }
    );

    function getNivelImc(imc) {
        const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
            'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

        if (imc >= 39.9) return nivel[5];
        if (imc >= 34.9) return nivel[4];
        if (imc >= 29.9) return nivel[3];
        if (imc >= 24.9) return nivel[2];
        if (imc >= 18.5) return nivel[1];
        return nivel[0]; 
    }

    function getImc(peso, altura) {
        const imc = peso / altura ** 2;
        console.log(imc);
        return imc.toFixed(2);
    }

    function setResultado(msg, isValid) {
        const resultado = document.querySelector('.resultado');
        resultado.innerHTML = '';
        const p = criaP();
        p.textContent = msg; 
        p.classList.add(isValid ? 'p-resultado' : 'p-mensagemErro'); 
        resultado.appendChild(p);
    }

    function criaP() {
        return document.createElement('p');
    }
}

main();
