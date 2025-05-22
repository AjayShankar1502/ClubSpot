const personalDetailsPageSelectors = {
  licenseInput: ":nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input",

  licenseExpiryMonthPicker: ".oxd-date-wrapper .oxd-date-input .oxd-icon:first",
  monthDropdown: ".oxd-calendar-selector-month-selected",
  monthDropdownOption: (index) => `.oxd-calendar-dropdown > :nth-child(${index})`,
  datePickerDay: (day) => `:nth-child(${day}) > .oxd-calendar-date`,

  nationalityDropdownWrapper: ".oxd-select-wrapper",
  nationalityDropdownOption: (text) => `.oxd-select-dropdown:contains(${text})`,

  maritalStatusDropdownWrapper: ".oxd-select-wrapper",
  maritalStatusDropdownOption: (text) => `.oxd-select-dropdown:contains(${text})`,

  dobInputSecond: ".oxd-date-wrapper .oxd-date-input > .oxd-input",
  yearDropdownIcon: ".oxd-calendar-selector-year-selected .oxd-icon",
  monthDropdownIcon: ".oxd-calendar-selector-month-selected .oxd-icon",
  saveButton: ".oxd-button--secondary",  

  genderRadioInput: (gender) => `label:contains(${gender}) input[type="radio"]`,
  saveButton: ":nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button:contains(' Save ')",
};

export default personalDetailsPageSelectors;

