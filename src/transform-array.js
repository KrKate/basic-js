const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) {
    throw new Error ("'arr' parameter must be an instance of the Array!")
  }
  if (arr.length === 0) {
    return [];
  }
  for (let i=0; i<arr.length; i++) {
    //--discard-next исключает следующий элемент массива из преобразованного массива.
    if (arr[i] === '--discard-next' && arr[i+1] !== undefined ) {
      let discardNext = arr.slice(0, i) + "," + arr.slice(i + 2);
      // console.log(discardNext);
      return discardNext;
    }
    //--discard-prev исключает предыдущий элемент массива из преобразованного массива.
    if (arr[i] === '--discard-prev' && arr[i-1] !== undefined) {
      let discardPrev = arr.slice(0, i-1) + "," + arr.slice(i+1);
      // console.log(discardPrev);
      return discardPrev;
    }
    //--double-next дублирует следующий элемент массива в преобразованном массиве.
    if (arr[i] === '--double-next' && arr[i+1] !== undefined ) {
      let doubleNext = arr.slice(0, i) + "," + arr[i + 1] + "," + arr.slice(i + 1);
      // console.log(doubleNext);
      return doubleNext;
    }
    //--double-prev дублирует предыдущий элемент массива в преобразованном массиве.
    if (arr[i] === '--double-prev' && arr[i-1] !== undefined) {
      let doublePrev = arr.slice(0, i) + "," + arr[i - 1] + "," + arr.slice(i + 1);
      // console.log(doublePrev);
      return doublePrev;
    }
  }
}


transform([1, 2, 3, '--discard-next', 4, 5])
transform([1, 2, 3, '--discard-prev', 4, 5])
transform([1, 2, 3, '--double-next', 4, 5])
transform([1, 2, 3, '--double-prev', 4, 5])

module.exports = {
  transform
};
