'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var setupUserName = setup.querySelector('.setup-user-name');
  var setupWizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
  var coatInput = setup.querySelector('input[name=\"coat-color\"');
  var setupWizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
  var eyesInput = setup.querySelector('input[name=\"eyes-color\"');
  var setupFireball = setup.querySelector('.setup-fireball-wrap');
  var fireballInput = setup.querySelector('input[name=\"fireball-color\"');

  var openSetup = function () {
    setup.classList.remove('hidden');

    document.addEventListener('keydown', documentKeydownEscHandler);
    setupClose.addEventListener('click', setupCloseClickHandler);
    setupClose.addEventListener('keydown', setupCloseKeydownEnterHandler);
    setupUserName.addEventListener('focus', setupUserNameFocusHandler);
    setupUserName.addEventListener('blur', setupUserNameBlurHandler);
    setupWizardCoat.addEventListener('click', setupWizardCoatClickHandler);
    setupWizardEyes.addEventListener('click', setupWizardEyesClickHandler);
    setupFireball.addEventListener('click', setupFireballClickHandler);
  };

  var closeSetup = function () {
    setup.classList.add('hidden');

    document.removeEventListener('keydown', documentKeydownEscHandler);
    setupClose.removeEventListener('click', setupCloseClickHandler);
    setupClose.removeEventListener('keydown', setupCloseKeydownEnterHandler);
    setupUserName.removeEventListener('focus', setupUserNameFocusHandler);
    setupUserName.removeEventListener('blur', setupUserNameBlurHandler);
    setupWizardCoat.removeEventListener('click', setupWizardCoatClickHandler);
    setupWizardEyes.removeEventListener('click', setupWizardEyesClickHandler);
    setupFireball.removeEventListener('click', setupFireballClickHandler);
  };

  var documentKeydownEscHandler = function (evt) {
    window.utils.isEscEvent(evt, closeSetup);
  };

  var setupCloseClickHandler = function (evt) {
    evt.preventDefault();

    closeSetup();
  };

  var setupCloseKeydownEnterHandler = function (evt) {
    window.utils.isEnterEvent(evt, closeSetup);
  };

  var setupUserNameFocusHandler = function () {
    document.removeEventListener('keydown', documentKeydownEscHandler);
  };

  var setupUserNameBlurHandler = function () {
    document.addEventListener('keydown', documentKeydownEscHandler);
  };

  var setupWizardCoatClickHandler = function () {
    window.utils.
      changeColor(setupWizardCoat, window.data.COAT_COLORS, coatInput);
  };

  var setupWizardEyesClickHandler = function () {
    window.utils.
      changeColor(setupWizardEyes, window.data.EYES_COLORS, eyesInput);
  };

  var setupFireballClickHandler = function () {
    window.utils.
      changeColor(setupFireball, window.data.FIREBALL_COLORS, fireballInput);
  };

  setupOpen.addEventListener('click', function (evt) {
    evt.preventDefault();

    openSetup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.utils.isEnterEvent(evt, openSetup);
  });
})();
