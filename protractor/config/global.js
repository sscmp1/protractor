/**
 * @file       global.js
 * @package
 * @copyright  Copyright (c) CJSC PETER-SERVICE, 2015.
 * @author     Lilia.Sapurina Lilia.Sapurina@billing.ru.
 * @fileoverview
 *
 * @created    [28.07.2015] Lilia.Sapurina.
 */

module.exports = {

  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Базовый url для тестов
  baseUrl: 'http://srv2-sbms-web01:10074/ps/sbms/shell.html?shell_no_start_window=1&shell_login=vclir&shell_password=1111',

  // Массив тестов или сценариев, заполняется в конфигах-наследниках
  specs: [],

  framework: 'jasmine2',

  capabilities: {
    'browserName': 'internet explorer',
    'version': '11'
  },

  // Пути до файлов
  path_to_resource: '../resource/',
  path_to_test: '../test/',
  path_to_lib: '../lib/',
  path_to_result: '../result/',
  path_to_component: '../component/',
  path_to_javascript: '../javascript/',
  path_to_helper: '../helper/',

  //plugins: [{
  //  path: '../plugin/index.js'
  //}],

  jasmineNodeOpts: {
    defaultTimeoutInterval: 50000
  },

  getPageTimeout: 20000,

  onPrepare: function () {

    var env = jasmine.getEnv();	

    browser.ignoreSynchronization=true;

    require('jasmine2-custom-message');
    require('../lib/matchers');

    // Для отчёта allure
    var AllureReporter = require('jasmine-allure-reporter');
    env.addReporter(new AllureReporter({
      allureReport: {
        resultsDir: 'allure-results'
      }
    }));

    // Для упорядоченного отчёта в консоли
    var SpecReporter = require('jasmine-spec-reporter');
    env.addReporter(new SpecReporter({displayStacktrace: true}));

    // Для отчёта в формате JSON
    var reporter = require('jasmine-json-reporter');
    env.addReporter(reporter);
  }
};