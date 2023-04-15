const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = 0;
  const arr = [];
    while (num !== 0) {
        arr.push(num % 10);
        num = Math.floor(num / 10);
    }
    for (let i = 0; i < arr.length; i++) {
        let n = 0;
        for (let j = arr.length - 1; j >= 0; j--) {
            if (j !== i) {
                n = n * 10 + arr[j];
            }
        }
        result = Math.max(n, result);
    }
    return result;
}

module.exports = {
  deleteDigit
};
