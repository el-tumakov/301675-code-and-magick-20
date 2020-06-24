'use strict';

(function () {
  var WIZARDS_COUNT = 4;

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate =
    document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
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

  var getRank = function (wizard) {
    var coatColor = document.querySelector('input[name=\"coat-color\"').value;
    var eyesColor = document.querySelector('input[name=\"eyes-color\"').value;
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  var updateWizards = function () {
    window.setup.wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);

      if (rankDiff === 0) {
        rankDiff = window.utils.elementsComparator(left.name, right.name);
      }

      return rankDiff;
    });

    removeWizards();

    for (var i = 0; i < WIZARDS_COUNT; i++) {
      renderWizard(window.setup.wizards[i]);
    }
  };

  window.wizards = {
    removeWizards: removeWizards,
    updateWizards: updateWizards
  };
})();
