/**
 * @file       psGrid.js
 * @package
 * @copyright  Copyright (c) CJSC PETER-SERVICE, 2015.
 * @author     Lilia Sapurina Lilia.Sapurina@billing.ru.
 * @fileoverview Библиотека методов для компонента psGrid
 *
 * @created    [21.08.2015] Lilia Sapurina.
 */

var util = require('util');

// Подключаем библиотеку поиска по пользовательским локаторам
var PsComponents = require(globalConf.path_to_component + 'psComponents');

// Конструктор класса PsGrid
var PsGrid = function() {
  PsComponents.super_.apply(this, arguments);
};

util.inherits(PsGrid, PsComponents);

// Пользовательские методы компонента
PsGrid.prototype.getQuickFilter = function(column_num) {
  return this.element(by.xpath('.//tr[2]/td[' + column_num + ']//input')).toPsGrid();
};

PsGrid.prototype.getColumn = function(column_num) {
  return this.all(by.xpath('//td[@id="SSW_1_0"]/..//tbody/tr/td['+ column_num +']/div[@class="n-grid__text"]'));
};

PsGrid.prototype.getColumnHead = function(column_num) {
  return this.element(by.xpath('.//table/thead/tr[1]/th['+ column_num +']')).toPsGrid();
};

PsGrid.prototype.getColumnBody = function(column_num) {
  return this.all(by.xpath('.//table/tbody/tr/td['+ column_num +']'));
};

PsGrid.prototype.getArrow = function() {
  return this.element(by.css('span[class="n-grid__sort-icon"]')).toPsGrid();
};

module.exports  = PsGrid;
