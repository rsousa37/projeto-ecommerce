// loja.js 

var USUARIOS = [{ usuario: "aluno", senha: "1234" }];

var PRODUTOS = [
  { id: 1, nome: "Caderno universitário", preco: 18.9 },
  { id: 2, nome: "Caneta azul (caixa)", preco: 24.5 },
  { id: 3, nome: "Mochila escolar", preco: 89.9 },
  { id: 4, nome: "Calculadora científica", preco: 59.0 }
];

// ---------- Armazenamento ----------
// No navegador usa o localStorage; no Node (testes) usa um objeto simples.
function criarArmazenamentoFalso() {
  var dados = {};
  return {
    getItem: function (chave) { return chave in dados ? dados[chave] : null; },
    setItem: function (chave, valor) { dados[chave] = String(valor); },
    removeItem: function (chave) { delete dados[chave]; }
  };
}

var armazenamento =
  typeof window !== "undefined" && window.localStorage
    ? window.localStorage
    : criarArmazenamentoFalso();

// ---------- Login ----------
function fazerLogin(usuario, senha) {
  for (var i = 0; i < USUARIOS.length; i++) {
    if (USUARIOS[i].usuario === usuario && USUARIOS[i].senha === senha) {
      armazenamento.setItem("sessao", usuario);
      return true;
    }
  }
  return false;
}

function estaLogado() {
  return armazenamento.getItem("sessao") !== null;
}

// ---------- Produtos ----------
function buscarProduto(id) {
  for (var i = 0; i < PRODUTOS.length; i++) {
    if (PRODUTOS[i].id === id) {
      return PRODUTOS[i];
    }
  }
  return null;
}

// ---------- Carrinho ----------
function obterCarrinho() {
  var texto = armazenamento.getItem("carrinho");
  return texto ? JSON.parse(texto) : [];
}

function salvarCarrinho(carrinho) {
  armazenamento.setItem("carrinho", JSON.stringify(carrinho));
}

function adicionarAoCarrinho(id) {
  var carrinho = obterCarrinho();
  for (var i = 0; i < carrinho.length; i++) {
    if (carrinho[i].id === id) {
      carrinho[i].quantidade++;
      salvarCarrinho(carrinho);
      return;
    }
  }
  carrinho.push({ id: id, quantidade: 1 });
  salvarCarrinho(carrinho);
}

function removerDoCarrinho(id) {
  var carrinho = obterCarrinho().filter(function (item) {
    return item.id !== id;
  });
  salvarCarrinho(carrinho);
}

function calcularTotal() {
  var carrinho = obterCarrinho();
  var total = 0;
  for (var i = 0; i < carrinho.length; i++) {
    var produto = buscarProduto(carrinho[i].id);
    total += produto.preco * carrinho[i].quantidade;
  }
  return Math.round(total * 100) / 100;
}


// ---------- Utilidades ----------
function formatarPreco(valor) {
  return "R$ " + valor.toFixed(2).replace(".", ",");
}

// ---------- Arquivo de testes usa as funções no Node.
if (typeof module !== "undefined") {
  module.exports = {
    fazerLogin: fazerLogin, estaLogado: estaLogado,
    buscarProduto: buscarProduto, obterCarrinho: obterCarrinho,
    adicionarAoCarrinho: adicionarAoCarrinho, removerDoCarrinho: removerDoCarrinho,
    calcularTotal: calcularTotal,
    formatarPreco: formatarPreco
  };
}
