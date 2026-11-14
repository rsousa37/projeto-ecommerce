# Modelo de dados

Os dados fixos ficam em `src/js/loja.js`; o que muda durante o uso fica no `localStorage` do navegador.

## Usuário (fixo)
| Campo | Exemplo |
|-------|---------|
| usuario | aluno |
| senha | 1234 |

## Produto (fixo)
| Campo | Tipo | Exemplo |
|-------|------|---------|
| id | número | 1 |
| nome | texto | Caderno universitário |
| preco | número | 18.9 |

## Armazenado no localStorage
| Chave | Conteúdo |
|-------|----------|
| sessao | nome do usuário logado (some ao sair) |
| carrinho | lista de itens em JSON, ex.: `[{"id":1,"quantidade":2}]` |
