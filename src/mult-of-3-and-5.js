/**
 * @param {number} n The upper bound
 * @returns {number} The sum of all the multiples of 3 or 5 below `n`
 */
function multOf3And5(n = 1000) {
  return [...Array(n).keys()]
    .filter((n) => n % 3 === 0 || n % 5 === 0)
    .reduce((a, c) => a + c, 0);
}

module.exports = multOf3And5;
