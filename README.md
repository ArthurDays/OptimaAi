# Óptima Digital

[![PWA](https://img.shields.io/badge/PWA-ready-5A0FC8?logo=pwa)](manifest.json)

Site institucional da **Óptima Digital**, voltado a marketing, automação e soluções com inteligência artificial. O projeto combina experiência mobile-first, Progressive Web App, SEO técnico e testes automatizados — sem depender de um framework de interface em produção.

**Site:** [optimati.com.br](https://optimati.com.br/)

## O que o projeto demonstra

- Interface responsiva com HTML, JavaScript e Tailwind CSS pré-compilado.
- PWA instalável com manifesto e service worker para cache offline.
- SEO com metadados, Open Graph, Twitter Cards, sitemap e dados estruturados.
- Testes de validação, formatação, DOM, armazenamento, segurança e service worker.
- Git hooks com Husky para reduzir regressões antes do commit.
- Páginas de política de privacidade e termos de serviço.

## Arquitetura

```text
index.html
├── styles-tailwind.css      # estilos compilados
├── scripts.min.js           # comportamento da interface
├── manifest.json            # configuração da PWA
├── service-worker.js        # cache e experiência offline
├── assets/                  # identidade e imagens otimizadas
└── tests/                   # testes Jest + jsdom
```

## Executar localmente

Requer Node.js 18+ e npm.

```bash
git clone https://github.com/ArthurDays/OptimaAi.git
cd OptimaAi
npm install
npx serve .
```

O service worker requer HTTP local ou HTTPS; abrir `index.html` diretamente não reproduz todos os recursos da PWA.

## Qualidade

```bash
npm test       # executa a suíte Jest
npm run build  # valida o passo de build atual
```

Os testes cobrem validadores, formatadores, interações com o DOM, armazenamento no navegador, entradas potencialmente maliciosas e o service worker.

## Verificar o modo offline

1. Execute o projeto por um servidor HTTP local.
2. Abra DevTools → Application → Service Workers.
3. Confirme que o service worker está registrado.
4. Em Network, selecione **Offline** e recarregue a página.

## Observações de desenvolvimento

O arquivo `scripts.min.js` é o artefato JavaScript atualmente servido. Ao alterar comportamento, mantenha os testes alinhados e valide no navegador. O comando de build atual não realiza bundling; essa decisão mantém a entrega estática simples.

## Licença

Consulte os termos definidos no repositório antes de redistribuir o projeto.

---

Desenvolvido pela [Óptima Digital](https://optimati.com.br/).
