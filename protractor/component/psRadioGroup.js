/**
 * @file       psRadioGroup.js
 * @package
 * @copyright  Copyright (c) CJSC PETER-SERVICE, 2015.
 * @author     Evgeniia.Bessarab on 19.10.2015.
 * @fileoverview Библиотека методов для компонента psRadioGroup
 *
 * @created    [19.10.2015] Evgeniia.Bessarab.
 */

var util = require('util');

// Подключаем библиотеку поиска по пользовательским локаторам
var Components = require(globalConf.path_to_component + 'psComponents');

// Конструктор класса psRadioGroup
var psRadioGroup = function() {
  Components.super_.apply(this, arguments);
};

util.inherits(psRadioGroup, Components);

// Пользовательские методы компонента
psRadioGroup.prototype.clickOnCaption = function(captionText) {
  var elementToClick=this.element(by.xpath("//label[contains(@class,'n-check_highlighted')]/span[contains(@class,'n-check__label')]/span[contains(@class,'ng-scope')][contains(text(),'"+captionText+"')]"));
  elementToClick.click();
};

psRadioGroup.prototype.getCaptionWithText = function(captionText) {
  return this.element(by.xpath("//label[contains(@class,'n-check_highlighted')]/span[contains(@class,'n-check__label')]/span[contains(@class,'ng-scope')][contains(text(),'"+captionText+"')]")).toPsRadioGroup();
};

psRadioGroup.prototype.getCaption = function(num) {
  return this.element(by.xpath("//label["+num+"][contains(@class,'n-check_highlighted')]/span[contains(@class,'n-check__label')]/span[contains(@class,'ng-scope')]"));
};

psRadioGroup.prototype.getRadioButtonWithGreenBall = function() {
  return this.element(by.xpath("//label[contains(@class,'n-check_highlighted_active')]/span[contains(@class,'n-check__label')]/span[contains(@class,'ng-scope')]"));
};

psRadioGroup.prototype.getTextTest = function() {
  return this.element(by.xpath("//label[contains(@class,'n-check_highlighted_active')]/span[contains(@class,'n-check__label')]/span[contains(@class,'ng-scope')]")).getAttribute('text');
};


module.exports  = psRadioGroup;