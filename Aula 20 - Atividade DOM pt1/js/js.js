function meuEscopo() {

    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];


    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        const pessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        };
        pessoas.push(pessoa);
        console.log(pessoas);

        resultado.innerHTML += (`<p> Nome: ${pessoa.nome} ${pessoa.sobrenome} <br> Peso: ${pessoa.peso} Altura: ${pessoa.altura} </p>`);



    }


    form.addEventListener('submit', recebeEventoForm);


}

meuEscopo();