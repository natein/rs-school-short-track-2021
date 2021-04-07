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
function deleteDigit(n) {
  const str = n.toString();
  const arr = [];
  for (let i = 0; i < str.length; i += 1) {
    const part = str.substr(0, i) + str.substr(i + 1);
    arr.push(parseInt(part, 10));
  }
  return Math.max(...arr);
}

module.exports = deleteDigit;
