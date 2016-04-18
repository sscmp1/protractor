/**
 * @file       psList.js
 * @package
 * @copyright  Copyright (c) CJSC PETER-SERVICE, 2015.
 * @author     Lilia Sapurina Lilia.Sapurina@billing.ru.
 * @fileoverview Библиотека методов для компонента psList
 *
 * @created    [25.09.2015] Lilia Sapurina.
 */

var util = require('util');

// Подключаем библиотеку поиска по пользовательским локаторам
var PsComponents = require(globalConf.path_to_component + 'psComponents');

// Конструктор класса PsTabs
var PsList = function() {
  PsComponents.super_.apply(this, arguments);
};

util.inherits(PsList, PsComponents);

// Названия полей фильтрации
PsList.prototype.getTableLabeles = function() {
  return this.all(by.xpath('.//table/tbody//td[@class="n-props-table__label"]'));
};

// Поля фильтрации
PsList.prototype.getTableValues = function() {
  return this.all(by.xpath('.//table/tbody/tr[contains(@class,"n-props-table__tr")]/td[@class="n-props-table__value"]'));
};

// Заголовок header-а таблицы
PsList.prototype.getTopBarLabel = function() {
  return this.element(by.xpath('.//div[contains(@class,"n-popup-top-bar")]//label[@class="n-label ng-binding"]')).toPsList();
};

// Если это строка для ввода
PsList.prototype.getInput = function() {
  return this.element(by.xpath('.//input')).toPsList();
};

// Кнопка на выпадающем списке
PsList.prototype.getDropButton = function() {
  return this.element(by.xpath('.//div[contains(@class,"b-combobox__buttons")]')).toPsList();
};

// Извлечение значения из строки выпадающего списка
PsList.prototype.getValue = function() {
  return this.element(by.xpath('.//span[contains(@class,"b-multiselect-item__title")]')).toPsList();
};

module.exports  = PsList;