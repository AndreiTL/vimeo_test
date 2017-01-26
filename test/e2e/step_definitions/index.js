var state = require("wk-e2e-po-management").state;
var expect = require("wk-assert").expect;
var protractor = require("protractor");
var EC = protractor.ExpectedConditions;


var mySteps = function() {
  this.setDefaultTimeout(60 * 1000);

  this.Given(/^I clean allCookies$/, function() {
    return browser.driver.manage().deleteAllCookies();
  });

  this.Given(/^I restart browser$/, function(){
    return browser.restart();
  });

  this.Given(/^I disable synchronization$/, function() {
    browser.ignoreSynchronization = true;
  });

  this.Then(/^I enable synchronization$/, function() {
    browser.ignoreSynchronization = false;
  });

  // this.Then(/^I should be on "([^"]*)" page$/, function(pageName) {
  //   return state.setPage(pageName).then(function() {
  //     return expect(browser.getCurrentUrl()).to.eventually.contain(state.page.url);
  //   });
  // });

  this.Then(/^"([^"]*)" should be hidden on page "([^"]*)"$/, function(element, pageName) {
    return state.setPage(pageName).then(function() {
      return (state.page.find(element).get()).isDisplayed();
    }).then(function(result) {
      return expect(result).to.be.false;
    });
  });

  this.Then(/^Element "([^"]*)" should have opacity "([^"]*)"$/, function(element, opacity) {
    return ((state.page.find(element).get()).getCssValue('opacity')).then(
      function(result) {
        return expect(result === opacity).to.be.true;
      }
    )
  });

  this.Then(/^Element "([^"]*)" should have opacity greater then "([^"]*)"$/, function(element, opacity) {
    return ((state.page.find(element).get()).getCssValue('opacity')).then(
      function(result) {
        return expect(result > opacity).to.be.true;
      }
    )
  });

  this.Then(/^I should not find "([^"]*)" on page "([^"]*)"$/, function(element, pageName) {
    return state.setPage(pageName).then(function() {
      return (state.page.find(element).get()).isPresent();
    }).then(function(result) {
      return expect(result).to.be.false;
    });
  });

  this.Then(/^I close browser$/, function(){
    return browser.close();
  });

  this.When(/^I am staying on "([^"]*)" page$/, function(pageName) {
    return state.setPage(pageName).then(function() {
      return expect(browser.getCurrentUrl()).to.eventually.contain(state.page.getUrl());
    });
  });

  this.When(/^I wait visibility of "([^"]*)" element on page "([^"]*)"$/, function(element, pageName) {
    return state.setPage(pageName).then(function() {
      return browser.wait(EC.visibilityOf(state.page.find(element).get()));
    });
  });

  this.When(/^I scroll down to "([^"]*)" px$/, function(pixels) {
    return (browser.executeScript("window.scrollBy(0,"+pixels+")", ""));
  });

};
module.exports = mySteps;