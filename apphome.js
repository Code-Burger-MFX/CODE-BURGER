// menu //
const btnMenu = document.getElementById('menu');
var listCarrinho = document.querySelector('.carrinho-oculto');
const iconeRotatorio = document.getElementById('btn-menu-rotatorio');

btnMenu.addEventListener('click', () => {

   listCarrinho.classList.toggle('hidded');

   listCarrinho.style.opacity = listCarrinho.classList.contains('hidded') ? '0' : '1';
   iconeRotatorio.classList.toggle('rotacao');
});




// itens adicionados pelo adm no localStorage //
function hambugersHome() {

   let produtosExibir = []
   

   let prodQtd =  localStorage.length;

   for(i = 1; i <= prodQtd; i++) {

       let prodExibir = localStorage.getItem(i);
       
       let prodObj = JSON.parse(prodExibir);

       produtosExibir.push(prodObj);
       
       let template = `
       <div class="cards  add-item-carrinho">
       
         <img src="../../imgs/produtos/sobremesa.png" alt="pudim de chocolarte" class="imgs-cards">
         <h3>${prodObj.nome}</h3>

         <div class="descricao-cards">
           <p>${prodObj.descricao}</p>
         </div>

         <div class="btns-cards">
            <button>${prodObj.valor}</button>
            <button><img src="./imgs/icons/Carrinho.png" alt="carrinho de produtos" class="btn-item-list"></button>
          </div>
       </div>`;
       
       if(prodObj.categoria == 'hb') {
        document.querySelector('#cards-hbs').innerHTML += template;
      } 
   }

}


function acompanhamentoHome() {

  let produtosExibir = []
  
  let prodQtd =  localStorage.length;

  for(i = 1; i <= prodQtd; i++) {

      let prodExibir = localStorage.getItem(i);
      
      let prodObj = JSON.parse(prodExibir);

      produtosExibir.push(prodObj);
      
      let template = `
       <div class="cards  add-item-carrinho">
       
         <img src="../../imgs/produtos/sobremesa.png" alt="pudim de chocolarte" class="imgs-cards">
         <h3>${prodObj.nome}</h3>

         <div class="descricao-cards">
           <p>${prodObj.descricao}</p>
         </div>

         <div class="btns-cards">
            <button>${prodObj.valor}</button>
            <button><img src="./imgs/icons/Carrinho.png" alt="carrinho de produtos" class="btn-item-list"></button>
          </div>
       </div>`;

      if(prodObj.categoria == 'comp') {
       document.querySelector('#cards-frits').innerHTML += template;
      } 
    }
}


function bebsHome() {

  let produtosExibir = []
  

  let prodQtd =  localStorage.length;

  for(i = 1; i <= prodQtd; i++) {

      let prodExibir = localStorage.getItem(i);
      
      let prodObj = JSON.parse(prodExibir);

      produtosExibir.push(prodObj);
      
      let template = `
       <div class="cards  add-item-carrinho">
       
         <img src="../../imgs/produtos/sobremesa.png" alt="pudim de chocolarte" class="imgs-cards">
         <h3>${prodObj.nome}</h3>

         <div class="descricao-cards">
           <p>${prodObj.descricao}</p>
         </div>

         <div class="btns-cards">
            <button>${prodObj.valor}</button>
            <button><img src="./imgs/icons/Carrinho.png" alt="carrinho de produtos" class="btn-item-list"></button>
          </div>
       </div>`;

      if(prodObj.categoria == 'bebs') {
        document.querySelector('#cards-bebs').innerHTML += template;
      }
   }
}


function sobsHome() {

  let produtosExibir = []

  let prodQtd =  localStorage.length;

  for(i = 1; i <= prodQtd; i++) {

      let prodExibir = localStorage.getItem(i);
      
      let prodObj = JSON.parse(prodExibir);

      produtosExibir.push(prodObj);
      
      let template = `
  
      <div class="cards">
      
        <img src="../../imgs/produtos/sobremesa.png" alt="pudim de chocolarte" class="imgs-cards">
        <h3>${prodObj.nome}</h3>

        <div class="descricao-cards">
          <p>${prodObj.descricao}</p>
        </div>

        <div class="btns-cards">
           <button>${prodObj.valor}</button>
           <button><img src="./imgs/icons/Carrinho.png" alt="carrinho de produtos"></button>
         </div>
      </div>
      `;

      if(prodObj.categoria == 'sobs') {
        document.querySelector('#cards-sobs').innerHTML += template;
      }
   }
}



// atualiza a pagina //
window.onchange = () => {
  hambugersHome();
  acompanhamentoHome();
  bebsHome();
  sobsHome();
}

  
  // user, adm ou se ninguem estiver logado // 
let logado = sessionStorage.getItem('Logado');

if(logado == 'Admin') {

  document.querySelector('.logado').innerHTML = 
  `<a href="../ADM/adm.html">Admin</a> <h3><a href="./Login-Cadastro/login.html" id="logout">Sair</a></h3>`;
}  else if(logado == 'Usuario') {

  document.querySelector('.logado').innerHTML = 
  `<a href="./cliente/carrinho-cliente.html">Usuario 1</a>  <h3><a href="./Login-Cadastro/login.html" id="logout">Sair</a></h3>`;
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






// add itens no carrinho //

var listaCarrinho = document.querySelector('#list-add-carrinho');
var cadaItem = document.querySelectorAll('.add-item-carrinho');
var btnsAdd = document.querySelectorAll('.btn-item-list');



btnsAdd.forEach((btnAdd, index) => {

  btnAdd.addEventListener('click', () => {

    let imgItem = document.querySelectorAll('.produtos .imgs-cards')[index].src;
    let nomeItem = document.querySelectorAll('.produtos h3')[index].textContent;

    let template =`
      <div class="cards-carrinho">
        <img src="${imgItem}" class="imgs-cards-carrinhos">
        <h3>${nomeItem}</h3>
        <button class="menos-item"></button>
        <span class="cont-span">1</span>
        <button class="mais-item"></button>
      </div>`;

   listaCarrinho.innerHTML += template;
   

  });

});



  var btnsMais = document.querySelectorAll('.mais-item');
  var btnsMenos = document.querySelectorAll('.menos-item');
  var contagemSpan = document.querySelectorAll('.cont-span');

  btnsMais.forEach((btnMais, index) => {
    btnMais.addEventListener('click', () => {
      contagemSpan[index].textContent = parseInt(contagemSpan[index].textContent) + 1;
    });
  });

  btnsMenos.forEach((btnMenos, index) => {
    btnMenos.addEventListener('click', () => {
      if (parseInt(contagemSpan[index].textContent) > 1) {
        contagemSpan[index].textContent = parseInt(contagemSpan[index].textContent) - 1;
      }
    });
  });
