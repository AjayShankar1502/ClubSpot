import selectors from '../selectors/personalDetailsPageSelectors';

class PersonalDetailsPage {
  
  monthName(monthIndex) {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return months[monthIndex];
  }

  fillDetails({
    license,
    licenseExpiryMonth,
    licenseExpiryDay,
    nationality,
    maritalStatus,
    dobYear,
    dobMonth,  
    dobDay,
    gender
  }) {
    // Fill License Number
    cy.get(selectors.licenseInput).clear().type(license);

    // Set License Expiry Date
    cy.get(selectors.licenseExpiryMonthPicker).click();
    cy.get(selectors.monthDropdown).click();
    cy.get(selectors.monthDropdownOption(licenseExpiryMonth)).click();
    cy.get(selectors.datePickerDay(licenseExpiryDay)).click();

    // Select Nationality
    cy.get(selectors.nationalityDropdownWrapper).eq(0).click();
    cy.get(selectors.nationalityDropdownOption(nationality)).click();

    // Select Marital Status
    cy.get(selectors.maritalStatusDropdownWrapper).eq(1).click();
    cy.get(selectors.maritalStatusDropdownOption(maritalStatus)).click();

    // Set Date of Birth
    cy.get(selectors.dobInputSecond).eq(1).click(); 
    cy.get(selectors.yearDropdownIcon).click();    
    cy.get('.oxd-calendar-dropdown').contains(dobYear.toString()).click(); 

    cy.get(selectors.monthDropdownIcon).click();   
    cy.get('.oxd-calendar-dropdown').contains(this.monthName(dobMonth - 1)).click(); 

    // Select day by filtering by text, more robust than nth-child
    cy.get('.oxd-calendar-date').contains(new RegExp(`^${dobDay}$`)).click();

    // Select Gender
    cy.get(selectors.genderRadioInput(gender)).check({ force: true });

    // Click Save
    cy.get(selectors.saveButton).click();
  }

  editDetails(details) {
    cy.wait(2000);
    cy.get(selectors.licenseInput).clear().type(details.license);
    this.fillDetails(details);
  }
}

export default PersonalDetailsPage;
