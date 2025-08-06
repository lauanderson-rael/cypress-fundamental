describe('Teste de Login', () => {
  it('Login com sucesso', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('lauanderson38@gmail.com')
    cy.get('[data-testid="senha"]').type('12345')
    cy.get('[data-testid="entrar"]').click()
    cy.get(':nth-child(1) > .card-body > div > [href="/minhaListaDeProdutos"] > [data-testid="adicionarNaLista"]').click()
    cy.get('h1').contains('Lista de Compras')
  })

  it('Login com falha', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('lauanderson38@gmail.com')
    cy.get('[data-testid="senha"]').type('1234444')
    cy.get('[data-testid="entrar"]').click()
    cy.get('.alert > :nth-child(2)').contains('Email e/ou senha inválidos')
  })
})


describe('Teste de Cadastro', () => {
  it.skip('Cadastro com sucesso', () => {
    cy.visit('https://front.serverest.dev/cadastrarusuarios')
    cy.get('[data-testid="nome"]').type('UsuarioTeste')
    cy.get('[data-testid="email"]').type('usuarioteste@gmail.com')
    cy.get('[data-testid="password"]').type('12345')
    cy.get('[data-testid="cadastrar"]').click()
  })

  it('Cadastro com falha por não inserir senha', () => {
    cy.visit('https://front.serverest.dev/cadastrarusuarios')
    cy.get('[data-testid="nome"]').type('UsuarioTeste2')
    cy.get('[data-testid="email"]').type('usuarioteste2@gmail.com')
    cy.get('[data-testid="cadastrar"]').click()
    cy.get('.alert > :nth-child(2)').contains('Password é obrigatório')
  })

})
