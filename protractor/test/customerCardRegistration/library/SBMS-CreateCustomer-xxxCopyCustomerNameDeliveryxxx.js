    var customerHelper = require ('./customerCardRegistrationHelper');
	
	var comboXPathJuralType = '//div[@ng-model="customerDataForm.juralType"]';		
	var spanForItemJuralType1= 'locale.juralTypes[1]'; //физ.лицо	
    var spanForItemJuralType2= 'locale.juralTypes[2]'; //юр.лицо 
    var spanForItemJuralType3= 'locale.juralTypes[3]'; //инд.предпр.	
	var elCustomerName=by.model('customerDataForm.name');
	var elDeliveryName=by.model('customerDataForm.personalData.deliveryInfo.name');
	var elCustomerComment=by.model('customerDataForm.comment');
	
function customerNameEqualToDeliveryNameBeforeFilled(juralTypeId, isDeliveryNameEmpty){	
	    var elementCustomerName=element(elCustomerName);
	    var elementDeliveryName=element(elDeliveryName); 
		var spanForItemJuralType;		
		switch (juralTypeId){
			case 1:
			    spanForItemJuralType=spanForItemJuralType1;
			case 2:
			    spanForItemJuralType=spanForItemJuralType2;
			case 3:
			    spanForItemJuralType=spanForItemJuralType3;
			default:
			    spanForItemJuralType=spanForItemJuralType1;
		};		
		customerHelper.selectItemFromCombo(comboXPathJuralType,spanForItemJuralType);
		elementDeliveryName.clear();
		switch (isDeliveryNameEmpty){			
			case false:
			    elementDeliveryName.sendKeys('Доставкин Достав Доставович'); //заполнить имя доставки  
		};
        browser.sleep(200);
		elementCustomerName.clear();
	    elementCustomerName.sendKeys('Автоматов Автомат Автоматович'); //заполнить имя клиента
	    browser.sleep(200);
	    element(elCustomerComment).click();	//установить фокус на любое другое поле	
	    browser.sleep(200);
	    expect(elementDeliveryName.getAttribute("value")).toEqual(elementCustomerName.getAttribute("value")); //проверить, что имя в доставке = имени клиента
};	
exports.customerNameEqualToDeliveryNameBeforeFilled = customerNameEqualToDeliveryNameBeforeFilled;