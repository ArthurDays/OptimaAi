# Changelog - Óptima Digital

Todas as alterações documentadas abaixo foram feitas para transformar o repositório original em uma versão pronta para produção, com foco em QA, Acessibilidade e animações premium.

O repositório principal para clonagem e contribuições é: [ArthurDays/OptimaAi](https://github.com/ArthurDays/OptimaAi)

---

## [2.0.0] - Dezembro 2025 (Edição Sênior & Estabilidade) 🚀
> Esta versão foca na correção de bugs críticos de estrutura, navegação e no upgrade completo da experiência mobile.

### 🛠 Correções Críticas e Estruturais
- **Restauração de Scroll**: Corrigido erro de aninhamento HTML (tag `</header>` ausente) que bloqueava a rolagem da página.
- **Navegação Por Âncoras**: Validado o funcionamento de todos os links `#ID`, garantindo navegação suave entre as seções.
- **Auto-Close Mobile**: Implementada lógica de fechamento automático do menu mobile após a seleção de uma seção.

### ✨ Upgrade de UI/UX e Menu Mobile
- **Novo Mobile Sidebar (Drawer)**: Substituído o menu dropdown antigo por uma barra lateral premium deslizante.
  - **Premium Design**: Efeito Glassmorphism com `backdrop-blur` (25px) e overlay de fundo.
  - **Isolamento de Estilo**: Criado o arquivo `mobile-sidebar.css` para garantir estabilidade e evitar conflitos de classes.
- **Sistema de Toast 2.0**: Upgrade visual completo do sistema de notificações.
  - Adicionados ícones dinâmicos do Lucide (`check-circle` e `alert-circle`).
  - Aplicado efeito de vidro e sombras suaves para maior legibilidade.

### 🛡 Validação Sênior e Segurança
- **Validador de Nome Completo**: Nova lógica que exige pelo menos duas palavras e caracteres mínimos para evitar leads falsos.
- **Smart Validation**: Aprimorada a validação de comprimento de mensagens e formato de telefone/WhatsApp.

### ♿ Acessibilidade (A11y)
- **Aria-Labels**: Adicionados atributos descritivos em todos os links e botões icônicos para compatibilidade total com leitores de tela.

### 🧹 Limpeza e Otimização de Repositório
- **Remoção de Redundâncias**: Eliminada a pasta de metadados de teste `.playwright-mcp`.
- **Assets Enxutos**: Removidos 9 arquivos de imagem redundantes ou não utilizados (SVG, WEBP e PNG de sistema) para reduzir o tamanho total do projeto.

---

## [1.1.0] - Dezembro 2025 (Refatoração & Base Premium) 💎
> Versão inicial de transformação do repositório para um padrão pronto para produção.

### 🚀 Novas Funcionalidades e Melhorias
- **Infinite Typewriter Hook**: Refatorada a lógica do título principal para um loop infinito fluido.
- **Sistema de Toast (v1)**: Implementado sistema de notificações customizadas para o formulário de contato.
- **SEO & PWA**: Criação do `robots.txt` e sincronização do Clarity SDK.
- **Acessibilidade**: Restauração do cursor do usuário e remoção de scripts redundantes.

### 🛠 Refatoração e Limpeza
- **Consolidação de Lógica**: FAQ e interatividades movidas para o `scripts.min.js`.
- **Tradução Total**: Toda a documentação técnica e comentários convertidos para Português (Brasil).
- **URLs Reais**: Substituição de placeholders `#` por links oficiais da agência.

---

## 📂 Alterações Detalhadas por Arquivo (Histórico Acumulado)

- **[index.html](index.html)**: Limpeza de scripts redundantes, correção estrutural da tag header e preparação do Web3Forms.
- **[scripts.min.js](scripts.min.js)**: Implementação do motor de typewriter unificado, validações seniores e sistema de toasts.
- **[mobile-sidebar.css](mobile-sidebar.css)**: Criação do novo sistema de menu lateral isolado.
- **[README.md](README.md) / [CHANGELOG.md](CHANGELOG.md)**: Documentação profissional completa em português.
- **[robots.txt](robots.txt)**: Ajuste de regras para SEO e rastreio de PWA.
