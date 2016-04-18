/**
 * @file       CustomLocators.js
 * @package
 * @copyright  Copyright (c) CJSC PETER-SERVICE, 2015.
 * @author     Lilia Sapurina Lilia.Sapurina@billing.ru.
 * @fileoverview Пользовательские локаторы
 *
 * @created    [17.08.2015] Lilia Sapurina.
 */

by.addLocator('Name',
  function(spanText,selector, opt_parentElement) {
    var using = opt_parentElement || document;
    var els = using.querySelectorAll(selector);
      return Array.prototype.filter.call(els, function(el) {
        return el.getAttribute("name") === spanText;
      });
  });