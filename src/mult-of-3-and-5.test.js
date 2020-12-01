const multOf3And5 = require("./mult-of-3-and-5");

describe("multOf3And5", () => {
  it("returns the sum of all the multiples of 3 or 5", () => {
    expect(multOf3And5(10)).toBe(23);
    expect(multOf3And5(1000)).toBe(233168);
  });
});
