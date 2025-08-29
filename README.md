# Cypress - Fundamentos

Projeto básico para aprender os fundamentos do Cypress - uma ferramenta moderna para testes end-to-end em aplicações web.

## Como usar este projeto

```bash
# Clone o repositório
git clone https://github.com/lauanderson-rael/cypress-fundamental.git

# Entre na pasta do projeto
cd cypress-fundamental

# Instale as dependências
npm install

# Execute os testes
npm run cy:open
```

## O que é Cypress?

Cypress é uma ferramenta de teste que permite:
- Escrever testes E2E de forma simples e intuitiva
- Executar testes em tempo real no navegador
- Debugar testes com facilidade
- Capturar screenshots e vídeos automaticamente

## Executar Testes

```bash
# Modo interativo (recomendado para desenvolvimento)
npm run cy:open

# Modo headless (para CI/CD)
npm run cy:run
```

## Exemplo de Teste

```javascript
describe('Exemplo básico', () => {
  it('deve visitar a página inicial', () => {
    cy.visit('https://example.com')
    cy.contains('Example Domain')
    cy.get('h1').should('be.visible')
  })
})
```

## CI/CD

Nesse projeto os testes executam automaticamente no GitHub Actions:
- ✅ A cada push nas branches `main` e `develop`
- ✅ Em Pull Requests

## Estrutura do Projeto

```
cypress/
├── e2e/          # Testes E2E
│   └── spec.cy.js
├── fixtures/     # Dados de teste (JSON)
│   └── example.json
└── support/      # Comandos customizados
    ├── commands.js
    └── e2e.js
```

## Comandos Úteis do Cypress

| Comando | Descrição |
|---------|----------|
| `cy.visit()` | Navega para uma URL |
| `cy.get()` | Seleciona elementos |
| `cy.click()` | Clica em elementos |
| `cy.type()` | Digita texto |
| `cy.should()` | Faz asserções |
| `cy.contains()` | Encontra texto |

## Recursos

- [Documentação Oficial](https://docs.cypress.io)
- [Exemplos de Testes](https://github.com/cypress-io/cypress-example-kitchensink)
- [Best Practices](https://docs.cypress.io/guides/references/best-practices)
