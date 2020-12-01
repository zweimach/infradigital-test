/**
 * @param {number} amount The amount to pay
 * @param {number[]} bills The available bills
 * @returns {number[]} An array of bills with a zero-based index or empty array if no match is found
 */
function markPaid(amount, bills) {
  const withPos = bills.map((x, i) => ({ pos: i, val: x }));
  withPos.sort((a, b) => b.val - a.val);

  /** @type {number[]} */
  // @ts-ignore
  const result = withPos.reduce((a, c) => {
    if (c.val <= amount) {
      amount -= c.val;
      return [...a, c.pos];
    } else {
      return a;
    }
  }, []);
  result.sort();

  return amount === 0 ? result : [];
}

module.exports = markPaid;
