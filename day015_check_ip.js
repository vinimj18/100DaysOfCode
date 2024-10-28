/*Write an algorithm that will identify valid IPv4 addresses in dot-decimal 
format. IPs should be considered valid if they consist of four octets, with 
values between 0 and 255, inclusive.

Valid inputs examples:
Examples of valid inputs:
1.2.3.4
123.45.67.89
Invalid input examples:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
Notes:
Leading zeros (e.g. 01.02.03.04) are considered invalid
Inputs are guaranteed to be a single string
*/

//Steps:
//1 - Split string
//2 - Define Rules:
//  . Have 4 octets
//  . Cannot begin with 0
//  . Must be a value between 0 and 255

function isValidIP(str) {
  const octets = str.split(".");
  if (octets.length !== 4) return false;
  const regexp = /^(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?|0)$/;
  for (const octet of octets)
    if (regexp.test(octet)) continue;
    else return false;
  return true;
}

console.log(isValidIP("0.0.0.0"));
console.log(isValidIP("12.255.56.1"));
console.log(isValidIP("137.255.156.100"));
console.log(isValidIP(""));
console.log(isValidIP("abc.def.ghi.jkl"));
console.log(isValidIP("123.456.789.0"));
console.log(isValidIP("12.34.56"));
console.log(isValidIP("01.02.03.04"));
console.log(isValidIP("256.1.2.3"));
console.log(isValidIP("1.2.3.4.5"));
console.log(isValidIP("123,45,67,89"));
console.log(isValidIP("1e0.1e1.1e2.2e2"));
console.log(isValidIP(" 1.2.3.4"));
console.log(isValidIP("1.2.3.4 "));
console.log(isValidIP("12.34.56.-7"));
console.log(isValidIP("1.2.3.4\n"));
console.log(isValidIP("\n1.2.3.4"));
