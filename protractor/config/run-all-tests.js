/**
 * @file       run_all_tests_conf.js
 * @package
 * @copyright  Copyright (c) CJSC PETER-SERVICE, 2015.
 * @author     marina.peunkova.
 * @fileoverview
 *
 * @created    [06.08.2015] marina.peunkova.
 */

global.globalConf = require('..//config/global.js');
// Присваеваем полученный конфиг текущему
exports.config = {
  seleniumAddress: globalConf.seleniumAddress,
  baseUrl: globalConf.baseUrl,
  //specs: ['../test/customerCardRegistration/SBMS-CreateCustomer-FizCopyCustomerNameDeliveryFilled.js'], 
  specs: ['../test/customerCardRegistration/SBMS-CustomerCard-Open.js'],  
  capabilities: globalConf.capabilities,
  framework: globalConf.framework,

  params: {
  },
  onPrepare: globalConf.onPrepare
};