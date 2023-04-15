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
    let depthArray = [];
    for (let i=0; i<arr.length; i++) {
      let arrayElement = arr[i];
      if(Array.isArray(arrayElement)) {
        for (let j=0; j<arrayElement.length; j++) {
          depthArray.push(arrayElement[j])    
      }
      return depthArray;
      }
      }
    }
  }




module.exports = {
  DepthCalculator
};
