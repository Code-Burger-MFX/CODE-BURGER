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




// itens adicionados pelo adm no localStorage //
function percorerItens() {

  let produtosExibir = [];
  
  let qtdList =  localStorage.length;

  const idProdList = 'Produto '; 

  for(i = 1; i <= qtdList; i++) {

    let prodExibir = localStorage.getItem(idProdList + i);

    let prodObj = JSON.parse(prodExibir);

    produtosExibir.push(prodObj);

    var imagemConvertida = prodObj.imagem;
    var imagemConvertida = imagemConvertida.replace('C:\\fakepath\\', './imgs/produtos/');
    prodObj.imagem = imagemConvertida;
    

    let templateHome = `
    <div class="cards  add-item-carrinho">
    
      <img src="${imagemConvertida}" alt="pudim de chocolarte" class="imgs-cards">
      <h3>${prodObj.nome}</h3>

      <div class="descricao-cards">
        <p>${prodObj.descricao}</p>
        </div>
        
        <div class="btns-cards">
        <button>R$ ${prodObj.valor}</button>
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



// add itens no carrinho //
var listaCarrinho = document.querySelector('#list-add-carrinho');
var cadaItem = document.querySelectorAll('.add-item-carrinho');
var btnsAdd = document.querySelectorAll('.btn-item-list');


let produtosList = [];

function addCarinho() {

  let imgItem = event.target.closest('.add-item-carrinho').querySelector('.imgs-cards').src;
  let nomeItem = event.target.closest('.add-item-carrinho').querySelector('h3').textContent;

  let itemExistente = Array.from(listaCarrinho.children).find(item => item.querySelector('h3').textContent === nomeItem);

  if (itemExistente) {
    let contSpan = itemExistente.querySelector('.cont-span');
    let cont = parseInt(contSpan.textContent);
    cont++;
    contSpan.textContent = cont;
  } else {
    let templateCarrinho = `
      <div class="cards-carrinho">
        <img src="${imgItem}" class="imgs-cards-carrinhos">
        <h3>${nomeItem}</h3>
        <button class="menos-item"></button>
        <span class="cont-span">1</span>
        <button class="mais-item"></button>
      </div>`;
    listaCarrinho.innerHTML += templateCarrinho;

    var qtdItem = document.querySelectorAll('.cont-span').textContent;

    produtosList.push({img: imgItem, nome: nomeItem, quantidade: qtdItem});

  }
}


function calcularTotal() {
  let total = 0;
  let itens = Array.from(listaCarrinho.children);

  itens.forEach(item => {
    let valor = parseFloat(item.querySelector('.btns-cards button').textContent.replace('R$ ', ''));
    let quantidade = parseInt(item.querySelector('.cont-span').textContent);
    total += valor * quantidade;
  });

  document.querySelector('#valor-list-carrinho').textContent = `R$ ${total.toFixed(2)}`;
  return total;
}




// add ou remover itens no carrinho //
listaCarrinho.addEventListener('click', (e) => {

  if(e.target.classList.contains('mais-item')) {
    let contSpan = e.target.previousElementSibling;
    let cont = parseInt(contSpan.textContent);
    cont++;
    contSpan.textContent = cont;
    
  } else if(e.target.classList.contains('menos-item')) {
    let contSpan = e.target.nextElementSibling;
    let cont = parseInt(contSpan.textContent);
    cont--;

    if(cont <= 0) {
        if(confirm('Deseja realmente excluir este item?')) {
          contSpan.textContent = 0;
          e.target.parentElement.remove();
        
        } else {
          contSpan.textContent = 1;

        }
    } else {
      contSpan.textContent = cont;

    }

  }
  
});

window.onload = () => {
  percorerItens();

}

// calcularTotal //
let btnCalcular = document.getElementById('btn-carrinho');
btnCalcular.addEventListener('chenge', () => {
  let total = calcularTotal();
  document.querySelector('#valor-list-carrinho').textContent = `R$ ${total.toFixed(2)}`;
  return total;
});


// finalizar compra //
let btnFinalizar = document.getElementById('btn-finalizar');
btnFinalizar.addEventListener('click', () => {
  window.location.href = './cliente/carrinho-cliente.html';
});


