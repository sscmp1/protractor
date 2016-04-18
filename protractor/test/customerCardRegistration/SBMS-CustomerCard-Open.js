/**
 * @file       login_test.js
 * @package
 * @copyright  Copyright (c) CJSC PETER-SERVICE, 2015.
 * @author     Marina Peunkova Marina.Peunkova@billing.ru.
 * @fileoverview Вход в окружение SBMS
 *
 * @created    [11.11.2015] Marina Peunkova.
 */

describe('angularjs homepage', function() {
  var customerHelper = require ('./library/customerCardRegistrationHelper');
  it('Ожидание', function() {
    //browser.get(browser.baseUrl);
	//browser.sleep(200);
	customerHelper.openBrowser();
	browser.executeScript("icms.go('SBMS_S_CLI', 'CliCardTabs', {CLNT_ID:74},0);");
	browser.sleep(200);
	browser.waitForAngular();
	element(by.css('[ng-click="Save()"]'));
	element(by.id('gender'),100);	
	var clepsidra=by.xpath('//*[@id="shell_modal_busy"]'); //special Busy element
	console.log('waiting for Busy');
	customerHelper.untilElementIsPresentedNotPresented(clepsidra);
/*
	browser.wait(function() {
        var deferred = protractor.promise.defer();
        element(clepsidra).isPresent().then(function (isPresent) {
            deferred.fulfill(isPresent);
        });
    return deferred.promise;
    });
	
	console.log('waiting for Busy disappeared');
	browser.wait(function() {
        var deferred = protractor.promise.defer();
        element(clepsidra).isPresent().then(function (isPresent) {
            deferred.fulfill(!isPresent);
        });
    return deferred.promise;
    });
    */
    //browser.close();
    customerHelper.closeBrowser();
    console.log('window is closed');	

  });
  
 
});

