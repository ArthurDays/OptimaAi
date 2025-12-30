# 🚀 Óptima Digital - Agência de Marketing & Automação com IA

[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen.svg)](package.json)
[![Coverage](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg)](tests/)
[![Tests](https://img.shields.io/badge/Tests-Passing-blue.svg)](tests/)
[![License: MIT](https://img.shields.io/badge/License-MIT-orange.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-2.0.0-orange.svg)](CHANGELOG.md)

**Óptima Digital** é uma plataforma web de alta performance focada em conversão, marketing digital e automação. Este projeto utiliza **Vanilla JavaScript** moderno, **Tailwind CSS** e arquitetura **PWA** (Progressive Web App).

---

## 🛠 Setup e Instalação

Para rodar este projeto localmente do zero, siga os passos abaixo:

1.  **Pré-requisitos**: Certifique-se de ter o [Node.js](https://nodejs.org/) instalado (versão 18+ recomendada).

2.  **Clone o repositório**:
    ```bash
    git clone https://github.com/ArthurDays/OptimaAi.git
    cd OptimaAi
    ```

3.  **Instale as dependências**:
    ```bash
    npm install
    ```
    *Isso instalará o Jest (testes), Husky (hooks de git) e outras ferramentas de desenvolvimento.*

4.  **Inicie o Servidor Local**:
    Como é um projeto estático, você pode usar qualquer servidor HTTP simples.
    *   Com VS Code: Instale a extensão "Live Server" e clique em "Go Live".
    *   Via Python: `python -m http.server 8000`
    *   Via Node: `npx serve .`

---

## 💻 Comandos e Scripts

O projeto possui scripts configurados no `package.json` para facilitar o desenvolvimento:

### `npm test`
Executa a suíte de testes unitários e de integração utilizando **Jest**.
- **O que faz:** Roda todos os arquivos `.test.js` na pasta `tests/`.
- **Cobertura:** Validações de formulário, formatação de dados, segurança e lógica do DOM.

### `npm run build`
Prepara o projeto para produção.
- **Nota:** Como utilizamos Tailwind CSS pré-compilado e Vanilla JS, este passo atualmente é simplificado (placeholder), mas está configurado para integração futura com pipelines de CI/CD.

### 🐶 Husky (Git Hooks)
Utilizamos **Husky** para garantir a qualidade do código antes de cada commit.
- **Como funciona:** Ao tentar fazer um `git commit`, o Husky executa automaticamente os testes. Se algum teste falhar, o commit é **bloqueado**.
- **Benefício:** Impede que código quebrado seja enviado para o repositório.

---

## 🏗 Arquitetura e Testes (TDD)

Adotamos a metodologia **TDD (Test Driven Development)** e **Mobile First**.

### Estrutura de Testes
Os testes estão localizados na pasta `tests/` e cobrem:

1.  **Unitários (`validators.test.js`, `formatters.test.js`)**: Testam funções puras isoladas (ex: validação de email, máscara de telefone).
2.  **Integração DOM (`dom.test.js`)**: Simulam interações do usuário com a interface (ex: preencher formulário e enviar). Utiliza `jsdom` para emular o navegador no Node.js.
3.  **Segurança (`security.test.js`)**: Testes de "Casos Extremos" para garantir que a aplicação não quebra com inputs maliciosos (ex: null, undefined, ReDoS).
4.  **Service Worker (`service-worker.test.js`)**: Valida a estratégia de cache offline.

### Mocks
Para manter os testes rápidos e isolados, **mockamos** dependências externas manualmente dentro dos arquivos de teste:
- **Fetch API**: Mockada globalmente para evitar chamadas reais de rede durante testes de formulário.
- **DOM Elements**: O `document.body` é resetado a cada teste usando o conteúdo real do `index.html`.

---

## 📱 PWA e Service Worker

O projeto é um **Progressive Web App** totalmente funcional, capaz de funcionar offline.

### Como testar o Service Worker localmente:

1.  Sirva a aplicação usando um servidor HTTP seguro ou local (ex: Live Server).
2.  Abra o **DevTools** do Chrome (F12).
3.  Vá para a aba **Application** > **Service Workers**.
4.  Marque a opção "Update on reload" para facilitar o desenvolvimento.
5.  **Teste Offline:**
    - Na aba **Network**, altere o status de "No throttling" para **"Offline"**.
    - Recarregue a página.
    - O site deve carregar normalmente graças ao cache do Service Worker.

---

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).

---
**Desenvolvido pela [Óptima Digital](https://optimati.com.br/)** 💎
