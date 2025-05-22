import selectors from '../selectors/loginPageSelectors';

class LoginPage {
  visit() {
  cy.visit('/web/index.php/auth/login');
}

  login(username, password) {
    cy.get(selectors.usernameInput).type(username);
    cy.get(selectors.passwordInput).type(password);
    cy.get(selectors.loginButton).click();
    cy.url().should('include', '/dashboard');
  }
}

export default LoginPage;
