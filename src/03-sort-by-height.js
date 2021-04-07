/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const len = arr.length;
  const positions = [];
  arr.forEach((item, idx) => {
    if (item === -1) positions.push(idx);
  });
  const filtered = arr.filter((item) => item !== -1).sort((a, b) => a - b);
  for (let i = 0; i < len; i += 1) {
    if (positions.includes(i) === true) {
      filtered.splice(i, 0, -1);
    }
  }
  return filtered;
}

module.exports = sortByHeight;
