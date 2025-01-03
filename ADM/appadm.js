
// cadastrar no localStorage //
function cadastrarItem() {
	
	var nomeProd = document.getElementById('add-prod-name').value;
	var valorProd = document.getElementById('add-prod-valor').value;
	var descricaoProd = document.getElementById('add-prod-descricao').value;
	var categoriaProd = document.getElementById('add-prod-categoria').value;
	
	var valorNumber = Number(valorProd);
	
	var valorEmReal = parseFloat(valorNumber).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
	

	var produtosCadastrado = {
		nome : nomeProd,
		valor : valorEmReal,
		descricao : descricaoProd,
		categoria : categoriaProd
	}


	if( nomeProd.length >= 3 ){
		 if( valorNumber !== 0){
			if( descricaoProd.length >= 5){
				if( categoriaProd !== 'notSelect'){
					
					var produtosString =  JSON.stringify(produtosCadastrado);

					window.location.href = 'produtos.html';

                    return localStorage.setItem(localStorage.length + 1, produtosString);
					
				} else {
					alert('Adicionar uma categoria para o produto!')
				}

			} else {
				alert('Adicionar uma descrição para o produto!')
			}

		 } else {
			alert('Adicionar um valor para o produto!')
		 }
		 
	} else {
		alert('Adicionar um nome para o produto!')
	}

}



// exibir produtos cadastrados para o adm //
function itenSalvoProdutos() {

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

          <div class="btn-produtos">
            <button>Editar</button>
            <button>Excluir</button>
          </div>$
        </div>
        `;

        
		document.querySelector('#produtos-salvos').innerHTML += template;
		
    }

}



window.onload = itenSalvoProdutos();





let logout = document.getElementById('logout');

logout.addEventListener('click', () => {
  sessionStorage.removeItem('Logado');
  window.location.href = './Login-Cadastro/login.html';
});
