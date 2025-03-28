const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = '';
  let counter = 1;
  for (let i=0; i<str.length; i++) {
    if (str[i] === str[i + 1]) {
      counter ++;
    } else {
      if (counter === 1) {
        result = result + str[i];
      } else {
        result = result + counter + str[i];
        counter = 1;
      }
    }
  }
  return result
}

// console.log(encodeLine('aabbbc'))

module.exports = {
  encodeLine
};
