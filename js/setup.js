'use strict';

(function () {
  var WIZARDS_COUNT = 4;

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
  var dialogHandle = setup.querySelector('.upload');
  var similarWizards = document.querySelector('.setup-similar');
  var form = setup.querySelector('.setup-wizard-form');

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
    dialogHandle.addEventListener(
        'mousedown',
        window.dragDialog.dialogHandleMouseDownHandler
    );
    window.backend.load(loadSuccessHandler, errorHandler);
    form.addEventListener('submit', saveSubmitHandler);
  };

  var closeSetup = function () {
    setup.classList.add('hidden');
    setup.style = '';

    document.removeEventListener('keydown', documentKeydownEscHandler);
    setupClose.removeEventListener('click', setupCloseClickHandler);
    setupClose.removeEventListener('keydown', setupCloseKeydownEnterHandler);
    setupUserName.removeEventListener('focus', setupUserNameFocusHandler);
    setupUserName.removeEventListener('blur', setupUserNameBlurHandler);
    setupWizardCoat.removeEventListener('click', setupWizardCoatClickHandler);
    setupWizardEyes.removeEventListener('click', setupWizardEyesClickHandler);
    setupFireball.removeEventListener('click', setupFireballClickHandler);
    dialogHandle.removeEventListener(
        'mousedown',
        window.dragDialog.dialogHandleMouseDownHandler
    );
    window.wizards.removeWizards();
    form.removeEventListener('submit', saveSubmitHandler);
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

  var loadSuccessHandler = function (data) {
    similarWizards.classList.remove('hidden');

    for (var i = 0; i < WIZARDS_COUNT; i++) {
      var wizardData = window.utils.getRandomElement(data);

      window.wizards.renderWizards(wizardData);
    }
  };

  var saveSubmitHandler = function (evt) {
    window.backend.save(new FormData(form), closeSetup, errorHandler);

    evt.preventDefault();
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');

    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };
})();
