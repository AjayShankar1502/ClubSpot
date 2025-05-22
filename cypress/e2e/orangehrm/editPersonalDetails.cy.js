import DashboardPage from "../../support/pageObjects/DashboardPage";
import EmployeeListPage from "../../support/pageObjects/EmployeeListPage";
import EmployeeProfilePage from "../../support/pageObjects/EmployeeProfilePage";
import PersonalDetailsPage from "../../support/pageObjects/PersonalDetailsPage";

const dashboardPage = new DashboardPage();
const employeeListPage = new EmployeeListPage();
const employeeProfilePage = new EmployeeProfilePage();
const personalDetailsPage = new PersonalDetailsPage();

describe("Edit Personal Details - OrangeHRM", () => {
  before(() => {
    cy.fixture("emily").as("emily");
  });

  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.loginAsAdmin();
  });

  it("should edit personal details of Emily and verify changes", function () {
    dashboardPage.goToPIM();
    employeeListPage.searchEmployee(this.emily.fullName);
    employeeListPage.openFirstEmployeeProfile();
    employeeProfilePage.goToPersonalDetails();

    personalDetailsPage.fillDetails(this.emily.initialDetails);
    cy.get(".oxd-toast").should("contain.text", "Successfully Updated");

    personalDetailsPage.editDetails(this.emily.updatedDetails);
    cy.get(".oxd-toast").should("contain.text", "Successfully Updated");
  });
});
