/**
 * @file       psTabs.js
 * @package
 * @copyright  Copyright (c) CJSC PETER-SERVICE, 2015.
 * @author     Lilia Sapurina Lilia.Sapurina@billing.ru.
 * @fileoverview Библиотека методов для компонента psTabs
 *
 * @created    [16.09.2015] Lilia Sapurina.
 */

var util = require('util');

// Подключаем библиотеку поиска по пользовательским локаторам
var PsComponents = require(globalConf.path_to_component + 'psComponents');

// Конструктор класса PsTabs
var PsTabs = function() {
  PsComponents.super_.apply(this, arguments);
};

util.inherits(PsTabs, PsComponents);

PsTabs.prototype.getTabByName = function(name) {
  return this.element(by.xpath(".//li/a[@ng-bind='tab.caption'][contains(text(),'"+name+"')]"));
};

module.exports  = PsTabs;