const path = require("path");

module.exports = {
  default: {
    require: ["stepdefinitions/**/*.js"], // adjust if needed
    format: [path.resolve(__dirname, "reporter.js")],
    parallel: 1,
    publishQuiet: true,
    exit: true
  }
};
