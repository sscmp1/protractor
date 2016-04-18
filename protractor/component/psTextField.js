/**
 * @file       psTextField.js
 * @package
 * @copyright  Copyright (c) CJSC PETER-SERVICE, 2015.
 * @author     Lilia Sapurina Lilia.Sapurina@billing.ru.
 * @fileoverview Библиотека методов для компонента psTextField
 *
 * @created    [04.09.2015] Lilia Sapurina.
 */

var util = require('util');

// Подключаем библиотеку поиска по пользовательским локаторам
var PsComponents = require(globalConf.path_to_component + 'psComponents');

// Конструктор класса PsTextField
var PsTextField = function() {
  PsComponents.super_.apply(this, arguments);
};

util.inherits(PsTextField, PsComponents);

// Пользовательские методы компонента
PsTextField.prototype.getDefaultField = function(num) {
  return this.element(by.xpath('.//div//tbody/tr[' + num + ']//input')).toPsTextField();
};

PsTextField.prototype.getTextField = function(num) {
  return this.element(by.id('id'+ num +'')).toPsTextField();
};

module.exports  = PsTextField;

