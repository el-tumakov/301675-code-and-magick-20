'use strict';

(function () {
  var coat = document.querySelector('.setup-wizard .wizard-coat');
  var eyes = document.querySelector('.setup-wizard .wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');
  var coatInput = document.querySelector('input[name=\"coat-color\"');
  var eyesInput = document.querySelector('input[name=\"eyes-color\"');
  var fireballInput = document.querySelector('input[name=\"fireball-color\"');

  var coatClickHandler = function () {
    window.utils.
      changeColor(coat, window.data.COAT_COLORS, coatInput);
    window.debounce(window.wizards.updateWizards);
  };

  var eyesClickHandler = function () {
    window.utils.
      changeColor(eyes, window.data.EYES_COLORS, eyesInput);
    window.debounce(window.wizards.updateWizards);
  };

  var fireballClickHandler = function () {
    window.utils.
      changeColor(fireball, window.data.FIREBALL_COLORS, fireballInput);
  };

  window.wizardSettings = {
    coatClickHandler: coatClickHandler,
    eyesClickHandler: eyesClickHandler,
    fireballClickHandler: fireballClickHandler
  };
})();
