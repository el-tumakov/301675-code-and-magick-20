'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var setupUserName = setup.querySelector('.setup-user-name');
  var setupWizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
  var setupWizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
  var setupFireball = setup.querySelector('.setup-fireball-wrap');
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
    setupWizardCoat.addEventListener(
        'click',
        window.wizardSettings.coatClickHandler
    );
    setupWizardEyes.addEventListener(
        'click',
        window.wizardSettings.eyesClickHandler
    );
    setupFireball.addEventListener(
        'click',
        window.wizardSettings.fireballClickHandler
    );
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
    setupWizardCoat.removeEventListener(
        'click',
        window.wizardSettings.coatClickHandler
    );
    setupWizardEyes.removeEventListener(
        'click',
        window.wizardSettings.eyesClickHandler
    );
    setupFireball.removeEventListener(
        'click',
        window.wizardSettings.fireballClickHandler
    );
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

  setupOpen.addEventListener('click', function (evt) {
    evt.preventDefault();

    openSetup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.utils.isEnterEvent(evt, openSetup);
  });

  var wizards = [];
  var loadSuccessHandler = function (data) {
    window.setup.wizards = data;

    similarWizards.classList.remove('hidden');

    window.wizards.updateWizards();
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

  window.setup = {
    wizards: wizards
  };
})();
