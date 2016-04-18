    var comboXPathJuralType = '//div[@ng-model="customerDataForm.juralType"]';		
	var spanForItemJuralType1= 'locale.juralTypes[1]'; //физ.лицо	
    var spanForItemJuralType2= 'locale.juralTypes[2]'; //юр.лицо 
    var spanForItemJuralType3= 'locale.juralTypes[3]'; //инд.предпр.	
	var elCustomerName=by.model('customerDataForm.name');
	var elDeliveryName=by.model('customerDataForm.personalData.deliveryInfo.name');
	var elCustomerComment=by.model('customerDataForm.comment');
	
function customerNameEqualToDeliveryNameBeforeFilled(juralTypeId){	
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
		
		selectItemFromCombo(comboXPathJuralType,spanForItemJuralType);
        elementDeliveryName.clear();
		elementDeliveryName.sendKeys('Доставкин Достав Доставович'); //заполнить имя доставки  
        browser.sleep(200);
		elementCustomerName.clear();
	    elementCustomerName.sendKeys('Автоматов Автомат Автоматович'); //заполнить имя клиента
	    browser.sleep(200);
	    element(elCustomerComment).click();	//установить фокус на любое другое поле	
	    browser.sleep(200);
	    expect(elementDeliveryName.getAttribute("value")).toEqual(elementCustomerName.getAttribute("value")); //проверить, что имя в доставке = имени клиента
};	

function openBrowser(){
	    browser.sleep(2000);
	    browser.get(browser.baseUrl);
	    browser.sleep(200);	
		};	
		
function closeBrowser(){
	    browser.close();
	    browser.sleep(2000);	
		};	

function openCreateCustomerAF(){
          browser.executeScript("icms.go('SBMS_S_CLI','CreateCustomer', {},0);");
          browser.waitForAngular();
          waitModalBusy();
         };
function openAF(af){
          browser.executeScript(af);
          browser.waitForAngular();
          waitModalBusy();
         };
	

function untilElementIsPresented(elementDesired){
	  browser.wait(function() {
        var deferred = protractor.promise.defer();
        element(elementDesired).isPresent().then(function (isPresent) {
        deferred.fulfill(isPresent);
        });
    return deferred.promise;
    });	  
  };
 function untilElementIsPresentedNotPresented(elementDesired){	 
  browser.wait(function() {
        var deferred = protractor.promise.defer();
        element(elementDesired).isPresent().then(function (isPresent) {
            deferred.fulfill(isPresent);
        });
    return deferred.promise;
    });
	browser.wait(function() {
        var deferred = protractor.promise.defer();
        element(elementDesired).isPresent().then(function (isPresent) {
            deferred.fulfill(!isPresent);
        });
    return deferred.promise;
    });	
  };
     function untilElementIsDisplayed(elementDesired){
	  browser.wait(function() {
        var deferred = protractor.promise.defer();
        element(elementDesired).isDisplayed().then(function (isDisplayed) {
        deferred.fulfill(isDisplayed);
        });
    return deferred.promise;
    });	  
  } ;
   function untilElementIsNotPresented(elementDesired){
	  browser.wait(function() {
        var deferred = protractor.promise.defer();
        element(elementDesired).isPresent().then(function (isPresent) {
            deferred.fulfill(!isPresent);
        });
    return deferred.promise;
    });
  } ;
  
  	function selectItemFromCombo(comboXPath,spanForItem){
    //comboXPath='//div[@ng-model="customerDataForm.juralType.juralType"]'
    //spanForItem='locale.juralTypes[2]'
    //Функция реализует выбор строки из выпадающего списка в комбо-боксе
	/*
    //Выбрать юр тип клиента
	//Нажать кнопку на комбо
	var elementDropButton=element(by.xpath('//div[@ng-model="customerDataForm.juralType.juralType"]/div[@class="b-combobox__buttons ng-scope"]')); 
    elementDropButton.click(); 
	//Дождаться, пока появится выпадающий список и нажать на нужную строчку
	var elDropItem=by.xpath('//div[@class="ng-scope ng-isolate-scope list-drop"]//span[@ps-once-bind="locale.juralTypes[2]"]');		
	untilElementIsPresented(elDropItem);
	var elementDropItem=element(elDropItem);	
	elementDropItem.click();
	//Дождаться, пока выбранное значение установится в боксе
	var elDropValue=by.xpath('//div[@ng-model="customerDataForm.juralType.juralType"]//span[@ps-once-bind="locale.juralTypes[2]"]'); 
	untilElementIsPresented(elDropValue);	
	*/
	//-----------------
	
    //Выбрать юр тип клиента
	//Нажать кнопку на комбо	
	var s = comboXPath+'/div[@class="b-combobox__buttons ng-scope"]';
	var elementDropButton=element(by.xpath(s)); 
    elementDropButton.click(); 
	//Дождаться, пока появится выпадающий список и нажать на нужную строчку
	s ='//div[@class="ng-scope ng-isolate-scope list-drop"]//span[@ps-once-bind="'+spanForItem+'"]';
	var elDropItem=by.xpath(s);
	untilElementIsPresented(elDropItem);
	var elementDropItem=element(elDropItem);	
	elementDropItem.click();
	//Дождаться, пока выбранное значение установится в боксе
    s=comboXPath+'//span[@ps-once-bind="'+spanForItem+'"]';
    var elDropValue=by.xpath(s);
	untilElementIsPresented(elDropValue);
	//-------------------	
    };
	
	function waitModalBusy(){		
	    var elB=by.xpath('//*[@id="shell_modal_busy"]'); //special Busy element
	    untilElementIsPresentedNotPresented(elB);
	};	
		
 module.exports.untilElementIsPresented=untilElementIsPresented;
 module.exports.untilElementIsPresentedNotPresented=untilElementIsPresentedNotPresented;
 module.exports.untilElementIsDisplayed=untilElementIsDisplayed;
 module.exports.untilElementIsNotPresented=untilElementIsNotPresented;
 module.exports.selectItemFromCombo=selectItemFromCombo;
 module.exports.waitModalBusy=waitModalBusy;
 module.exports.customerNameEqualToDeliveryNameBeforeFilled = customerNameEqualToDeliveryNameBeforeFilled;
 module.exports.openCreateCustomerAF = openCreateCustomerAF;
 module.exports.openAF = openAF;
 module.exports.openBrowser = openBrowser;
 module.exports.closeBrowser = closeBrowser;
 
module.exports.comboXPathJuralType = comboXPathJuralType;		
module.exports.spanForItemJuralType1 = spanForItemJuralType1;  
module.exports.spanForItemJuralType2 = spanForItemJuralType2;
module.exports.spanForItemJuralType3 = spanForItemJuralType3;
module.exports.elCustomerName = elCustomerName;
module.exports.elDeliveryName = elDeliveryName;
module.exports.elCustomerComment = elCustomerComment;



