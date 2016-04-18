/**
 * @file       psDrop.js
 * @package
 * @copyright  Copyright (c) CJSC PETER-SERVICE, 2015.
 * @author     Lilia Sapurina Lilia.Sapurina@billing.ru.
 * @fileoverview Библиотека методов для компонента psList
 *
 * @created    [06.11.2015] Lilia Sapurina.
 */

var util = require('util');

// Подключаем библиотеку поиска по пользовательским локаторам
var PsComponents = require(globalConf.path_to_component + 'psComponents');

// Конструктор класса PsTabs
var PsDrop = function() {
  PsComponents.super_.apply(this, arguments);
};

util.inherits(PsDrop, PsComponents);

// Извлечение значений из выпадающего списка
PsDrop.prototype.getAllDropDownValues = function() {
  return this.all(by.xpath('./div//span[1]'));
};

PsDrop.prototype.getDropDownValueByMouse = function(num) {
  return this.element(by.xpath('.//div['+num+']'));
};

PsDrop.prototype.getCategoryValue = function(num) {
  return this.element(by.xpath('./div[1]/div/div['+num+']/span/span/span[1]'));
};

module.exports  = PsDrop;
