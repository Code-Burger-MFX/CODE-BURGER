// menu //
const btnMenu = document.getElementById('menu');
var listCarrinho = document.querySelector('.carrinho-oculto');
const iconeRotatorio = document.getElementById('btn-menu-rotatorio');

btnMenu.addEventListener('click', () => {

   listCarrinho.classList.toggle('hidded');

   listCarrinho.style.opacity = listCarrinho.classList.contains('hidded') ? '0' : '1';
   iconeRotatorio.classList.toggle('rotacao');
});


// atualiza a pagina //
window.onload = () => {
  percorerItens();
}

  
  // user, adm ou se ninguem estiver logado // 
let logado = sessionStorage.getItem('Logado');

if(logado == 'Admin') {

  document.querySelector('.logado').innerHTML = 
  `<a href="../ADM/adm.html">Admin</a> <h3><a href="./Login-Cadastro/login.html" id="logout">Sair</a></h3>`;
}  else if(logado == 'Usuario') {

  document.querySelector('.logado').innerHTML = 
  `<a href="./cliente/carrinho-cliente.html">Usuario 1</a>  <h3><a href="./Login-Cadastro/login.html" id="logout">Sair</a></h3>`;
  document.querySelector('.btns-carrinho').style.display = "flex";
} else {

  document.querySelector('.logado').innerHTML = 
  `<a href="./Login-Cadastro/login.html">Login</a>`;
}


// logout //
let logout = document.getElementById('logout');
logout.addEventListener('click', () => {
  sessionStorage.removeItem('Logado');
  window.location.href = './Login-Cadastro/login.html';
});


let produtosExibir = [];


// itens adicionados pelo adm no localStorage //
function percorerItens() {
  
  let qtdList =  localStorage.length;

  const idProdList = 'Produto '; 

  for(i = 1; i <= qtdList; i++) {

    let prodExibir = localStorage.getItem(idProdList + i);

    let prodObj = JSON.parse(prodExibir);

    produtosExibir.push(prodObj);

    let templateHome = `
    <div class="cards  add-item-carrinho">
    
      <img src="../../imgs/produtos/sobremesa.png" alt="pudim de chocolarte" class="imgs-cards">
      <h3>${prodObj.nome}</h3>

      <div class="descricao-cards">
        <p>${prodObj.descricao}</p>
        </div>
        
        <div class="btns-cards">
        <button>${prodObj.valor}</button>
        <button onclick="addCarinho()"><img src="./imgs/icons/Carrinho.png" alt="carrinho de produtos" class="btn-item-list"></button>
       </div>
    </div>`;

      if(prodObj.categoria === 'Hamburguer') {
        document.querySelector('.cardapio-haburgers').innerHTML += templateHome;
      } else if(prodObj.categoria === 'Acompanhamento') {
       document.querySelector('#cards-frits').innerHTML += templateHome;
      } else if(prodObj.categoria === 'Bebida') {
        document.querySelector('#cards-bebs').innerHTML += templateHome;
      } else if(prodObj.categoria === 'Sobremesa') {
        document.querySelector('#cards-sobs').innerHTML += templateHome;
      } 
    }
}




let produtosList = [];







// // add itens no carrinho //
var listaCarrinho = document.querySelector('#list-add-carrinho');
var cadaItem = document.querySelectorAll('.add-item-carrinho');
var btnsAdd = document.querySelectorAll('.btn-item-list');

var carrinho = [];

function addCarinho() {

  let imgItem = './imgs/produtos/sobremesa.png';
  let nomeItem = 'asd';

  let template =`
    <div class="cards-carrinho">
      <img src="${imgItem}" class="imgs-cards-carrinhos">
      <h3>${nomeItem}</h3>
      <button class="menos-item"></button>
      <span class="cont-span">1</span>
      <button class="mais-item"></button>
    </div>`;

 listaCarrinho.innerHTML += template;


}


