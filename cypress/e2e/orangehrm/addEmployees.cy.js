import DashboardPage from "../../support/pageObjects/DashboardPage";
import EmployeeListPage from "../../support/pageObjects/EmployeeListPage";

const dashboardPage = new DashboardPage();
const employeeListPage = new EmployeeListPage();

describe("Add Employees - OrangeHRM", () => {
  before(() => cy.fixture("employees").as("employees"));

  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.loginAsAdmin();
  });

  it("should add 6 employees successfully", function () {
    dashboardPage.goToPIM();
    this.employees.forEach((emp) => {
      employeeListPage.addEmployee(emp);
      cy.get(".oxd-toast").should("contain.text", "Successfully Saved");
    });
  });
});
