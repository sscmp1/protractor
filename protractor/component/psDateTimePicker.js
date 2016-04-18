/**
 * @file       PsDateTimePicker.js
 * @package
 * @copyright  Copyright (c) CJSC PETER-SERVICE, 2015.
 * @author     Lilia Sapurina Lilia.Sapurina@billing.ru.
 * @fileoverview Библиотека методов для компонента psDateTimePicker
 *
 * @created    [13.08.2015] Lilia Sapurina.
 */

var util = require('util');

// Подключаем библиотеку поиска по пользовательским локаторам
var PsComponents = require('../component/psComponents');

// Конструктор класса PsDateTimePicker
var PsDateTimePicker = function() {
  PsComponents.super_.apply(this, arguments);
};

util.inherits(PsDateTimePicker, PsComponents);

// Пользовательские методы компонента
PsDateTimePicker.prototype.getCalendar = function() {
  return psDateTimePicker(by.xpath('//body[@class="ng-isolate-scope ps-lazy-load"]/div[2]/div'));
};

PsDateTimePicker.prototype.getCross = function() {
  return psDateTimePicker(by.xpath('//body[@class="ng-isolate-scope ps-lazy-load"]/div[2]/div/div[3]/span'));
};

PsDateTimePicker.prototype.getScroller = function() {
  return psDateTimePicker(by.xpath('//div[2]/div/div[3]/div[1]/div[2]/div'));
};

PsDateTimePicker.prototype.getTimeUnderScroll = function() {
  return psDateTimePicker(by.xpath('//div[2]/div/div[3]/div[2]'));
};

PsDateTimePicker.prototype.getCalendarDates = function() {
  return element.all(by.repeater('el in row track by $index'));
};

PsDateTimePicker.prototype.getField = function() {
  return psDateTimePicker(by.xpath('//div[1]/table/tbody/tr[2]/td[1]/div/input'));
};

PsDateTimePicker.prototype.getCalendarButton = function() {
  return psDateTimePicker(by.xpath('//div[1]/table/tbody/tr[2]/td[1]/div/div/a[1]/ps-icon'));
};

PsDateTimePicker.prototype.getMonthYear = function() {
  return psDateTimePicker(by.xpath('//div[2]/div/div[1]/div/a'));
};

PsDateTimePicker.prototype.getClearButton = function() {
  return this.element(by.xpath('./div/../a[1]'));
};

PsDateTimePicker.prototype.getSelectedValue = function() {
  return this.element(by.xpath("//td[contains(@class,'selected')]"));
};

module.exports  = PsDateTimePicker;
