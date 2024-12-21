

function cadastrarItem() {
	
	var nomeProd = document.getElementById('add-prod-name').value;
	var valorProd = document.getElementById('add-prod-valor').value;
	var descricaoProd = document.getElementById('add-prod-descricao').value;
	var categoriaProd = document.getElementById('add-prod-categoria').value;
	
	var valorNumber = Number(valorProd)
	
	var produtosCadastrado = {
		nome : nomeProd,
		valor : valorNumber,
		descricao : descricaoProd,
		categoria : categoriaProd
	}


	if( nomeProd.length >= 3 ){
		 if( valorNumber !== 0){
			if( descricaoProd.length >= 5){
				if( categoriaProd !== 'notSelect'){
					
					var produtosString =  JSON.stringify(produtosCadastrado);

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




function itenSalvo() {

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



window.onload = itenSalvo();
