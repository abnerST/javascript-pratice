function main() {
    const form = document.querySelector('.form');
    const produtos = [];

    form.addEventListener('submit', (evento) => {
        evento.preventDefault();

        const nomeProduto = form.querySelector('#produto').value;
        const quantidade = Number(form.querySelector('#quantidade').value);

        const produto = {
            nomeProduto,
            quantidade
        };
        //produtos.push(produto);

       montaLista(produto);
    });





    function montaLista(produto) {

        
        const novoItem = document.createElement('div');
        const h1 = document.createElement('h1');
        const p = document.createElement('p');

        h1.innerText = produto.nomeProduto;
        p.innerText = `${produto.quantidade} Unidades`;
        
        novoItem.appendChild(h1);
        novoItem.appendChild(p);
        novoItem.classList.add('container');

        document.body.appendChild(novoItem);
    }
}

main();
