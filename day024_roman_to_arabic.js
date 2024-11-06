/*
Create a function that takes a Roman numeral as its argument and returns its 
value as a numeric decimal integer. You don't need to validate the form of the 
Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number 
to be encoded separately, starting with the leftmost digit and skipping any 0s.
So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered 
"MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", 
uses each letter in descending order.

M 1000
D 500
C 100
L 50
X 10
V 5
I 1

*/

function solution(roman) {
  const romanArr = roman.split("");
  let sum = 0;
  for (let [i, letter] of romanArr.entries()) {
    // M 1000
    if (letter == "M" && romanArr[i - 1] == "C") sum += 900;
    else if (letter == "C" && romanArr[i + 1] == "M") sum += 0;
    else if (letter == "M") sum += 1000;
    // D 500
    else if (letter == "D" && romanArr[i - 1] == "C") sum += 400;
    else if (letter == "C" && romanArr[i + 1] == "D") sum += 0;
    else if (letter == "D") sum += 500;
    // C 100
    else if (letter == "C" && romanArr[i - 1] == "X") sum += 90;
    else if (letter == "X" && romanArr[i + 1] == "C") sum += 0;
    else if (letter == "C") sum += 100;
    // L 50
    else if (letter == "L" && romanArr[i - 1] == "X") sum += 40;
    else if (letter == "X" && romanArr[i + 1] == "L") sum += 0;
    else if (letter == "L") sum += 50;
    // X 10
    else if (letter == "X" && romanArr[i - 1] == "I") sum += 9;
    else if (letter == "I" && romanArr[i + 1] == "X") sum += 0;
    else if (letter == "X") sum += 10;
    // V 5
    else if (letter == "V" && romanArr[i - 1] == "I") sum += 4;
    else if (letter == "I" && romanArr[i + 1] == "V") sum += 0;
    else if (letter == "V") sum += 5;
    // I 1
    else if (letter == "I") sum += 1;
  }
  return sum;
}

console.log(solution("XXI"), 21);
console.log(solution("IX"), 9);
console.log(solution("I"), 1);
console.log(solution("IV"), 4);
console.log(solution("MMVIII"), 2008);
console.log(solution("MDCLXVI"), 1666);
console.log(solution("MCDLXVI"), 1466);
console.log(solution("MMDXCVIII"), 2598);
