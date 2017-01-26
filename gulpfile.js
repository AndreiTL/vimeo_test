const gulp = require('gulp-help')(require('gulp'));
const wkDefaults = require('gulp-wk-default')(gulp);
const fs = require('fs');
const yargs = require('yargs');
const es = require('event-stream');
const bump = require('gulp-bump');
const rename = require('gulp-rename');
const merge = require('gulp-merge-json');


// for e2e-tests
const protractor = require('gulp-protractor').protractor;
const wkReporter = require("wk-e2e-reporter");

wkDefaults.loadProfiles('e2e');

// loading custom configuration
wkDefaults.loadConfig(require('./gulp.config'));

gulp.task('e2e', function() {
    gulp.src([])
      .pipe(protractor({
          configFile: "test/e2e/config/local/protractor.config.js",
          args: []
      }))
      .on('error', function(e) { throw e })
});

gulp.task("generate-reports", function() {
    wkReporter.run({
        "cucumberReportPath": "./cucumberReport.json",
        "formats": ["html", "xml", "csv"],
        "reportDirectory": "./reports",
        "tagFields": ["jira", "jama"]
    });
});
