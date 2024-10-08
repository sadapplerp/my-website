// Selecionando elementos do DOM
const botaoAdicionarCarrinho = document.querySelectorAll('.adicionar-carrinho');
const listaCarrinho = document.getElementById('lista-carrinho');
const totalCarrinho = document.getElementById('total');
let total = 0;

// Função para adicionar produto ao carrinho
botaoAdicionarCarrinho.forEach((botao) => {
    botao.addEventListener('click', (e) => {
        const produto = e.target.closest('.produto');
        const nomeProduto = produto.querySelector('h3').innerText;
        const precoProduto = parseFloat(produto.getAttribute('data-preco'));

        // Adicionando o produto à lista do carrinho
        const itemCarrinho = document.createElement('li');
        itemCarrinho.innerText = `${nomeProduto} - R$${precoProduto.toFixed(2)}`;
        listaCarrinho.appendChild(itemCarrinho);

        // Atualizando o total
        total += precoProduto;
        totalCarrinho.innerText = `R$${total.toFixed(2)}`;
    });
});

// Função para finalizar a compra
document.getElementById('finalizar-compra').addEventListener('click', () => {
    if (total > 0) {
        alert(`Compra finalizada! Total: R$${total.toFixed(2)}`);
        // Resetar o carrinho
        listaCarrinho.innerHTML = '';
        total = 0;
        totalCarrinho.innerText = 'R$0,00';
    } else {
        alert('Carrinho vazio!');
    }
});
