# Requisitos do projeto

## Objetivo geral
Desenvolver uma loja virtual simples, executada no navegador, para praticar os conceitos básicos de desenvolvimento web: interface, lógica de programação, armazenamento de dados e autenticação.

## Objetivos específicos
- Aplicar HTML e CSS básicos na construção das telas.
- Implementar lógica em JavaScript para validar e processar dados.
- Praticar autenticação simples (login).
- Armazenar dados no navegador com localStorage.
- Testar e documentar o sistema.

## Requisitos funcionais
| Código | Função | Descrição |
|--------|--------|-----------|
| RF01 | Login | O usuário informa usuário e senha; dados corretos levam à loja, incorretos mostram uma mensagem de erro. |
| RF02 | Listar produtos | Exibe nome e preço dos produtos e permite adicioná-los ao carrinho. |
| RF03 | Carrinho | Mostra os itens, permite remover e calcula o total. |
| RF04 | Finalizar compra | Confirma o pedido com o valor total e esvazia o carrinho. |

## Requisitos não funcionais
- Funcionar em navegadores modernos, sem servidor e sem instalação.
- Código simples e comentado.
- Visual mínimo.

## Fora do escopo
Pagamento real, cadastro de usuários, painel administrativo, frete e controle de estoque.

## Limitações conhecidas
- A senha fica escrita no código (`loja.js`). Em um sistema real, a autenticação é feita em um servidor.
- Os dados ficam apenas no navegador de quem usa.
