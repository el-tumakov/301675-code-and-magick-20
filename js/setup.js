'use strict';

var NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var FIREBALL_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];
var WIZARDS_COUNT = 4;


var similarWizards = document.querySelector('.setup-similar');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');
var wizards = [];

similarWizards.classList.remove('hidden');

var getRandomElement = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

for (var i = 0; i < WIZARDS_COUNT; i++) {
  wizards[i] = {
    name: getRandomElement(NAMES) + ' ' + getRandomElement(SURNAMES),
    coatColor: getRandomElement(COAT_COLORS),
    eyesColor: getRandomElement(EYES_COLORS)
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

var changeColor = function (element, colors, input) {
  var index = colors.indexOf(input.value) + 1;

  if (index === colors.length) {
    index = 0;
  }

  switch (element.tagName) {
    case 'use':
      element.style.fill = colors[index];
      break;
    case 'DIV':
      element.style.backgroundColor = colors[index];
      break;
  }

  input.value = colors[index];
};

var documentKeydownEscHandler = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();

    closeSetup();
  }
};

var setupCloseClickHandler = function (evt) {
  evt.preventDefault();

  closeSetup();
};

var setupCloseKeydownEnterHandler = function (evt) {
  if (evt.key === 'Enter') {
    evt.preventDefault();

    closeSetup();
  }
};

var setupUserNameFocusHandler = function () {
  document.removeEventListener('keydown', documentKeydownEscHandler);
};

var setupUserNameBlurHandler = function () {
  document.addEventListener('keydown', documentKeydownEscHandler);
};

var setupWizardCoatClickHandler = function () {
  changeColor(setupWizardCoat, COAT_COLORS, coatInput);
};

var setupWizardEyesClickHandler = function () {
  changeColor(setupWizardEyes, EYES_COLORS, eyesInput);
};

var setupFireballClickHandler = function () {
  changeColor(setupFireball, FIREBALL_COLORS, fireballInput);
};


setupOpen.addEventListener('click', function (evt) {
  evt.preventDefault();

  openSetup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    evt.preventDefault();

    openSetup();
  }
});
