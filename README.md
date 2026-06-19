# Pipeline de Integração Contínua com GitHub Actions e Mocha

## Objetivo

Este projeto implementa uma pipeline de Integração Contínua (CI) utilizando GitHub Actions para execução de testes automatizados com Mocha.

A pipeline foi configurada para executar testes unitários e gerar relatórios automaticamente a cada execução.

---

## Tecnologias utilizadas

- Node.js
- Mocha
- Mochawesome
- GitHub Actions

---

## Solução implementada

A pipeline foi criada utilizando GitHub Actions e executa automaticamente os testes do projeto em diferentes cenários.

### Gatilhos configurados

A pipeline é executada quando:

- Há um push na branch `master`
- É executada manualmente (workflow_dispatch)
- É executada de forma agendada (schedule)

O agendamento foi configurado para execução semanal às 00:00 (horário de Brasília convertido para UTC).

---

## Fluxo da pipeline

A execução segue os seguintes passos:

1. Checkout do código do repositório
2. Configuração do Node.js no ambiente de execução
3. Instalação das dependências com `npm ci`
4. Execução dos testes com `npm test`
5. Geração de relatório com Mochawesome
6. Armazenamento do relatório como artifact na pipeline

---

## Relatório de testes

Os testes são executados com Mocha e o Mochawesome gera um relatório em formato HTML e JSON.

Esse relatório é armazenado como artifact na execução do GitHub Actions, permitindo sua consulta após a execução da pipeline.

---

## Conceitos utilizados

- Integração Contínua (CI)
- Automação de testes
- GitHub Actions (Workflows)
- Execução de pipelines com múltiplos gatilhos (push, manual e schedule)
- Instalação de dependências em ambiente isolado (npm ci)
- Geração e armazenamento de artifacts em CI/CD
