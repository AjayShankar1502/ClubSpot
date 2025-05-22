const employeeListPageSelectors = {
  addEmployeeButton: "a.oxd-topbar-body-nav-tab-item:contains('Add Employee')",
  firstNameInput: 'input[name="firstName"]',
  middleNameInput: 'input[name="middleName"]',
  lastNameInput: 'input[name="lastName"]',
  saveButton: '.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space',
  toastMessage: ".oxd-toast",
  successSavedText: "Successfully Saved",
  successDeletedText: "Successfully Deleted",
  searchInput: 'input[placeholder="Type for hints..."]',
  searchButton: ".oxd-form-actions > .oxd-button--secondary",
  firstEmployeeProfileButton: 'button.oxd-icon-button.oxd-table-cell-action-space',
  firstEmployeeDeleteButton: ".oxd-table-cell-actions > :nth-child(2)",
  confirmDeleteButton: ".oxd-button--label-danger",
};

export default employeeListPageSelectors;
