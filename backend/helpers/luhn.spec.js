const { luhnChk } = require("./luhn.js");

describe("Calculating Luhn Algorithm for credit card", () => {
  test("should output false for wrong credit card numbers", () => {
    let value = luhnChk("123454");
    expect(value).toBe(false);
  });

  test("should output true for right credit card numbers", () => {
    let value = luhnChk("371449635398431");
    expect(value).toBe(true);
  });
});
