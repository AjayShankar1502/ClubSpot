export function selectDropdownOption(wrapper, optionText) {
  cy.get(wrapper).click();
  cy.get(".oxd-select-dropdown").contains(optionText).click();
}
export function monthName(index) {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return months[index];
}
