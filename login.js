const form = document.getElementById("formLogin")

form.addEventListener("submit", function(e){

e.preventDefault()

let email = document.getElementById("emailLogin").value
let senha = document.getElementById("senhaLogin").value

let usuario = JSON.parse(localStorage.getItem("usuario"))

if(!usuario){
alert("Nenhum usuário cadastrado")
return
}

if(email === usuario.email && senha === usuario.senha){

alert("Login realizado com sucesso!")

window.location.href = "index.html"

}else{

alert("Email ou senha incorretos")

}

})