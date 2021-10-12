import {flipObj} from './utils.js';

//object containing english to morse conversion
const morseTranslation = {
  '\n': '|',
  ' ': '|',
  '': '',
  'a': '.-',
  'b': '-...',
  'c': '-.-.',
  'd': '-..',
  'e': '.',
  'f': '..-.',
  'g': '--.',
  'h': '....',
  'i': '..',
  'j': '.---',
  'k': '-.-',
  'l': '.-..',
  'm': '--',
  'n': '-.',
  'o': '---',
  'p': '.--.',
  'q': '--.-',
  'r': '.-.',
  's': '...',
  't': '-',
  'u': '..-',
  'v': '...-',
  'w': '.--',
  'x': '-..-',
  'y': '-.--',
  'z': '--..',
  '1': '.---',
  '2': '..---',
  '3': '...--',
  '4': '....-',
  '5': '.....',
  '6': '-....',
  '7': '--...',
  '8': '---..',
  '9': '----.',
  '0': '-----',
  '!': '-.-.--',
  '?': '..--..',
  '.': '.-.-.-',
  ',': '--..--',
  '@': '.--.-.',
  '\'': '.----.',
  ':': '---...',
  ';': '-.-.-.',
  '"': '.-..-.',
  '$': '...-..-',
  '/': '-..-.',
  '(': '-.--.',
  ')': '-.--.-',
  '=': '-...-',
  '+': '.-.-.',
  '-': '-....-',
  '_': '..--.-'
};

//switching keys and values {eng: "morse"}
const englishTranslation = flipObj(morseTranslation);

/**
 * Given a string will convert characters into morse code.
 * @param {string | number} input
 * @return {string}
 */
export const engToMorse = (input) => {
  return String(input)
    .toLowerCase()
    .split('')
    .map((character) => {
      //checks that all characters are translatable, else throws error.
      if (!Object.keys(morseTranslation).includes(character)) {
        throw new Error('Invalid character entered.');
      }
      //returns morse code to new array being created.
      return morseTranslation[character];
    })
    //creates a string of code seperated by spaces.
    .join(' ');
};

/**
 * Given morse code will convert morse into a string of characters.
 * @param {string} morse
 * @return {string}
 */
export const morseToEng = (morse) => {

  //throws error to use if input is not a string (not required in UI but required to pass tests)
  if (typeof morse !== 'string') {
    throw new Error('Invalid input. Morse code must be a string.');
  }

  //throws error if every char in users code is NOT an accepted char.
  if (morse.split('').every((character) => {
    return !['.', '-', '|', ' '].includes(character);
  })) {
    throw new Error('Invalid input. Morse code must only contain \'. - | _\' characters.');
  }

  return String(morse)
    //creates an array of items seperated by spaces in the morse code
    .split(' ')
    //checks that all items in the array are translatable morse code, otherwise throws error.
    .map((code) => {
      if (!Object.keys(englishTranslation).includes(code)) {
        throw new Error('Invalid code entered.');
      }
      //returns the english alphabet to a new array
      return englishTranslation[code];
    })
    //turns array of letter into a string
    .join('');
};

