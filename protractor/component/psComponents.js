/**
 * @file       psComponent.js
 * @package
 * @copyright  Copyright (c) CJSC PETER-SERVICE, 2015.
 * @author     Lilia Sapurina Lilia.Sapurina@billing.ru.
 * @fileoverview Класс-наследник ElementFinder
 *
 * @created    [13.08.2015] Lilia Sapurina.
 */


// Подключаем библиотеку для доступа ко всем файлам в папках
var requireDir = require('require-dir');

require(globalConf.path_to_lib + 'locators');
require(globalConf.path_to_javascript + 'js-helper');

// Подключаем все файлы с параметрами в папке helper
requireDir(globalConf.path_to_helper);

// Подключаем библиотеку для наследования
var util = require('util');

// Конструктор
var PsComponent = function() {
  PsComponent.super_.apply(this, arguments);
};

util.inherits(PsComponent, protractor.ElementFinder);


// Определяем общие пользовательские методы
PsComponent.prototype.getWidth = function () {
  return this.getSize().then(function (size) {
    return size.width;
  });
};

PsComponent.prototype.getHeight = function () {
  return this.getSize().then(function (size) {
    return size.height;
  });
};

PsComponent.prototype.getX = function () {
  return this.getLocation().then(function (location) {
    return location.x;
  });
};

PsComponent.prototype.getY = function () {
  return this.getLocation().then(function (location) {
    return location.y;
  });
};

PsComponent.prototype.getInputText = function () {
  return this.getAttribute("value");
};

PsComponent.prototype.dateInInterval = function (min,max) {
  return (Date(this.getText()) >= Date(min) && Date(this.getText()) <= Date(max));
};

PsComponent.prototype.doubleClick = function () {
  browser.actions().doubleClick(this).perform();
};

PsComponent.prototype.rightClick = function () {
  browser.actions().mouseMove(this).click(protractor.Button.RIGHT).perform();
};

PsComponent.prototype.mouseMove = function () {
  browser.actions().mouseMove(this).perform();
};

PsComponent.prototype.dragAndDrop = function (x,y) {
  browser.actions().dragAndDrop(this, {x: x, y: y}).perform();
};

PsComponent.prototype.pushKey = function (value) {
  if(value === 'DOWN'){
    browser.actions().mouseMove(this).sendKeys(protractor.Key.DOWN).perform();
  }
  if(value === 'UP'){
    browser.actions().mouseMove(this).sendKeys(protractor.Key.UP).perform();
  }
  if(value === 'RIGHT'){
    browser.actions().mouseMove(this).sendKeys(protractor.Key.RIGHT).perform();
  }
  if(value === 'LEFT'){
    browser.actions().mouseMove(this).sendKeys(protractor.Key.LEFT).perform();
  }
  if(value === 'ENTER'){
    browser.actions().mouseMove(this).sendKeys(protractor.Key.ENTER).perform();
  }
  if(value === 'TAB'){
    browser.actions().mouseMove(this).sendKeys(protractor.Key.TAB).perform();
  }
  if(value === 'DEL'){
    browser.actions().mouseMove(this).sendKeys(protractor.Key.DELETE).perform();
  }
  if(value === 'BACKSPACE'){
    browser.actions().mouseMove(this).sendKeys(protractor.Key.BACK_SPACE).perform();
  }
};

PsComponent.prototype.pushKeyCombo = function (value1,value2) {
  if(value1 === 'CTRL' && value2 === 'Z'){
    browser.actions().sendKeys(protractor.Key.CONTROL, 'z').perform();
  }
  if(value1 === 'CTRL' && value2 === 'A'){
    browser.actions().sendKeys(protractor.Key.CONTROL, 'a').perform();
  }
  if(value1 === 'CTRL' && value2 === 'C'){
    browser.actions().sendKeys(protractor.Key.CONTROL, 'c');
  }
  if(value1 === 'CTRL' && value2 === 'V'){
    browser.actions().sendKeys(protractor.Key.CONTROL, 'v').perform();
  }
};

PsComponent.prototype.pushKeyDown= function () {
  if(value === 'SHIFT'){
    browser.actions().keyDown(protractor.Key.SHIFT);
  }
};

PsComponent.prototype.pushKeyUp= function () {
  if(value === 'SHIFT'){
    browser.actions().keyUp(protractor.Key.SHIFT);
  }
};

PsComponent.prototype.getHighlightedText = function () {
  return browser.executeScript(function getSelectionText() {
    var text = "";
    if (window.getSelection) {
      text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
      text = document.selection.createRange().text;
    }
    return text;
  });
};

PsComponent.prototype.getCaretPosition = function () {
  return browser.executeScript(function (input) {
    if (document.selection && document.selection.createRange) {
      var range = document.selection.createRange();
      var bookmark = range.getBookmark();
      var caret_pos = bookmark.charCodeAt(2) - 2;
    } else {
      if (input.setSelectionRange){
        caret_pos = input.selectionStart;
      }
    }
    return caret_pos;
  });
};


PsComponent.prototype.waitReady = function(opt_optStr) {
  var self = this;
  var driverWaitIterations = 0;
  var lastWebdriverError;
  function throwError() {
    throw new Error("Expected '" + self.locator().toString() +
            "' to be present and visible. " +
            "After " + driverWaitIterations + " driverWaitIterations. " +
            "Last webdriver error: " + lastWebdriverError);
  };

  function isPresentError(err) {
    lastWebdriverError = (err != null) ? err.toString() : err;
    return false;
  };

  return browser.driver.wait(function() {
    driverWaitIterations++;
    if (opt_optStr === 'withRefresh' && driverWaitIterations > 7) {
        refreshPage();
    }
    return self.isPresent().then(function(present) {
      if (present) {
        return self.isDisplayed().then(function(visible) {
          lastWebdriverError = 'visible:' + visible;
          return visible;
        }, isPresentError);
      } else {
        lastWebdriverError = 'present:' + present;
        return false;
      }
    }, isPresentError);
  }, 10000).then(function(waitResult) {
    if (!waitResult) {
      throwError();
    };
    return waitResult;
  }, function(err) {
    isPresentError(err);
    throwError();
    return false;
  });
};

module.exports  = PsComponent;
