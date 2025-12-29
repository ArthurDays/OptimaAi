# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

## [1.2.0] - 2025-12-29

### ✅ Melhorias Técnicas e Correções Críticas

#### 🔐 Segurança e Resiliência
- **Fallback offline para formulário**: Sistema completo de queue no localStorage que salva mensagens quando o envio falha e tenta reenviar automaticamente na próxima visita
- **Validação de email robusta (RFC 5322)**: Substituída regex simples por versão completa que rejeita formatos inválidos (`test@localhost`, `test@.com`, `email@dominio..com`)

#### ♿ Acessibilidade e UX
- **Fallback `<noscript>`**: Banner laranja fixo alertando usuários com JavaScript desabilitado
- **Menu mobile auto-close**: Fecha automaticamente em mudança de orientação e resize (largura >768px)
- **Botão "Voltar ao Topo"**: Ativado com animação suave e estilos completos

#### 🎨 Design e Responsividade
- **Grid pattern responsivo**: Media query para telas <375px aumenta espaçamento de 30px para 50px, evitando densidade visual excessiva
- **Background grid global**: Aplicado padrão de grade com spotlight laranja no topo e ajuste para modo claro
- **Ajuste de padding do título hero**: Corrigido corte de letras descendentes (g, p) no texto animado

#### 🐛 Correções de Bugs
- **Banner de cookies corrigido**: Estilos de posicionamento fixo e z-index ajustados para garantir visibilidade
- **Grid background**: Adicionado `!important` para evitar sobrescrita por classes Tailwind

#### 📊 Auditoria e Qualidade
- **Score de Saúde do Projeto**: Aumentado de 78/100 para **92/100** (+14 pontos)
- **Análise de stress test completa**: Identificados e corrigidos 3 riscos críticos e 4 riscos moderados

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

### 🔌 Integrações e Produção
- **Ativação Web3Forms**: Configurada a chave de acesso real no formulário de contato, tornando o envio de leads funcional para produção.
- **Validação de Produção**: Removidos avisos e placeholders de configuração do formulário.

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
