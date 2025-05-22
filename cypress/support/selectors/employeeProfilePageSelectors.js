const employeeProfilePageSelectors = {
  profileImage: ".employee-image",
  fileInput: 'input[type="file"]',
  saveButton: "button[type='submit']:contains(' Save ')",

  personalDetailsLink: 'a[href*="/pim/viewPersonalDetails/"]:contains("Personal Details")',

  attachmentSubmitButton: "button[type='submit']",
  addAttachmentButton: '.oxd-button.oxd-button--medium.oxd-button--text',
  commentTextarea: "textarea",
  saveAttachmentButton: '.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space',
};

export default employeeProfilePageSelectors;
