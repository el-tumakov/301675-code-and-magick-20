'use strict';

(function () {
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate =
    document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var renderWizards = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    var similarLabel = wizardElement.querySelector('.setup-similar-label');
    var wizardCoat = wizardElement.querySelector('.wizard-coat');
    var wizardEyes = wizardElement.querySelector('.wizard-eyes');

    similarLabel.textContent = wizard.name;
    wizardCoat.style.fill = wizard.colorCoat;
    wizardEyes.style.fill = wizard.colorEyes;

    similarListElement.appendChild(wizardElement);
  };

  var removeWizards = function () {
    var wizardElements = document.querySelectorAll('.setup-similar-item');

    wizardElements.forEach(function (item) {
      item.remove();
    });
  };

  window.wizards = {
    renderWizards: renderWizards,
    removeWizards: removeWizards
  };
})();
