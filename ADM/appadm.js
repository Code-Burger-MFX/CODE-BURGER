

function pegaInfos() {
var dados = []

	var nomeProd = document.getElementById('add-prod-name').value;
	var valorProd = document.getElementById('add-prod-valor').value;
	var descricaoProd = document.getElementById('add-prod-descricao').value;
	var categoriaProd = document.getElementById('add-prod-categoria').value;

	if(nomeProd !== "" && valorProd !== "" && descricaoProd !== "" && categoriaProd !== ""){

	return dados.push({produto : nomeProd, valorProd : valorProd, descricao : descricaoProd});

	} else {
		alert('asdas')
	}


	var dadoString = JSON.stringify(dados);
	
	let x = 0;
	
	localStorage.setItem(x + 1, dadoString)
}
