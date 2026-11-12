# 🚀 Óptima Digital - Agência de Marketing & Automação com IA

[![License: MIT](https://img.shields.io/badge/License-MIT-orange.svg)](https://opensource.org/licenses/MIT)

**Óptima Digital** é uma interface web focada em conversão, marketing digital e automação. Este projeto utiliza **Vanilla JavaScript** moderno, **Tailwind CSS** e arquitetura **PWA** (Progressive Web App).

---

## Estado e validação

Este repositório apresenta uma interface web. Não há percentual de cobertura ou resultado de testes certificado por este README. Execute a suíte e consulte os relatórios gerados para avaliar a versão utilizada.

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
O script atual é um placeholder; sua conclusão não comprova que o projeto está pronto para produção.
- **Nota:** Como utilizamos Tailwind CSS pré-compilado e Vanilla JS, este passo atualmente é simplificado (placeholder), mas está configurado para integração futura com pipelines de CI/CD.

### 🐶 Husky (Git Hooks)
O projeto utiliza **Husky** para executar verificações locais antes dos commits.
- **Como funciona:** Ao tentar fazer um `git commit`, o Husky executa automaticamente os testes. Se algum teste falhar, o commit é **bloqueado**.
- **Benefício:** Ajuda a detectar falhas antes do commit quando os hooks estão instalados e ativos; não substitui a validação em CI.

---

## 🏗 Arquitetura e Testes (TDD)

Adotamos a metodologia **TDD (Test Driven Development)** e **Mobile First**.

### Estrutura de Testes
Os testes estão localizados na pasta `tests/` e cobrem:

1.  **Unitários (`validators.test.js`, `formatters.test.js`)**: Testam funções puras isoladas (ex: validação de email, máscara de telefone).
2.  **Integração DOM (`dom.test.js`)**: Simulam interações do usuário com a interface (ex: preencher formulário e enviar). Utiliza `jsdom` para emular o navegador no Node.js.
3.  **Segurança (`security.test.js`)**: Testes de casos extremos para verificar o comportamento com entradas inesperadas (ex: null, undefined, ReDoS).
4.  **Service Worker (`service-worker.test.js`)**: Valida a estratégia de cache offline.

### Mocks
Para manter os testes rápidos e isolados, **mockamos** dependências externas manualmente dentro dos arquivos de teste:
- **Fetch API**: Mockada globalmente para evitar chamadas reais de rede durante testes de formulário.
- **DOM Elements**: O `document.body` é resetado a cada teste usando o conteúdo real do `index.html`.

---

## 📱 PWA e Service Worker

O projeto inclui recursos de **Progressive Web App** e cache por service worker. O comportamento offline deve ser verificado por fluxo; chamadas a serviços externos dependem de conexão.

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
