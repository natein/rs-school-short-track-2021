/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const stats = {};
  domains.forEach((item) => {
    let key = '';
    const parts = item.split('.').reverse();
    for (let i = 0; i < parts.length; i += 1) {
      key += `.${parts[i]}`;
      stats[key] = (Object.prototype.hasOwnProperty.call(stats, key) === false)
        ? 1 : stats[key] + 1;
    }
  });
  return stats;
}

module.exports = getDNSStats;
