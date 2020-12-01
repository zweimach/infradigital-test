const fizzBuzz = require("./fizz-buzz");

describe("fizzBuzz", () => {
  it("returns an array of FizzBuzz string", () => {
    expect(fizzBuzz(15)).toStrictEqual([
      "1",
      "2",
      "Fizz",
      "4",
      "Buzz",
      "Fizz",
      "7",
      "8",
      "Fizz",
      "Buzz",
      "11",
      "Fizz",
      "13",
      "14",
      "FizzBuzz",
    ]);
  });
});
