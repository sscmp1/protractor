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
  it('Открыть карточку клиента вызовом АФ CliCardTabs', function() {
	 customerHelper.openBrowser();
     customerHelper.openAF("icms.go('SBMS_S_CLI', 'CliCardTabs', {CLNT_ID:2736},0);");
	 element(by.css('[ng-click="Save()"]'));
	 var clepsidra=by.xpath('//*[@id="shell_modal_busy"]'); //special Busy element
	 customerHelper.untilElementIsPresentedNotPresented(clepsidra);
	 //Текущий статус
     //var elCustomerStatus=by.xpath('//div[@id="status"]/div[contains(text(),"Временно закрыт")]');
     //Нажать кнопку на комбо

     //var s = '//div[@id="status"]/div[@class="b-combobox__buttons ng-scope"]/div[@class="b-button_arrow b-button ng-scope"]';
    // var s = '//div[@id="status"]';
     var elementDropButton=element(by.xpath('//div[@id="status"]'));
     elementDropButton.click();
     var elementDropValue=element(by.xpath('//div[@id="status"]//div[@id="list-drop-option__text ng-scope"]/span[contains(text(),"оплаты")]'));
     customerHelper.untilElementIsPresented(elementDropValue);
     //customerHelper.selectItemFromCombo('//div[@id="status"]',spanForItem)

     //customerHelper.selectItemFromComboDictionary('//div[@id="status"]','ll');
     customerHelper.closeBrowser();
  });
  
 
});

