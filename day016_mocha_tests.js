const assert = require("assert");

describe("tests to train my Mocha learning", function () {
  let input = undefined;

  beforeEach(function () {
    input = Math.floor(Math.random() * 100);
    console.log(input);
  });

  it("Checks if input is even", function () {
    const isEven = input % 2 === 0;
    assert.equal(isEven, true);
  });
  it.skip("Checks if input is divisible by 3", function () {
    const isEven = input % 3 === 0;
    assert.equal(isEven, true);
  });
  it(
    "Check if the square root of input multiplied by 5! is divisible by pi (TO BE IMPLEMENTED) XD"
  );
});

// npm test
