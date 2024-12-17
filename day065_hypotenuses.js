/*
Calculate Hypotenuse of Right-angled Triangle

To solve this Kata, complete the function, calculateHypotenuse(a,b), which will 
return the length of the hyptenuse for a right angled triangle with the other 
two sides having a length equal to the inputs. More details:

The returned value should be a number rounded to three decimal places
An error (ArgumentException in C#) should be thrown if an invalid input is 
provided (inputs should both be numbers that are above zero)
calculateHypotenuse(1,1); // returns 1.414
calculateHypotenuse(3,4); // returns 5
calculateHypotenuse(-2,1); // throws error
calculateHypotenuse("one", "two"); // throws error
For more information on the hypotenuse, visit: 
http://en.wikipedia.org/wiki/Hypotenuse
*/

function calculateHypotenuse(a, b) {
  const regexp = /^[0-9]+(\.[0-9]+)?$/;
  if (regexp.test(a) && regexp.test(b) && a > 0 && b > 0) {
    return Math.round((a ** 2 + b ** 2) ** 0.5 * 1000) / 1000;
  } else {
    throw new Error("One of the sides has an invalid value.");
  }
}

// Test Cases
// Valid
console.log(
  calculateHypotenuse(1, 1),
  1.414,
  "Failed for calculateHypotenuse(1, 1)"
);
console.log(
  calculateHypotenuse(3, 4),
  5.0,
  "Failed for calculateHypotenuse(3, 4)"
);
console.log(
  calculateHypotenuse(9, 9),
  12.728,
  "Failed for calculateHypotenuse(9, 9)"
);

// Invalid
console.log(
  calculateHypotenuse(-2, 1),
  undefined,
  undefined,
  "calculateHypotenuse(-2,1) should throw an error"
);
console.log(
  calculateHypotenuse(2, -3),
  undefined,
  undefined,
  "calculateHypotenuse(2,-3) should throw an error"
);
console.log(
  calculateHypotenuse(9, 0),
  undefined,
  undefined,
  "calculateHypotenuse(9,0) should throw an error"
);
console.log(
  calculateHypotenuse("one", 1),
  undefined,
  undefined,
  "calculateHypotenuse('one',1) should throw an error"
);
console.log(
  calculateHypotenuse(3, "two"),
  undefined,
  undefined,
  "calculateHypotenuse(3,'two') should throw an error"
);
console.log(
  calculateHypotenuse(3),
  undefined,
  undefined,
  "calculateHypotenuse(3) should throw an error"
);
console.log(
  calculateHypotenuse(),
  undefined,
  undefined,
  "calculateHypotenuse() should throw an error"
);
console.log(
  calculateHypotenuse(true, 4),
  undefined,
  undefined,
  "calculateHypotenuse(true,4) should throw an error"
);
console.log(
  calculateHypotenuse(2, false),
  undefined,
  undefined,
  "calculateHypotenuse(2,false) should throw an error"
);
console.log(
  calculateHypotenuse(NaN, 5),
  undefined,
  undefined,
  "calculateHypotenuse(NaN,5) should throw an error"
);
console.log(
  calculateHypotenuse(6, NaN),
  undefined,
  undefined,
  "calculateHypotenuse(6,NaN) should throw an error"
);
