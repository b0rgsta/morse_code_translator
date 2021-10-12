import {flipObj} from './utils';

describe('flipObj', function () {
  it('should handle empty objects', function () {
    expect(flipObj({})).toStrictEqual({})
  });

  it('should only accept objects', function () {
    expect(() => flipObj("hello")).toThrowError('not a valid input')
    expect(() => flipObj(1010)).toThrowError('not a valid input')
    expect(() => flipObj(true)).toThrowError('not a valid input')
  });

  it('should switch the key and value around', function () {
    expect(flipObj({name: 'Andrew'})).toStrictEqual({Andrew: 'name'})
  });

  it('should handle an object with multiple keys:values', function () {
    expect(flipObj({name: 'Andrew', age: 35})).toStrictEqual({Andrew: 'name', 35: 'age'})
  });

  it('should handle a keys with non string values (null)', function () {
    expect(flipObj({height: 161, age: null})).toStrictEqual({161: "height", null: 'age'})
  });
})

