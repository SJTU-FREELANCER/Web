describe('新增招聘信息',function () {
  it('登录', function () {
    cy.visit('http://localhost:8081/login') //访问url
    cy.get('#username').type('Erin Scholcroft')
    cy.get('#password').type('2079layn')
    cy.get('#log').click()
    cy.get('.menu',{timeout:60000}).should('contain','Erin Scholcroft')
  });

  it('新增,输入', function () {
    cy.get('#new_recruit').click({force: true})
    cy.get('#title').type('教师')
  });
})
