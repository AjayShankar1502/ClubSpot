const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    adminUsername: "Admin",
    adminPassword: "admin123"
  },

  reporter: "cypress-mochawesome-reporter",

  retries: {
    runMode: 1,
    openMode: 0,
  },

  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com", 

    fixturesFolder: "cypress/fixtures",
    screenshotsFolder: "cypress/screenshots",
    supportFile: "cypress/support/e2e.js",
    video: true,
    screenshotOnRunFailure: true,

    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
  },
});
