const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let depth = 1;
    if (!Array.isArray(arr)) {
      return 0;
    }
    for (let i=0; i<arr.length; i++) {
      if(Array.isArray(arr[i])) {
//если текущий элемент является массивом, то вызываю метод
//для этого массива с добавлением 1 к результату
        let current = this.calculateDepth(arr[i]) + 1;
        if (current>depth) {
          depth = current;
        }
      }
    }
    return depth;
  }
}



module.exports = {
  DepthCalculator
};
