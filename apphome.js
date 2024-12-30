const btnMenu = document.getElementById('menu');
var listCarrinho = document.querySelector('.carrinho-oculto');
const iconeRotatorio = document.getElementById('btn-menu-rotatorio');


btnMenu.addEventListener('click', () => {

   listCarrinho.classList.toggle('hidded');

   listCarrinho.style.opacity = listCarrinho.classList.contains('hidded') ? '0' : '1';
   iconeRotatorio.classList.toggle('rotacao');
});





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
            <button><img src="./imgs/icons/Carrinho.png" alt="carrinho de produtos"></button>
          </div>
       </div>
       `;

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


window.onload = () => {
  hambugersHome();
  acompanhamentoHome();
  bebsHome();
  sobsHome();
}