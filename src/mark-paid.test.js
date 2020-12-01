const markPaid = require("./mark-paid");

describe("markPaid", () => {
  it("returns an array of bills or empty array if no match is found", () => {
    let bills = [1000, 3000, 1000, 5000, 10000];

    expect(markPaid(2000, bills)).toStrictEqual([0, 2]);
    expect(markPaid(1000, bills)).toStrictEqual([0]);
    expect(markPaid(13000, bills)).toStrictEqual([1, 4]);
    expect(markPaid(16000, bills)).toStrictEqual([0, 3, 4]);
    expect(markPaid(400, bills)).toStrictEqual([]);
    expect(markPaid(25000, bills)).toStrictEqual([]);

    bills = [4000, 2000, 1000, 3000, 6000, 2000, 1000];

    expect(markPaid(8000, bills)).toStrictEqual([1, 4]);
  });
});
