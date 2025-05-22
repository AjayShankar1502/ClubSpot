import DashboardPage from "../../support/pageObjects/DashboardPage";
import EmployeeListPage from "../../support/pageObjects/EmployeeListPage";
import EmployeeProfilePage from "../../support/pageObjects/EmployeeProfilePage";

const dashboardPage = new DashboardPage();
const employeeListPage = new EmployeeListPage();
const employeeProfilePage = new EmployeeProfilePage();

describe("Upload Attachment - OrangeHRM", () => {
  before(() => {
    cy.fixture("emily").as("emily");
  });

  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.loginAsAdmin();
  });

  it("should upload a file with a comment and verify it", function () {
    dashboardPage.goToPIM();
    employeeListPage.searchEmployee(this.emily.fullName);
    employeeListPage.openFirstEmployeeProfile();

    employeeProfilePage.uploadAttachment(
      "cypress/fixtures/File/Test_Certificate.txt",
      "Uploaded for test purpose"
    );
    cy.get(".oxd-toast").should("contain.text", "Successfully Saved");
    cy.contains("Uploaded for test purpose").should("exist");
  });
});
