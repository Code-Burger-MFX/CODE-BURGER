const btnMenu = document.getElementById('menu');
var listCarrinho = document.querySelector('.carrinho-oculto');
const iconeRotatorio = document.getElementById('btn-menu-rotatorio');


btnMenu.addEventListener('click', () => {

   listCarrinho.classList.toggle('hidded');

   listCarrinho.style.opacity = listCarrinho.classList.contains('hidded') ? '0' : '1';
   iconeRotatorio.classList.toggle('rotacao');
});