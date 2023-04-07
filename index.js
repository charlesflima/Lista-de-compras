
const inputDescricao = document.getElementById("inputDescricao");
const inputQuantidade = document.getElementById("inputQuantidade");
const inputPreco = document.getElementById("inputPreco");
const btAdicionar = document.getElementById("btAdicionar");
const btLimpar = document.getElementById("btLimpar");
const tbody = document.querySelector("#lista tbody");

let listaItems = [];

const redesenhaLista = (lista, listaItems) => {
  lista.innerHTML = "";
  for (let index = 0; index < listaItems.length; ++index) {
    const listItem = document.createElement("tr");
    const descricao = document.createElement("td");
    descricao.innerText = listaItems[index].descricao;
    const quantidade = document.createElement("td");
    quantidade.innerText = listaItems[index].quantidade;
    const preco = document.createElement("td");
    preco.innerText = listaItems[index].preco;
    listItem.appendChild(descricao);
    listItem.appendChild(quantidade);
    listItem.appendChild(preco);
    lista.appendChild(listItem);
  }
};

const handleBtAdicionarClick = () => {
  const descricao = inputDescricao.value;
  const quantidade = inputQuantidade.value;
  const preco = inputPreco.value;
  if (!descricao) {
    alert("Necessário digitar uma descrição!");
    return;
  }
  listaItems.push({ descricao, quantidade, preco });
  inputDescricao.value = "";
  inputQuantidade.value = "";
  inputPreco.value = "";
  inputDescricao.focus();
  redesenhaLista(tbody, listaItems);
};

const handleBtLimparClick = () => {
  listaItems = [];
  tbody.innerHTML = "";
  inputDescricao.focus();
};

btAdicionar.onclick = handleBtAdicionarClick;
btLimpar.onclick = handleBtLimparClick;