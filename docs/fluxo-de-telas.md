# Fluxo de telas

```
login.html --(login válido)--> produtos.html <--> carrinho.html
     ^                              |                  |
     +--------------(Sair)----------+------------------+
```

| Tela | Arquivo | O que faz |
|------|---------|-----------|
| Login | src/login.html | Formulário de usuário e senha; mostra erro se os dados estiverem incorretos. |
| Produtos | src/produtos.html | Lista os produtos e adiciona ao carrinho. Exige login. |
| Carrinho | src/carrinho.html | Lista os itens, remove, mostra o total e finaliza a compra. Exige login. |

Quem tentar abrir Produtos ou Carrinho sem login é levado de volta ao Login.
