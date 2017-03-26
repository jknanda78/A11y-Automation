import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from "react-addons-test-utils";
import Button from "../../src/js/components/button/";

var ButtonComponent,
    Instance,
    TestUtils;

describe("Button component", function() {
  beforeEach(function(){
    ButtonComponent = React.createClass({
      render: function() {
        return (
          <div>
            <Button type="submit" id="logIn" isPrimary={true} name="logIn" value="Log In" />
          </div>
        )
      }
    });

    Instance = ReactTestUtils.renderIntoDocument(<ButtonComponent />);

    var buttonComponent = ReactTestUtils.findRenderedDOMComponentWithTag(
      Instance,
      'input'
    );

    this.buttonComponent = ReactDOM.findDOMNode(buttonComponent);
  });

  afterEach(function(){
    ReactDOM.unmountComponentAtNode(this.buttonComponent);
  });

  it("button should have class primary", function() {
    expect(this.buttonComponent.getAttribute('class')).toBe('primary');
  });
});

import util from "util";
import AxeBuilder from "axe-webdriverjs";
import selenium from "selenium-webdriver";
let Key = selenium.Key;

describe("Button component accessibility test", function() {
  var driver;

  beforeEach(function(done) {
    driver = new selenium.Builder()
                .forBrowser('chrome')
                .build();

    driver.get('http://localhost:9010/index.html')
          .then(function() {
            done();
          });
  });

  afterEach(function(done) {
    driver.quit().then(function(){
      done();
    });
  });

  /*it('should fetch the buttons and analyze it', function (done) {
      AxeBuilder(driver)
        .exclude('document')
        .include('.primary')
        .analyze(function(results) {
          console.log('Accessibility Violations: ', results.violations.length);
          if (results.violations.length > 0) {
            console.log(util.inspect(results.violations, true, null));
          }
          expect (results.violations.length).toBe(0);
          done();
        });
    });*/

    it('should fetch the page and analyze it', function (done) {
      AxeBuilder(driver)
        .analyze(function(results) {
          console.log('Accessibility Violations: ', results.violations.length);
          if (results.violations.length > 0) {
            console.log(util.inspect(results.violations, true, null));
          }
          expect (results.violations.length).toBe(0);
          done();
        });
    });
});
