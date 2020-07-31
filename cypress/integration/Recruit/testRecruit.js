describe('My first test case for cypress',function(){
  it('招聘一个人',function(){
   //登录
    cy.visit('http://localhost:8081/login') //访问url
    cy.get('#username').type('Erin Scholcroft')
    cy.get('#password').type('2079layn')
    cy.get('#log').click()

    //招聘一个人
    cy.get('#Irecruit').click()
    //等待页面加载完
    //一分钟内加载完
cy.get('#card',{timeout:60000}).first().trigger('mouseover').within(()=>{
  cy.get('button[type=button]').click({force: true})
})
    //选择工作
cy.get('#data-choose').click()
   /* cy.get('button[class="ivu-btn ivu-btn-primary"]').click()*/
cy.contains('确定').click()
      /*cy.get('#my_recruit').click({force: true})*/

  })
  it('验证招聘成功',function () {
    cy.get('#employees').click({force: true})
    //打开
    cy.get('.ant-collapse-header').first().click()
    cy.get('.ant-card-body').should('contain','Noah Neno')
  })
})
