/*You need to write regex that will validate a password to make sure it meets the 
following criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a digit
only contains alphanumeric characters (note that '_' is not alphanumeric)*/

// assign your RegExp to REGEXP:
const REGEXP = /[0-9a-zA-Z]/;

console.log(REGEXP.test("123456"));
console.log(REGEXP.test("abcdef"));
console.log(REGEXP.test("ABCDEF"));
