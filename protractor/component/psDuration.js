/**
 * @file       PsDuration.js
 * @package
 * @copyright  Copyright (c) CJSC PETER-SERVICE, 2015.
 * @author     Evgeniia.Bessarab on 19.10.2015.
 * @fileoverview Библиотека методов для компонента PsDuration
 *
 * @created    [19.10.2015] Evgeniia.Bessarab.
 */

var util = require('util');

// Подключаем библиотеку поиска по пользовательским локаторам
var Components = require('../component/psComponents');

// Конструктор класса PsDuration
var PsDuration= function() {
  Components.super_.apply(this, arguments);
};

util.inherits(PsDuration, Components);

// Пользовательские методы компонента
PsDuration.prototype.getUpButton = function() {
  return this.element(by.xpath("//div[contains(@class,'b-combobox__buttons')]/span/a[contains(@ps-link-element,'elements.timeUp')]"));
};

PsDuration.prototype.getDownButton = function() {
  return this.element(by.xpath("//div[contains(@class,'b-combobox__buttons')]/span/a[contains(@ps-link-element,'elements.timeDown')]"));
};

PsDuration.prototype.getMask = function() {
  return this.element(by.xpath("input")).getAttribute("ps-input-mask-lite");
};

PsDuration.prototype.getTextValue = function() {
  return this.element(by.xpath("input")).getAttribute("value");
};
PsDuration.prototype.getState = function() {
  return this.element(by.xpath("//div[contains(@class,'ps-duration')]")).getAttribute("disabled").then(function(disableValue)  {
    if(disableValue) {
      return this.element(by.xpath("//div[contains(@class,'ps-duration')]/input")).getAttribute("readonly").then(function(readonlyValue)  {
        if(readonlyValue) {
          return 'disable';
        } else {
          return 'disable,but not readonly';
        }
      });
    } else {
      return 'enable';
    }
  });

};

module.exports  = PsDuration;
