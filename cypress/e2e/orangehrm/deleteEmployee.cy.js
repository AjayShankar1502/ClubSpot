import DashboardPage from "../../support/pageObjects/DashboardPage";
import EmployeeListPage from "../../support/pageObjects/EmployeeListPage";

const dashboardPage = new DashboardPage();
const employeeListPage = new EmployeeListPage();

describe("Delete Employee - OrangeHRM", () => {
  before(() => {
    cy.fixture("emily").as("emily");
  });

  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.loginAsAdmin();
  });

  it("should delete employee Emily and confirm removal", function () {
    dashboardPage.goToPIM();
    employeeListPage.searchEmployee(this.emily.shortName);
    employeeListPage.deleteFirstEmployee();
    cy.get(".oxd-toast").should("contain.text", "Successfully Deleted");
    employeeListPage.searchEmployee(this.emily.shortName);
    cy.contains("No Records Found").should("exist");
  });
});
