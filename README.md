# Mini Loja

E-commerce acadêmico simples, desenvolvido como projeto de graduação com HTML, CSS e JavaScript puro. Roda direto no navegador, sem servidor e sem instalação, e guarda os dados no `localStorage`.

## Funcionalidades

- **Login:** valida usuário e senha e bloqueia as demais telas para quem não entrou.
- **Listagem de produtos:** exibe nome e preço e permite adicionar ao carrinho.
- **Carrinho de compras:** mostra os itens com quantidade, permite remover e calcula o total.
- **Finalizar compra:** confirma o pedido com o valor total e esvazia o carrinho.
- **Sair:** encerra a sessão e volta para o login.

## Tecnologias

- HTML5
- CSS3
- JavaScript
- `localStorage` do navegador para guardar login e carrinho

## Estrutura do projeto

```
projeto-ecommerce/
├── README.md
├── dependências.txt        # requisitos para executar o projeto e os testes
├── docs/                   # documentação
│   ├── requisitos.md
│   ├── fluxo-de-telas.md
│   ├── modelo-de-dados.md
│   └── relatorio.md
├── src/                    # código da aplicação
│   ├── login.html
│   ├── produtos.html
│   ├── carrinho.html
│   ├── css/estilo.css
│   └── js/loja.js          # lógica: login, produtos e carrinho
└── tests/                  # testes da lógica
    ├── testes.js
    └── testes.html
```

## Como executar

1. Baixe ou clone o repositório: 
2. Abra o arquivo `src/login.html` no navegador (clique duas vezes ou arraste para a janela do navegador).
3. Entre com o usuário de teste:

   | Usuário | Senha |
   |---------|-------|
   | aluno   | 1234  |

Não é preciso instalar nada nem iniciar servidor.

## Como executar os testes

Os testes cobrem o login e o carrinho.

**Pelo terminal** (requer Node.js 14 ou superior):

node tests/testes.js

**Pelo navegador:** abra `tests/testes.html`. Atenção: esse modo limpa o login e o carrinho salvos no navegador.

## Documentação

Os documentos do projeto estão na pasta [`docs/`](docs/):

- [Requisitos](docs/requisitos.md): objetivos, requisitos funcionais e limitações.
- [Fluxo de telas](docs/fluxo-de-telas.md): como o usuário navega pela loja.
- [Modelo de dados](docs/modelo-de-dados.md): dados fixos e o que fica no `localStorage`.
- [Relatório](docs/relatorio.md): relatório final do projeto.

## Equipe

| Integrante | Responsabilidades |
|------------|-------------------|
| Robson S. de Sousa| Repositório no GitHub, estilos CSS e documentação |
| Marcos | Loja, suas funcionalidades e testes |

## Limitações conhecidas

- A senha fica escrita no código (`src/js/loja.js`).
- Os dados ficam apenas no navegador de quem usa a loja.
- Não há pagamento real, cadastro de usuários ou controle de estoque.
