import {engToMorse} from "./index.js";

describe('engToMorse', function () {
  it('should return an empty string when given an empty string', function () {
    expect(engToMorse("")).toBe("")
  });

  it('should only accept strings as well as numbers', function () {
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
  it('should only accept 4 characters . - | and spaces.', function () {

  });
  it('should return an empty string when given an empty string', function () {

  });
  it('should handle spaces', function () {

  });
  it('should handle multiple characters', function () {

  });
  it('should handle single characters', function () {

  });
  it('should handle multiple sentences', function () {

  });
  it('should not accept unknown alphabets', function () {

  });
});