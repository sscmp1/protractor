/**
 * @file       Component.js
 * @package
 * @copyright  Copyright (c) CJSC PETER-SERVICE, 2015.
 * @author     Lilia Sapurina Lilia.Sapurina@billing.ru.
 * @fileoverview Плагин, подключающий все библиотеки
 *
 * @created    [19.08.2015] Lilia Sapurina.
 */

(function () {

  var components = {};
  //components['PsComponents'] = require(globalConf.path_to_component + 'psComponents');
  //components['PsDateTimePicker'] = require(globalConf.path_to_component + 'psDateTimePicker');
  //components['PsGrid'] = require(globalConf.path_to_component + 'psGrid');
  //components['PsToolbar'] = require(globalConf.path_to_component + 'psToolbar');
  //components['PsTextField'] = require(globalConf.path_to_component + 'psTextField');
  //components['PsTabs'] = require(globalConf.path_to_component + 'psTabs');
  //components['PsList'] = require(globalConf.path_to_component + 'psList');
  //components['PsRadioGroup'] = require(globalConf.path_to_component + 'psRadioGroup');
  //components['PsDuration'] = require(globalConf.path_to_component + 'psDuration');
  //components['PsDrop'] = require(globalConf.path_to_component + 'psDrop');
  //components['PsBalloon'] = require(globalConf.path_to_component + 'psBalloon');

  // Создание глобальных объектов этих классов
  Object.keys(components).forEach(function(klass){
    var helperName = klass[0].toLowerCase() + klass.slice(1);
    global[helperName] = function(locator) {
      return new components[klass](browser, (new protractor.ElementArrayFinder(browser)).all(locator));
    };
    protractor.ElementFinder.prototype['to'+klass] = function(){
      return new components[klass](this.ptor_, this.elementArrayFinder_);
    };
  });

})();

