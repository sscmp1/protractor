/**
 * @file       CustomMatchers.js
 * @package
 * @copyright  Copyright (c) CJSC PETER-SERVICE, 2015.
 * @author     Lilia Sapurina Lilia.Sapurina@billing.ru.
 * @fileoverview Библиотека пользовательских matchers
 *
 * @created    [13.08.2015] Lilia Sapurina.
 */

beforeEach(
  function () {
    var matchers = {
    // Проверка наличия определённого класса у объекта
    toContainClass: function (expected) {
      var self = this;
      var deferred = protractor.promise.defer();
      self.actual.getAttribute('class').then(function (classes) {
        var result = classes && classes.search(new RegExp(expected, 'i')) > 0;
        if (result) {
          deferred.fulfill(true);
        } else {
          deferred.reject(classes + ' не содержит класс ' + expected);
        }
      });
      return deferred.promise;
    },
    // Проверка задан ли динамически элемент или нет
    present: function () {
      var self = this;
      var deferred = protractor.promise.defer();
      browser.wait(self.actual.isPresent()).then(function () {
        deferred.fulfill(true);
      }).thenCatch(function () {
        deferred.reject('Балун не появился');
      });
      return deferred.promise;
    },
    // Проверка задан ли динамически элемент или нет
    isDisplayed: function () {
      var self = this;
      var deferred = protractor.promise.defer();
      browser.wait(self.actual.isPresent()).then(function () {
        browser.wait(self.actual.isDisplayed()).then(function () {
          deferred.fulfill(true);
        }).thenCatch(function () {
          deferred.reject('Element is not display');
        });
      }).thenCatch(function () {
        deferred.reject('Element is not present');
      });
      return deferred.promise;
    }
   };
  jasmine.addMatchers(matchers);
  }
);