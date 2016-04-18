/**
 * @file       list-of-references.js
 * @package
 * @copyright  Copyright (c) CJSC PETER-SERVICE, 2015.
 * @author     Lilia Sapurina Lilia.Sapurina@billing.ru.
 * @fileoverview Списки параметров для списка обращений
 *
 * @created    [18.09.2015] Lilia Sapurina.
 */

// Идентификаторы компонентов
global.psToolbarId = "ps-toolbar[class='n-panel no-select']";
global.psTabsId = "//ul[@class='n-tabs']";

global.psListReferenceId = "//ps-tab[@caption='Обращения']";
global.psListContactsId = "//ps-tab[@caption='Контакты']";
global.psListClientId = "//ps-tab[@caption='Клиент']";
global.psListProcessingId = "//ps-tab[@caption='Обработка']";
global.psListAdditionalId = "//ps-tab[@caption='Дополнительно']";
global.psListProblemsId = "//ps-tab[@caption='Проблемы']";

global.psDropId = '//*[@id="PS_SBMS_WORK_WINDOW"]/div[6]';
global.psGridId = "table[class='n-grid']";

// Порядковые номера для колонок быстрого фильтра списка обращений
global.gridFilter = {
  // Номер
  number: 2,
  // Тема
  theme: 2,
  // Статус
  status: 3,
  // Имя клиента
  clientName: 9,
  // Дата регистрации
  registrationDate: 4
};

global.dropMenu = {
  // Параметры клиента
  parameters: 5
};

global.clientParameters = {
  // Наименование клиента
  clientName: 1,
  // Категория
  category: 2,
  // Признак
  feature: 3,
  // Класс
  class: 4,
  // Статус
  status: 5,
  // Филиал
  filial: 6,
  // Объединение
  union: 7,
  // Тарифный план
  plan: 8,
  // Баланс
  balance: 9,

  // Клиент
  client: 1,
  // Абоненты
  abonents: 2,

  // Номера абонентов
  abonentsNumbers: 1

};

global.categoryValues = {
  //BIS
  bis: 1,
  //CMS CUSTOMER
  cmsCustomer: 2,
  //TEST
  test: 3,
  //Выбрать все
  chooseAll: 4
};