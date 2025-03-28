const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr1 = s1.split('').sort().join('');
  let arr2 = s2.split('').sort().join('');
  let counter = 0;
  for (let i=0; i<arr1.length; i++) {
    if(arr2.includes(arr1[i])) {
      counter++;
      arr2 = arr2.replace(arr1[i], '')
    }
  }
  return counter;
}

console.log(getCommonCharacterCount("aabcg  nc", "a dcaavgnv v"))
module.exports = {
  getCommonCharacterCount
};
