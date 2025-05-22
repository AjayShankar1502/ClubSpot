import selectors from "../selectors/employeeProfilePageSelectors";

class EmployeeProfilePage {
  uploadProfileImage(imagePath) {
    cy.get(selectors.profileImage).click();
    cy.get(selectors.fileInput).selectFile(imagePath, { force: true });
    cy.get(selectors.saveButton).click();
  }

  goToPersonalDetails() {
    cy.get(selectors.personalDetailsLink).click();
  }

  uploadAttachment(filePath, comment) {
    cy.get(selectors.attachmentSubmitButton).click();
    cy.get(selectors.addAttachmentButton).click();
    cy.get(selectors.fileInput).selectFile(filePath, { force: true });
    cy.get(selectors.commentTextarea).type(comment);
    cy.get(selectors.saveAttachmentButton).last().click();
  }
}

export default EmployeeProfilePage;
