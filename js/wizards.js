'use strict';

(function () {
  var WIZARDS_COUNT = 4;

  var similarWizards = document.querySelector('.setup-similar');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate =
    document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
  var wizards = [];

  for (var i = 0; i < WIZARDS_COUNT; i++) {
    wizards[i] = {
      name:
        window.utils.getRandomElement(window.data.NAMES) +
        ' ' +
        window.utils.getRandomElement(window.data.SURNAMES),
      coatColor: window.utils.getRandomElement(window.data.COAT_COLORS),
      eyesColor: window.utils.getRandomElement(window.data.EYES_COLORS)
    };

    var wizardElement = similarWizardTemplate.cloneNode(true);
    var similarLabel = wizardElement.querySelector('.setup-similar-label');
    var wizardCoat = wizardElement.querySelector('.wizard-coat');
    var wizardEyes = wizardElement.querySelector('.wizard-eyes');

    similarLabel.textContent = wizards[i].name;
    wizardCoat.style.fill = wizards[i].coatColor;
    wizardEyes.style.fill = wizards[i].eyesColor;

    similarListElement.appendChild(wizardElement);
  }

  similarWizards.classList.remove('hidden');
})();
