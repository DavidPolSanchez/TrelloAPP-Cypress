import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    coverage: false,
  },

  projectId: "7vknyb",

  retries: {
    openMode: 0,
    runMode: 10,
  },

  video: false,
  viewportHeight: 550,
  viewportWidth: 700,

  e2e: {
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // specPattern: 'cypress/e2e/**/*.js',implement node event listeners here
    },
  },
});
