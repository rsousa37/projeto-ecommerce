// Testes unitários: cada função da lógica é testada isoladamente.
const { test, beforeEach } = require("node:test");
const assert = require("node:assert/strict");
const loja = require("../../src/js/loja.js");

// Estado limpo antes de cada teste
beforeEach(() => {
  loja.sair();
  loja.limparCarrinho();
});

test("fazerLogin aceita usuário e senha corretos", () => {
  assert.equal(loja.fazerLogin("aluno", "1234"), true);
});

test("fazerLogin recusa senha incorreta", () => {
  assert.equal(loja.fazerLogin("aluno", "0000"), false);
});

test("fazerLogin recusa usuário inexistente", () => {
  assert.equal(loja.fazerLogin("outro", "1234"), false);
});

test("estaLogado é falso sem login e verdadeiro após login válido", () => {
  assert.equal(loja.estaLogado(), false);
  loja.fazerLogin("aluno", "1234");
  assert.equal(loja.estaLogado(), true);
});

test("sair encerra a sessão", () => {
  loja.fazerLogin("aluno", "1234");
  loja.sair();
  assert.equal(loja.estaLogado(), false);
});

test("buscarProduto retorna o produto pelo id", () => {
  assert.equal(loja.buscarProduto(1).nome, "Caderno universitário");
});

test("buscarProduto retorna null para id inexistente", () => {
  assert.equal(loja.buscarProduto(999), null);
});

test("adicionarAoCarrinho cria um item novo", () => {
  loja.adicionarAoCarrinho(1);
  assert.deepEqual(loja.obterCarrinho(), [{ id: 1, quantidade: 1 }]);
});

test("adicionarAoCarrinho soma a quantidade do mesmo produto", () => {
  loja.adicionarAoCarrinho(1);
  loja.adicionarAoCarrinho(1);
  assert.equal(loja.obterCarrinho()[0].quantidade, 2);
});

test("removerDoCarrinho retira o item inteiro", () => {
  loja.adicionarAoCarrinho(1);
  loja.adicionarAoCarrinho(3);
  loja.removerDoCarrinho(1);
  assert.deepEqual(loja.obterCarrinho(), [{ id: 3, quantidade: 1 }]);
});

test("calcularTotal é 0 com carrinho vazio", () => {
  assert.equal(loja.calcularTotal(), 0);
});

test("calcularTotal soma preço vezes quantidade", () => {
  loja.adicionarAoCarrinho(1);
  loja.adicionarAoCarrinho(1);
  loja.adicionarAoCarrinho(3);
  assert.equal(loja.calcularTotal(), 127.7);
});

test("limparCarrinho esvazia o carrinho", () => {
  loja.adicionarAoCarrinho(2);
  loja.limparCarrinho();
  assert.equal(loja.obterCarrinho().length, 0);
});

test("formatarPreco usa vírgula e duas casas decimais", () => {
  assert.equal(loja.formatarPreco(18.9), "R$ 18,90");
});
