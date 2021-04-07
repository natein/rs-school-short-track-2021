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
  const flatted = matrix.flat(1);
  const matrixSize = matrix[0].length;
  return flatted.reduce((acc, item, idx, arr) => {
    const expression = (idx >= matrixSize - 1 && arr[idx - matrixSize] === 0);
    return (expression) ? acc : acc + item;
  }, 0);
}

module.exports = getMatrixElementsSum;
