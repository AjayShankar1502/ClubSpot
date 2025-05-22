import selectors from "../selectors/employeeListPageSelectors";

class EmployeeListPage {
  addEmployee(emp) {
    cy.get(selectors.addEmployeeButton).click();
    cy.get(selectors.firstNameInput).type(emp.firstName);
    if (emp.middleName) {
      cy.get(selectors.middleNameInput).type(emp.middleName);
    }
    cy.get(selectors.lastNameInput).type(emp.lastName);
    cy.get(selectors.saveButton).click();
    cy.get(selectors.toastMessage, { timeout: 10000 }).should(
      "contain.text",
      selectors.successSavedText
    );
  }

  searchEmployee(name) {
    cy.get(selectors.searchInput).first().type(name);
    cy.get(selectors.searchButton).click();
  }

  openFirstEmployeeProfile() {
    cy.get(selectors.firstEmployeeProfileButton).first().click();
    cy.get(selectors.toastMessage).should("not.exist");
  }

  deleteFirstEmployee() {
    cy.get(selectors.firstEmployeeDeleteButton)
      .first()
      .scrollIntoView()
      .click({ force: true });
    cy.get(selectors.confirmDeleteButton)
      .should("be.visible")
      .click({ force: true });
    cy.get(selectors.toastMessage)
      .should("be.visible")
      .and("contain.text", selectors.successDeletedText);
  }
}

export default EmployeeListPage;
