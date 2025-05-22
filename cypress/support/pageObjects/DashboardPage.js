import selectors from '../selectors/dashboardPageSelectors';

class DashboardPage {
  goToPIM() {
    cy.get(selectors.pimLink).click();
  }
}

export default DashboardPage;
