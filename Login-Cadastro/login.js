function logar(){

    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if (usuario == "admin" && senha == "admin"){
        alert('Sucesso');
        location.href = "../index.html"
    } else{
        alert('Usuario ou senha incorretos');
    }
}