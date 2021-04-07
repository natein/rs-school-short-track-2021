/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const objarr = new Array(26).fill(0).map(() => ({ first: 0, second: 0 }));
  s1.split('').forEach((item) => {
    const idx = item.charCodeAt() - 'a'.charCodeAt();
    objarr[idx].first += 1;
  });
  s2.split('').forEach((item) => {
    const idx = item.charCodeAt() - 'a'.charCodeAt();
    objarr[idx].second += 1;
  });
  return objarr.reduce((acc, item) => acc + Math.min(item.first, item.second), 0);
}

module.exports = getCommonCharacterCount;
