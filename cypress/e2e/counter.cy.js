describe('카운터앱', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })
  //시나리오1
  it('페이지에 진입하면 카운터 앱의 값 counter의 값이 0인 상태로 로드된다', () => {
    // cy.get('[data-cy=counter]').contains(0);
    cy.getByCy('counter').contains(0); // support/commands.js 참조
  });
  //시나리오2
  it('+버튼을 누르면  counte의 값이 1 증가한다', () => {
    // cy.get('[data-cy=plus-button').click();
    // cy.get('[data-cy=counter]').contains(1);
    cy.getByCy('plus-button').click();
    cy.getByCy('counter').contains(1);
  })
  it('-버튼을 누르면 counter 가 1 감소한다', () => {
    // cy.get('[data-cy=minus-button').click();
    // cy.get('[data-cy=counter]').contains(-1);
    cy.getByCy('minus-button').click();
    cy.getByCy('counter').contains(-1);
  })
});