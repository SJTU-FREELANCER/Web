describe('新增招聘信息',function () {
  it('登录', function () {
    cy.visit('http://localhost:8080/login') //访问url
    cy.get('#username').type('Erin Scholcroft')
    cy.get('#password').type('2079layn')
    cy.get('#log').click()
    cy.get('.menu',{timeout:60000}).should('contain','Erin Scholcroft')
  });

  it('新增,输入,提交', function () {
    cy.get('#new_recruit').click({force: true})
    cy.get('#schedule').type('全天')
    cy.get('#title').type('教师')
    cy.get('#salary').type('20000')
    cy.get('#location').type('上海')
    cy.get('#cate').type('教师')
    cy.get('#experience').type('无')
    cy.get('#education').type('本科')
    cy.get('#quote').type('5')
    cy.get('#desc').type('无')

    cy.contains('Submit').click()
  });

})
