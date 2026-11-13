if (typeof require !== "undefined") {
  var loja = require("../src/js/loja.js");
  Object.keys(loja).forEach(function (nome) { globalThis[nome] = loja[nome]; });
}

var aprovados = 0;
var falhas = 0;

function mostrar(texto) {
  if (typeof document !== "undefined") {
    document.getElementById("resultado").textContent += texto + "\n";
  } else {
    console.log(texto);
  }
}

function esperar(descricao, obtido, esperado) {
  if (obtido === esperado) {
    aprovados++;
    mostrar("OK    " + descricao);
  } else {
    falhas++;
    mostrar("FALHA " + descricao + " (esperado: " + esperado + ", obtido: " + obtido + ")");
  }
}

// Esvazia o carrinho removendo cada item
function limparTudo() {
  obterCarrinho().forEach(function (item) {
    removerDoCarrinho(item.id);
  });
}

// ---------- Testes de login ----------
esperar("login com dados corretos retorna verdadeiro", fazerLogin("aluno", "1234"), true);
esperar("após login válido, estaLogado é verdadeiro", estaLogado(), true);
esperar("login com senha errada retorna falso", fazerLogin("aluno", "0000"), false);
esperar("login com usuário inexistente retorna falso", fazerLogin("outro", "1234"), false);

// ---------- Testes de carrinho ----------
limparTudo();
esperar("carrinho começa vazio", obterCarrinho().length, 0);
esperar("total do carrinho vazio é 0", calcularTotal(), 0);

adicionarAoCarrinho(1); // Caderno 18,90
esperar("adicionar um produto cria 1 item", obterCarrinho().length, 1);
esperar("total com 1 caderno é 18.9", calcularTotal(), 18.9);

adicionarAoCarrinho(1);
esperar("adicionar o mesmo produto aumenta a quantidade", obterCarrinho()[0].quantidade, 2);
esperar("total com 2 cadernos é 37.8", calcularTotal(), 37.8);

adicionarAoCarrinho(3); // Mochila 89,90
esperar("dois produtos diferentes geram 2 itens", obterCarrinho().length, 2);
esperar("total com 2 cadernos e 1 mochila é 127.7", calcularTotal(), 127.7);

removerDoCarrinho(1);
esperar("remover o caderno deixa 1 item", obterCarrinho().length, 1);
esperar("total só com a mochila é 89.9", calcularTotal(), 89.9);

esperar("formatarPreco usa vírgula", formatarPreco(18.9), "R$ 18,90");

limparTudo();

mostrar("\nResumo: " + aprovados + " aprovados, " + falhas + " falhas.");
if (typeof process !== "undefined" && falhas > 0) {
  process.exit(1);
}