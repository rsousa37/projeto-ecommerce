# Pipeline de CI/CD da Mini Loja

## Objetivo
(Por que a pipeline existe e o que ela garante.)

## Visão geral
Build → Testes (unitários e integração, em paralelo) → Cobertura → Artefato
(Explique cada job: nome, o que faz e quando falha.)

## Quando executa
Em todo push na main e em todo pull request para a main.

## Dependências e ambiente
Node 22, `npm ci` e package-lock.json (explique o problema "na minha máquina funciona").

## Testes e cobertura
(Quantos testes existem, o que cobrem e os limiares: 90% de linhas, instruções e funções, 80% de ramos.)

## Artefato e versionamento
(Padrão de nome mini-loja-vX.Y.Z-buildN, SemVer, conteúdo do pacote e como baixar.)

## Como rodar localmente
npm ci, npm test e npm run coverage.

## Evidências
(Links e prints: execução verde, execução vermelha, cobertura e artefato.)

## Problemas encontrados e soluções
(Descreva o que deu errado e como resolveram.)
