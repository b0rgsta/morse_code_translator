/**
 * Given a string will convert characters into morse code.
 * @param {string | number} input
 * @return {string}
 */
export const engToMorse = (input) => {

}

/**
 * Given morse code will convert the code into a string of characters.
 * @param {string} morse
 * @return {string}
 */
export const morseToEng = (morse) => {

}

const morseTranslation = {
  ' ': "|",
  'a': ".-",
  'b': "-...",
  'c': "-.-.",
  'd': "-..",
  'e': ".",
  'f': "..-.",
  'g': "--.",
  'h': "....",
  'i': "..",
  'j': ".---",
  'k': "-.-",
  'l': ".-..",
  'm': "--",
  'n': "-.",
  'o': "---",
  'p': ".--.",
  'q': "--.-",
  'r': ".-.",
  's': "...",
  't': "-",
  'u': "..-",
  'v': "...-",
  'w': ".--",
  'x': "-..-",
  'y': "-.--",
  'z': "--..",
  '1': ".---",
  '2': "..---",
  '3': "...--",
  '4': "....-",
  '5': ".....",
  '6': "-....",
  '7': "--...",
  '8': "---..",
  '9': "----.",
  '0': "-----",
  '!': "-.-.--",
  '?': "..--..",
  '.': ".-.-.-",
  ',': "--..--",
  '@': ".--.-.",
  '\'': ".----.",
  ':': "---...",
  ';': "-.-.-.",
  '"': ".-..-.",
  '$': "...-..-",
  '/': "-..-.",
  '(': "-.--.",
  ')': "-.--.-",
  '=': "-...-",
  '+': ".-.-.",
  '-': "-....-",
  '_': "..--.-",
  '\n': "|"
}

const englishTranslation = flipObj(morseTranslation)

/**
 * This function take an object and switches each value with its key.
 * @param oldObject
 * @return {{}}
 */
export function flipObj(oldObject) {
}