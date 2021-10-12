import {engToMorse, morseToEng} from './translator.js';

//Anonymous function. runs code instantly without polluting the scope.
(() => {
  const userInputElement = document.getElementById('user-input');

  document
    .getElementById('toMorseButton')
    .addEventListener('click', () => {
      const userInput = userInputElement.value;
      try {
        userInputElement.value = engToMorse(userInput);
      } catch (e) {
        alert(e.message)
      }
    });

  document
    .getElementById('toEnglishButton')
    .addEventListener('click', () => {
      const userInput = userInputElement.value;
      try {
        userInputElement.value = morseToEng(userInput);
      } catch (e) {
        alert(e.message)
      }
    });

})();