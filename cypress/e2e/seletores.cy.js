///<reference types = "cypress"/>

describe('Seletores avançados com Cypress', () => {

  beforeEach(() => {
    cy.visit('../../index.html')
  });

  it('Seleciona e clica em elementos que contêm um texto específico', () => {
    cy.get('[value="Enviar"]').click()
    cy.contains('Aceito os').click()
  });

  it('Seleciona e verifica se o checkbox está marcado', () => {
    cy.get('[id="aceitar-termos"]').check().should('be.checked')
  });

  it('Seleciona um elemento usando atributo data-test e verifica mensagem de feedback', () => {
    cy.get('[data-test="enviar"]').click()
    cy.get('[id="mensagem-feedback"]').should('contain' , 'Obrigado por compartilhar conosco!')
  });

  it('Seleciona um valor em um select e verifica mensagem de feedback', () => {
    cy.get('[name="opcao"]').select('Gato')
  });

  //Medios

  it('Seleciona o primeiro elemento da lista de cachorros usando first()', () => {
    cy.get('.raca-cachorro').first().should('contain', 'Golden Retriever')
  });

  it('Seleciona o último elemento da lista de cachorros usando last()', () => {
    cy.get('.raca-cachorro').last().should('contain', 'Rottweiler')
  });

  it('Seleciona o terceiro elemento da lista de cachorros usando eq()', () => {
    cy.get('.raca-cachorro').eq(2).should('contain', 'Labrador')
  });

  it('Seleciona todos os elementos filhos dentro do contêiner de cachorros', () => {
    cy.get('[data-test="div-cachorros"]').find('li')
  });

  it('Seleciona o elemento pai de um elemento com uma classe específica', () => {
    cy.get('#gato-3').parent('[name="gatos"]')
  });

  it('Seleciona o próximo irmão do terceiro elemento da lista de gatos', () => {
    cy.get('#gato-3').next()
  });

  it.only('Seleciona o irmão anterior do terceiro elemento da lista de gatos', () => {
    cy.get('#gato-3').prev()
  });
  
  it('Seleciona o irmão anterior da div de gatos', () => {
    cy.get('.container-gatos').prev().should('contain', 'SRD Caramelo')
  });

  it('Seleciona um elemento com ID e classe específicos', () => {
    cy.get('#id-item-especial.item-isolado').should('contain', 'SRD Caramelo')
  });

  it('Seleciona o segundo elemento da lista de cachorros usando nth-child', () => {
    cy.get('li:nth-child(2)').should('contain', 'Bulldog Francês')
  });

  it('Seleciona o primeiro e último elemento da lista de cachorros usando pseudo-classes CSS', () => {
    cy.get('li:first-of-type').should('contain', 'Golden Retriever')
    cy.get('li:last-of-type').should('contain', 'Rottweiler')
  });

  it('Filtra e seleciona elementos que contêm a palavra "Bulldog"', () => {
    cy.get('.raca-cachorro').filter(':contains("Bulldog")')
      .should('have.length', 1)
      .and('contain', 'Bulldog Francês')
  });

  it('Seleciona e verifica o conteúdo de todos os elementos <li> da lista de cachorros', () => {
    cy.get('li').each(($el, index, $list) => {
      expect($el.text()).to.match(/(Golden Retriever|Bulldog Francês|Labrador|Poodle|Beagle|Chihuahua|Dachshund|Pastor Alemão|Boxer|Rottweiler)/)
    });
  });

});
