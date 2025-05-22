import DashboardPage from "../../support/pageObjects/DashboardPage";
import EmployeeListPage from "../../support/pageObjects/EmployeeListPage";
import EmployeeProfilePage from "../../support/pageObjects/EmployeeProfilePage";

const dashboardPage = new DashboardPage();
const employeeListPage = new EmployeeListPage();
const employeeProfilePage = new EmployeeProfilePage();

describe("Upload Profile Image - OrangeHRM", () => {
  before(() => {
    cy.fixture("emily").as("emily");
  });

  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.loginAsAdmin();
  });

  it("should upload profile image for Emily", function () {
    dashboardPage.goToPIM();
    employeeListPage.searchEmployee(this.emily.fullName);
    employeeListPage.openFirstEmployeeProfile();
    employeeProfilePage.uploadProfileImage(
      "cypress/fixtures/images/Emily_Resized_200x200.png"
    );
    cy.get(".oxd-toast").should("contain.text", "Successfully Updated");
  });
});
