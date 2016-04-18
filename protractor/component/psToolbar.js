/**
 * @file       psToolbar.js
 * @package
 * @copyright  Copyright (c) CJSC PETER-SERVICE, 2015.
 * @author     Lilia Sapurina Lilia.Sapurina@billing.ru.
 * @fileoverview Библиотека методов для компонента psToolbar
 *
 * @created    [25.08.2015] Lilia Sapurina.
 */

var util = require('util');

// Подключаем библиотеку поиска по пользовательским локаторам
var PsComponents = require(globalConf.path_to_component + 'psComponents');

// Конструктор класса PsGrid
var PsToolbar = function() {
  PsComponents.super_.apply(this, arguments);
};

util.inherits(PsToolbar, PsComponents);

// Пользовательские методы компонента
PsToolbar.prototype.getRefreshButton = function() {
  return this.element(by.css('a[icon="refresh"]')).toPsToolbar();
};

PsToolbar.prototype.getClearButton = function() {
  return this.element(by.css('a[icon="trash"]')).toPsToolbar();
};

PsToolbar.prototype.getSearchButton = function() {
  return this.element(by.css('a[icon="search"]')).toPsToolbar();
};

module.exports  = PsToolbar;