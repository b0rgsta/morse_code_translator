import {engToMorse, morseToEng} from './translator.js';

describe('engToMorse', function () {
  it('should return an empty string when given an empty string', function () {
    expect(engToMorse("")).toBe("")
  });

  it('should only accept strings and numbers', function () {
    expect(engToMorse(9)).toBe("----.")
    expect(engToMorse(98)).toBe("----. ---..")
  });

  it('should handle spaces', function () {
    expect(engToMorse("a b c")).toBe(".- | -... | -.-.")
  });

  it('should handle multiple characters', function () {
    expect(engToMorse('hi')).toBe(".... ..")
  });

  it('should handle special characters', function () {
    expect(engToMorse("!")).toBe("-.-.--")
    expect(engToMorse("?")).toBe(("..--.."))
  });

  it('should handle single characters', function () {
    expect(engToMorse("a")).toBe(".-")
    expect(engToMorse("z")).toBe("--..")
  });

  it('should handle numbers in a string', function () {
    expect(engToMorse("5")).toBe(".....")
    expect(engToMorse("58")).toBe("..... ---..")
    expect(engToMorse("h8ers")).toBe(".... ---.. . .-. ...")
  });

  it('should handle periods', function () {
    expect(engToMorse(".")).toBe(".-.-.-")
  });

  it('should handle commas', function () {
    expect(engToMorse(",")).toBe("--..--")
  });

  it('should handle a mix of letters and periods', function () {
    expect(engToMorse("hi.")).toBe(".... .. .-.-.-")
  });

  it('should handle lower case characters', function () {
    expect(engToMorse("hi")).toBe(".... ..")
  });

  it('should handle uppercase characters', function () {
    expect(engToMorse("YO")).toBe("-.-- ---")
  });

  it('should handle a mix of upper and lowercase characters', function () {
    expect(engToMorse("HeLlo")).toBe(".... . .-.. .-.. ---")
  });

  it('should handle multi-line strings', function () {
    expect(engToMorse("this\nsentence")).toBe("- .... .. ... | ... . -. - . -. -.-. .")
  });

});

describe('morseToEng', function () {
  it('should only accept 4 characters , - | space', function () {
    expect(() => morseToEng("hello")).toThrow("Invalid input. Morse code must only contain '. - | _' characters.")
    expect(() => morseToEng(123)).toThrow("Invalid input. Morse code must be a string.")
    expect(() => morseToEng("-..hello")).toThrow("Invalid input. Morse code must only contain '. - | _' characters.")
    expect(() => morseToEng(" -.hello")).toThrow("Invalid input. Morse code must only contain '. - | _' characters.")
  });

  it('should return an empty string when given an empty string', function () {
    expect(morseToEng("")).toBe("")
  });

  it('should handle spaces', function () {
    expect(morseToEng("|")).toBe(" ")
  });

  it('should replace consecutive spaces with a single space', function () {
    expect(morseToEng("---  .-.    .- -.    --.     .")).toBe("orange")
  });

  it('should ignore spaces at the beginning and the end of the code', function () {
    expect(morseToEng("     .... .. ")).toBe("hi")
  });

  it('should handle multiple morse characters', function () {
    expect(morseToEng("--- .-. .- -. --. .")).toBe("orange")
  });

  it('should handle single characters', function () {
    expect(morseToEng("-.-")).toBe("k")
    expect(morseToEng("--")).toBe("m")
  });

  it('should not accept unknown alphabets', function () {
    expect(() => morseToEng("------")).toThrow("Invalid code entered.")
    expect(() => morseToEng("---.-.-")).toThrow("Invalid code entered.")
  });

  it('should handle an empty string', function () {
    expect(morseToEng("")).toBe("")
  });

  it('should handle strings containing only spaces', function () {
    expect(morseToEng("  ")).toBe("")
    expect(morseToEng(" ")).toBe("")
    expect(morseToEng("     ")).toBe("")
  });

});