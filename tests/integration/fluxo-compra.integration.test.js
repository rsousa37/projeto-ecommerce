// Testes de integração: várias funções trabalhando juntas,
// compartilhando o mesmo armazenamento, como na loja real.
const { test, beforeEach } = require("node:test");
const assert = require("node:assert/strict");
const loja = require("../../src/js/loja.js");

beforeEach(() => {
  loja.sair();
  loja.limparCarrinho();
});

test("fluxo completo: login, compra, finalização e logout", () => {
  // login
  assert.equal(loja.fazerLogin("aluno", "1234"), true);
  assert.equal(loja.estaLogado(), true);

  // escolha de produtos
  loja.adicionarAoCarrinho(1);
  loja.adicionarAoCarrinho(1);
  loja.adicionarAoCarrinho(3);
  assert.deepEqual(loja.obterCarrinho(), [
    { id: 1, quantidade: 2 },
    { id: 3, quantidade: 1 }
  ]);
  assert.equal(loja.calcularTotal(), 127.7);

  // remoção de um item
  loja.removerDoCarrinho(1);
  assert.equal(loja.calcularTotal(), 89.9);

  // finalização da compra
  const totalPago = loja.formatarPreco(loja.calcularTotal());
  loja.limparCarrinho();
  assert.equal(totalPago, "R$ 89,90");
  assert.equal(loja.obterCarrinho().length, 0);
  assert.equal(loja.calcularTotal(), 0);

  // logout
  loja.sair();
  assert.equal(loja.estaLogado(), false);
});

test("login inválido não cria sessão, mas o carrinho continua funcionando", () => {
  assert.equal(loja.fazerLogin("aluno", "errada"), false);
  assert.equal(loja.estaLogado(), false);
  loja.adicionarAoCarrinho(2);
  assert.equal(loja.calcularTotal(), 24.5);
});

test("o carrinho persiste no armazenamento entre leituras", () => {
  loja.adicionarAoCarrinho(4);
  const primeiraLeitura = loja.obterCarrinho();
  const segundaLeitura = loja.obterCarrinho();
  assert.deepEqual(primeiraLeitura, segundaLeitura);
  assert.equal(loja.formatarPreco(loja.calcularTotal()), "R$ 59,00");
});

test("sair não apaga o carrinho e limparCarrinho não encerra a sessão", () => {
  loja.fazerLogin("aluno", "1234");
  loja.adicionarAoCarrinho(1);
  loja.sair();
  assert.equal(loja.obterCarrinho().length, 1);
  loja.fazerLogin("aluno", "1234");
  loja.limparCarrinho();
  assert.equal(loja.estaLogado(), true);
});
