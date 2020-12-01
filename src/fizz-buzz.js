/**
 * @param {number} n The upper bound
 * @returns {string[]} An array of string containing 1 to `n`, but for multiples
 * of 3 substitute with "Fizz", for multiples of 5 substitute with "Buzz" and
 * for numbers which are multiples of both 3 and 5 substitute with "FizzBuzz"
 */
function fizzBuzz(n = 100) {
  /** @type {string[]} */
  let result = [];

  for (const i of [...Array(n + 1).keys()].slice(1)) {
    const fizz = i % 3 == 0 ? "Fizz" : "";
    const buzz = i % 5 == 0 ? "Buzz" : "";

    result.push(fizz + buzz || i.toString());
  }
  return result;
}

module.exports = fizzBuzz;
