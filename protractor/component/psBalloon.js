/**
 * @file       psBalloon.js
 * @package
 * @copyright  Copyright (c) CJSC PETER-SERVICE, 2015.
 * @author     Lilia Sapurina Lilia.Sapurina@billing.ru.
 * @fileoverview
 *
 * @created    [18.11.2015] Lilia Sapurina.
 */

var util = require('util');

// Подключаем библиотеку поиска по пользовательским локаторам
var PsComponents = require(globalConf.path_to_component + 'psComponents');

// Конструктор класса PsTabs
var PsBalloon = function() {
  PsComponents.super_.apply(this, arguments);
};

util.inherits(PsBalloon, PsComponents);

PsBalloon.prototype.getBalloonText = function() {
  return this.element(by.xpath('//span[contains(@class,"n-balloon__text")]')).getText();
};

PsBalloon.prototype.getBalloonCross = function() {
  return this.element(by.xpath('//span[contains(@class,"n-balloon__close")]')).getText();
};

module.exports  = PsBalloon;