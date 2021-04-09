/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let counter = 1;
  let prevLetter = str[0];
  for (let i = 1; i < str.length; i += 1) {
    if (str[i] !== prevLetter) {
      result += (counter > 1) ? counter + prevLetter : prevLetter;
      prevLetter = str[i];
      counter = 1;
      if (i === str.length - 1) {
        result += str[i];
      }
    } else {
      counter += 1;
      if (i === str.length - 1) {
        result += (counter + prevLetter);
      }
    }
  }
  return result;
}

module.exports = encodeLine;
