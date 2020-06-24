'use strict';

(function () {
  var ELEMENTS = {
    use: 'use',
    div: 'DIV'
  };
  var KEYS = {
    esc: 'Escape',
    enter: 'Enter'
  };

  var getRandomElement = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  var changeColor = function (element, colors, input) {
    var index = colors.indexOf(input.value) + 1;

    if (index === colors.length) {
      index = 0;
    }

    switch (element.tagName) {
      case ELEMENTS.use:
        element.style.fill = colors[index];
        break;
      case ELEMENTS.div:
        element.style.backgroundColor = colors[index];
        break;
    }

    input.value = colors[index];
  };

  var isEscEvent = function (evt, action) {
    if (evt.key === KEYS.esc) {
      evt.preventDefault();

      action();
    }
  };

  var isEnterEvent = function (evt, action) {
    if (evt.key === KEYS.enter) {
      evt.preventDefault();

      action();
    }
  };

  var elementsComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  window.utils = {
    getRandomElement: getRandomElement,
    getMaxElement: getMaxElement,
    changeColor: changeColor,
    isEscEvent: isEscEvent,
    isEnterEvent: isEnterEvent,
    elementsComparator: elementsComparator
  };
})();
