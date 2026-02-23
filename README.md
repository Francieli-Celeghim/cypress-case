# Projeto de Testes Automatizados

Este projeto contém **testes automatizados de UI e API** utilizando **Cypress**, com foco em garantir a qualidade das funcionalidades e integrações do sistema.

---

## 🧪 Tipos de Testes

### 🔹 Testes de UI (Interface)

* Validação de fluxos do usuário
* Testes end-to-end (E2E)
* Simulação de comportamento real do usuário no navegador

📁 Local:

```
cypress/e2e/ui
```

---

### 🔹 Testes de API

* Validação de endpoints
* Regras de negócio
* Status HTTP e contratos (schemas)

📁 Local:

```
cypress/e2e/api
```

---

## ⚙️ Pré-requisitos

Antes de rodar os testes, é necessário ter instalado:

* Node.js
* NPM

Para instalar as dependências do projeto:

```bash
npm install
```

---

## ▶️ Como rodar os testes

### 🖥️ Abrir o Cypress (modo interativo)

Ideal para desenvolvimento e debug:

```bash
npx cypress open
```

Depois:

1. Selecione **E2E Testing**
2. Escolha o navegador
3. Clique no teste desejado

---

### 🤖 Rodar todos os testes (modo headless)

```bash
npx cypress run
```

---

### 🎯 Rodar apenas testes de UI

```bash
npx cypress run --spec "cypress/e2e/ui/**"
```

---

### 🎯 Rodar apenas testes de API

```bash
npx cypress run --spec "cypress/e2e/api/**"
```

---

## 📌 Observações

* Os testes podem ser executados localmente ou em pipeline CI/CD
* Recomenda-se rodar testes de API antes dos testes de UI
* Commits devem ser feitos apenas com arquivos relevantes (sem node_modules)

---

## ✅ Tecnologias utilizadas

* Cypress
* JavaScript
* Node.js

---

🚀 Projeto focado em qualidade, automação e boas práticas de testes.
