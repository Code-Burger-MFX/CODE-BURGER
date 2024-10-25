const btnMenu = document.getElementById('menu');
var listCarrinho = document.querySelector('.carrinho-oculto');


btnMenu.addEventListener('click', () => {

   listCarrinho.classList.toggle('hidded');

   listCarrinho.style.opacity = listCarrinho.classList.contains('hidded') ? '0' : '1';
   btnMenu.classList.toggle('rotacao');
});