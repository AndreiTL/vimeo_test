exports.config = {
  allScriptsTimeout: 60000,
  getPageTimeout: 60000,
  seleniumAddress: "http://localhost:4444/wd/hub",
  baseUrl: "https://vimeo.com",
  onPrepare: function() {
    var width = 1280;
    var height = 768;
    return browser.driver.manage().window().setSize(width, height);
  },
  specs: [
    "../../features/**/*.feature"
  ],
  rootElement: 'app',
  cucumberOpts: {
    require: [
      require.resolve("wk-e2e-steps"), // predefined step definitions
      "../../pop/dist/index.js", // page objects initialization
      "../../step_definitions/**/*.js" //our step definitions
    ],
    format: ["pretty", "json:cucumberReport.json"]
  },
  capabilities: {
    "browserName": "chrome",
    cucumberOpts: {
      format: ["pretty", "json:cucumberReport.json"]
    }
  },
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework")
};