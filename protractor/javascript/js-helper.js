/**
 * @file       JSHelper.js
 * @package
 * @copyright  Copyright (c) CJSC PETER-SERVICE, 2015.
 * @author     Lilia Sapurina Lilia.Sapurina@billing.ru.
 * @fileoverview Расширение функций JavaScript
 *
 * @created    [20.08.2015] Lilia Sapurina.
 */

// Загрузка страницы
global.load = function (url, pageType) {
  browser.get(url);
  if (pageType == 'list-of-references'){
    browser.executeScript("icms.go('WEB_INQ_PROC', 'InquiryList', null, 0)");
  }
  browser.waitForAngular();
};

// Проверка страниц на успешную загрузку
global.sucesessfullLoad = function (pageType,url) {
  // Проверяем страницу списка обращений на успешную загрузку
  if (pageType == 'list-of-references') {
    load(url, "list-of-references");

    var elemOnPage = psToolbar(by.css("ps-toolbar[class='n-panel no-select']"));
    elemOnPage.waitReady();
  }
    return elemOnPage.isDisplayed();
};

// Фильтр для остановки тестов в случае аварийнгой загрузки страницы
global.filter = function (pageType,fn) {
  var config = browser.params;

  if (pageType == 'list-of-references') {
    var url = config.listOfReferencesUrl;
  }

  if (!sucesessfullLoad(pageType,url)){
    throw new Error('Страница не загрузилась');
  }

  return fn;
};

// Извлечение даты в времени в нужном формате
global.today = function () {

  var date = new Date();
  var dd = date.getDate();
  // Январь - месяц №0
  var mm = date.getMonth() + 1;
  var yyyy = date.getFullYear();
  var hh = date.getHours();
  var min = date.getMinutes();

  if (dd < 10) {
    dd = '0' + dd;
  }

  if (min < 10) {
    min = '0' + min;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }

  if (hh < 10) {
    hh = '0' + hh;
  }

  return dd + '.' + mm + '.' + yyyy + ' ' + hh + ':' + min;
};

global.today_only_date = function () {

  var date = new Date();
  var dd = date.getDate();
  // Январь - месяц №0
  var mm = date.getMonth() + 1;
  var yyyy = date.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }

  return dd + '.' + mm + '.' + yyyy;
};

global.day_begin = function () {

  var today = new Date();
  var dd = today.getDate();
  // Январь - месяц №0
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  var hh = '00';
  var min = '00';

  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }

  return dd + '.' + mm + '.' + yyyy + ' ' + hh + ':' + min;
};

global.day_end = function () {

  var today = new Date();
  // Приведём к нужному формату
  var dd = today.getDate();
  // Январь - месяц №0
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  var hh = '23';
  var min = '59';

  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }

  return dd + '.' + mm + '.' + yyyy + ' ' + hh + ':' + min;
};

global.next_day_begin = function () {

  var today = new Date();
  // Приведём к нужному формату
  var dd = today.getDate() + 1;
  // Январь - месяц №0
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  var hh = '00';
  var min = '00';

  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }

  return dd + '.' + mm + '.' + yyyy + ' ' + hh + ':' + min;
};

global.next_day_end = function () {

  var today = new Date();
  // Приведём к нужному формату
  var dd = today.getDate() + 1;
  // Январь - месяц №0
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  var hh = '23';
  var min = '59';

  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }

  return dd + '.' + mm + '.' + yyyy + ' ' + hh + ':' + min;
};

global.month_begin = function () {

  var today = new Date();

  // Приведём к нужному формату
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  var dd = '01';

  var hh = '00';
  var min = '00';

  if (mm < 10) {
    mm = '0' + mm;
  }

  return dd + '.' + mm + '.' + yyyy + ' ' + hh + ':' + min;
};

global.month_end = function () {

  var today = new Date();

  // Приведём к нужному формату
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();

  // Количество дней в каждом месяце
  var day_quantity = [31,29,31,30,31,30,31,31,30,31,30,31];
  var dd;

  // Определяем последний день месяца (учитывая високостный год)
  if((mm === 2) && ((yyyy % 4)===0)){
    dd = day_quantity[mm - 1] - 1;
  }
  else{
    dd = day_quantity[mm - 1];
  }

  var hh = '23';
  var min = '59';

  if (mm < 10) {
    mm = '0' + mm;
  }

  return dd + '.' + mm + '.' + yyyy + ' ' + hh + ':' + min;
};

global.next_month_begin = function () {

  var today = new Date();

  // Приведём к нужному формату
  var mm = today.getMonth() + 2;
  var yyyy = today.getFullYear();
  var dd = '01';

  var hh = '00';
  var min = '00';

  if (mm < 10) {
    mm = '0' + mm;
  }

  return dd + '.' + mm + '.' + yyyy + ' ' + hh + ':' + min;
};

global.next_month_end = function () {

  var today = new Date();

  // Приведём к нужному формату
  var mm = today.getMonth() + 2;
  var yyyy = today.getFullYear();

  // Количество дней в каждом месяце
  var day_quantity = [31,29,31,30,31,30,31,31,30,31,30,31];
  var dd;

  // Определяем последний день месяца (учитывая високостный год)
  if((mm === 2) && ((yyyy % 4)===0)){
    dd = day_quantity[mm - 1] - 1;
  }
  else{
    dd = day_quantity[mm - 1];
  }

  var hh = '23';
  var min = '59';

  if (mm < 10) {
    mm = '0' + mm;
  }

  return dd + '.' + mm + '.' + yyyy + ' ' + hh + ':' + min;
};

global.prev_day_begin = function () {

  var today = new Date();
  // Приведём к нужному формату
  var dd = today.getDate() - 1;
  // Январь - месяц №0
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  var hh = '00';
  var min = '00';

  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }

  return dd + '.' + mm + '.' + yyyy + ' ' + hh + ':' + min;
};

global.prev_day_end = function () {

  var today = new Date();
  // Приведём к нужному формату
  var dd = today.getDate() - 1;
  // Январь - месяц №0
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  var hh = '23';
  var min = '59';

  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }

  return dd + '.' + mm + '.' + yyyy + ' ' + hh + ':' + min;
};

global.create_string_by_length = function (n,symbol) {
  s = '';
  i = 0;
  while (i != n) {
    s = s + symbol;
    i++;
  }
  return s;
};
