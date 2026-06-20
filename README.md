# Pipeline de Integração Contínua com GitHub Actions, Mocha e Mochawesome para geração de relatórios

## Objetivo

Este projeto implementa uma pipeline de Integração Contínua (CI) utilizando GitHub Actions para execução de testes automatizados com Mocha e utilização do Mochaawesome para geração de relatórios.

A pipeline foi configurada para executar os testes unitários de um projeto desenvolvido em outra disciplina da pós-graduação e gerar relatórios automaticamente a cada execução.

---

## Tecnologias utilizadas

- Node.js
- Mocha
- Mochawesome
- GitHub Actions

---

## Solução implementada

A pipeline foi criada utilizando GitHub Actions e executa automaticamente os testes do projeto em três cenários de pipeline diferentes.

### Gatilhos configurados

A pipeline é executada quando:

- Há um push na branch `master`
- É executada manualmente (workflow_dispatch)
- É executada de forma agendada (schedule)

O agendamento foi configurado via cron (em UTC) para execução diária às 13:05 no horário de São Paulo (UTC-3)

---

## Fluxo da pipeline

A execução segue os seguintes passos:

1. Checkout do código do repositório, garantindo a versão mais recente do projeto.
2. Configuração do Node.js no ambiente de execução.
3. Instalação das dependências com `npm ci`, garantindo que todas as dependências sejam instaladas exatamente conforme definido no arquivo `package-lock.json`, tornando a execução reproduzível e consistente.
4. Execução dos testes automatizados com `npm test`, comando definido no arquivo `package.json` para executar os testes com Mocha utilizando o reporter Mochawesome, responsável por gerar o relatório de execução.
5. Geração do relatório de testes nos formatos HTML e JSON.
6. Armazenamento do relatório como artifact na pipeline para consulta e download após a execução.

---

## Relatório de testes

O Mochawesome gera automaticamente relatórios nos formatos HTML e JSON após a execução dos testes.

Esses relatórios são armazenados como artifact no GitHub Actions, permitindo sua consulta após a execução da pipeline.

---

## Conceitos utilizados

- Integração Contínua (CI)
- Automação de testes
- GitHub Actions (Workflows)
- Execução de pipelines com múltiplos gatilhos (push, manual e schedule)
- Instalação de dependências em ambiente isolado (npm ci)
- Geração e armazenamento de artifacts em CI/CD
