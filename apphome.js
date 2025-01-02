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
       <div class="cards">
       
         <img src="../../imgs/produtos/sobremesa.png" alt="pudim de chocolarte" class="imgs-cards">
         <h3>${prodObj.nome}</h3>

         <div class="descricao-cards">
           <p>${prodObj.descricao}</p>
         </div>

         <div class="btns-cards">
            <button>${prodObj.valor}</button>
            <button><img src="./imgs/icons/Carrinho.png" alt="carrinho de produtos" class="add-item-list"></button>
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
window.onload = () => {
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
  `<a href="#">Usuario 1</a>  <h3><a href="./Login-Cadastro/login.html" id="logout">Sair</a></h3>`;
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













// contador de cards de cada itens //
var contagemSpan = document.querySelectorAll('.cont-span');
var btnsMais = document.querySelectorAll('.mais-item');
var btnMenos = document.querySelectorAll('.menos-item');


contagemSpan = [];


// add + 1 item //
  btnsMais.forEach((btnMais, index) => {
     
      contagemSpan[index] = 1;
    
      btnMais.addEventListener('click', () => {

        contagemSpan[index]++;
        document.querySelectorAll('.cont-span')[index].textContent = contagemSpan[index];
    });
});


// remove - 1 item //
btnMenos.forEach((btnMenos, index) => {

  btnMenos.addEventListener('click', () => {

    if(contagemSpan[index] > 1) {
      contagemSpan[index]--;
      document.querySelectorAll('.cont-span')[index].textContent = contagemSpan[index];
    }
  });
});
