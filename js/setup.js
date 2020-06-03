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
var WIZARDS_COUNT = 4;

var setup = document.querySelector('.setup');
var similarWizards = document.querySelector('.setup-similar');

setup.classList.remove('hidden');
similarWizards.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');
var wizards = [];

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
