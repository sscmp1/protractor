
describe('createCustomer: copy customerName', function() {
	    //Алгоритм Копирование имени при регистрации https://confluence.billing.ru/pages/viewpage.action?pageId=19083471
		var config = browser.params;
		//var customerHelper = require (config.customerCardRegistrationLibraryPath+'/customerCardRegistrationHelper');
		var customerHelper = require ('./library/customerCardRegistrationHelper');
		var customerCopy = require ('./library/SBMS-CreateCustomer-xxxCopyCustomerNameDeliveryxxx');
	

	it('Установка Имя доставки=Имя клиента(физ.лицо), Имя доставки заполнено', function() {
		customerHelper.openBrowser();
        customerHelper.openCreateCustomerAF();		
        customerCopy.customerNameEqualToDeliveryNameBeforeFilled(config.juralTypeIdFiz,false);	
        customerHelper.closeBrowser(); 		
    }); 
	/*
	
	it('Установка Имя доставки=Имя клиента(юр.лицо), Имя доставки заполнено', function() {
		customerHelper.openBrowser();
        customerHelper.openCreateCustomerAF();		
        customerCopy.customerNameEqualToDeliveryNameBeforeFilled(config.juralTypeIdJur,false);	
        customerHelper.closeBrowser(); 		
    }); 
	it('Установка Имя доставки=Имя клиента(юр.лицо), Имя доставки заполнено', function() {
		customerHelper.openBrowser();
        customerHelper.openCreateCustomerAF();		
        customerCopy.customerNameEqualToDeliveryNameBeforeFilled(config.juralTypeIdInd,false);	
        customerHelper.closeBrowser(); 		
    }); 
	
	
	it('Установка Имя доставки=Имя клиента(физ.лицо), Имя доставки пусто', function() {
		customerHelper.openBrowser();
        customerHelper.openCreateCustomerAF();		
        customerCopy.customerNameEqualToDeliveryNameBeforeFilled(config.juralTypeIdFiz,true);	
        customerHelper.closeBrowser(); 		
    }); 
	
	it('Установка Имя доставки=Имя клиента(юр.лицо), Имя доставки пусто', function() {
		customerHelper.openBrowser();
        customerHelper.openCreateCustomerAF();		
        customerCopy.customerNameEqualToDeliveryNameBeforeFilled(config.juralTypeIdJur,true);	
        customerHelper.closeBrowser(); 		
    }); 
	it('Установка Имя доставки=Имя клиента(юр.лицо), Имя доставки пусто', function() {
		customerHelper.openBrowser();
        customerHelper.openCreateCustomerAF();		
        customerCopy.customerNameEqualToDeliveryNameBeforeFilled(config.juralTypeIdInd,true);	
        customerHelper.closeBrowser(); 		
    }); 
	*/
});
