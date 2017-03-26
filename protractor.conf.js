exports.config = {

  allScriptsTimeout: 180000,

  seleniumAddress: 'http://localhost:4444/wd/hub',

  capabilities: {
    browserName: 'chrome'
  },

  framework: 'jasmine2',

  specs: ['spec/**/*.js'],

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    isVerbose : true,
    includeStackTrace : true
  },

  onPrepare: function () {
    require("./helpers/setup");
    require("babel-core/register");
  }
};
