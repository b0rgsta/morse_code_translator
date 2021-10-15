
/**
 * This function take an object and switches each value with its key.
 * @param object
 * @return {{}}
 */
export function flipObj(object) {
  //handles empty objects
  if (object === {}) {
    return {};
    //throws error if not an object
  } else if (typeof object !== 'object') {
    throw new Error('not a valid input');
  }

  return Object
    .keys(object)
    //iterates through inputs keys
    .reduce((newObj, orginalKey) => {

      let newKey = object[orginalKey];
      // output["andrew"] = "name"

      newObj[newKey] = orginalKey;
      // output: {andrew: "name"}
      return newObj;
    }, {});
}