/* ================= LINK ATIVO DO MENU ================= */

const links = document.querySelectorAll('.nav a');

links.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('ativo');
  }
});


/* ================= FILTRO DE PRODUTOS ================= */

function filtrarProdutos(categoria){

const produtos = document.querySelectorAll(".produto-card");
let visiveis = 0;

produtos.forEach(produto => {

if(categoria === "todos"){

produto.style.display = "block";
visiveis++;

}

else if(produto.dataset.categoria === categoria){

produto.style.display = "block";
visiveis++;

}

else{

produto.style.display = "none";

}

});

const contador = document.getElementById("contador-produtos");

if(contador){
contador.innerText = visiveis + " produtos encontrados";
}

}


/* ================= BARRA DE PESQUISA ================= */

function pesquisarProdutos() {

let input = document.getElementById("campo-pesquisa");
if(!input) return;

let filtro = input.value.toLowerCase();

let produtos = document.querySelectorAll(".produto-card");

let encontrados = 0;

produtos.forEach(produto => {

let nome = produto.querySelector("h3").textContent.toLowerCase();

if(nome.includes(filtro)){

produto.style.display = "block";
encontrados++;

}else{

produto.style.display = "none";

}

});

let mensagem = document.getElementById("sem-resultados");

if(mensagem){

if(encontrados === 0){
mensagem.style.display = "block";
}else{
mensagem.style.display = "none";
}

}

}

/* Abrir e fechar carrinho */
function abrirCarrinho() {
  document.getElementById("carrinho").classList.add("aberto");
}

function fecharCarrinho() {
  document.getElementById("carrinho").classList.remove("aberto");
}

/* Adicionar produto */
function adicionarCarrinho(nome, preco){
  let carrinho = document.getElementById("itens-carrinho");

  // Remove mensagem "vazio" se existir
  let vazio = carrinho.querySelector("p");
  if(vazio && vazio.textContent.includes("vazio")){
    carrinho.innerHTML = "";
  }

  let item = document.createElement("p");
  item.innerHTML = `
    ${nome} - R$ ${preco.toFixed(2)}
    <button class="remover" onclick="removerItem(this, ${preco})">X</button>
  `;
  carrinho.appendChild(item);

  atualizarTotal(preco);
}

/* Remover item */
function removerItem(botao, preco){
  botao.parentElement.remove();
  atualizarTotal(-preco);

  // Se ficar vazio
  let carrinho = document.getElementById("itens-carrinho");
  if(carrinho.children.length === 0){
    carrinho.innerHTML = "<p>Seu carrinho está vazio</p>";
    document.getElementById("total-carrinho").textContent = "0,00";
  }
}

/* Atualizar total */
let total = 0;
function atualizarTotal(valor){
  total += valor;
  if(total < 0) total = 0;
  document.getElementById("total-carrinho").textContent = total.toFixed(2);
}
