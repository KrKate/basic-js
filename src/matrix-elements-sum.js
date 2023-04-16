const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let sum = 0;
  const column = matrix[0];
  for (let i=0; i<column.length; i++) {
    for (let j=0; j < matrix.length; j++) {
      console.log(`row is ${matrix[i]}`);
      //иду по колонке
      if (matrix[j][i] === 0) {
        break;
      }
      sum += matrix[j][i];
    }
  }
  return sum;
}


matrix = [
   [0, 1, 1, 2],
   [0, 5, 0, 0],
   [2, 0, 3, 3]
  ]
getMatrixElementsSum(matrix)



module.exports = {
  getMatrixElementsSum
};
