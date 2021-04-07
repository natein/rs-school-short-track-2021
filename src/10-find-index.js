/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  if (array[0] === value) return 0;
  if (array[array.length - 1] === value) return array.length - 1;
  let start = 0;
  let end = array.length - 1;
  let middle = Math.round((end - start) / 2);
  while (array[middle] !== value) {
    if (array[middle] > value) {
      start = middle;
    } else {
      end = middle;
    }
    middle = Math.round((end - start) / 2);
  }
  return middle;
}

module.exports = findIndex;
