/* prettier-ignore-file */
/*Task:
Write a function that determines the century by the number(year) passed to it. 
Your function must be shorter than 75 characters. Please see the test cases below.

If you can't solve this kata, please try solving Simple Version

Note:
Math methods ( ceil, round, floor ) disabled.
The input values can be from 1 to 99999999.
This kata has several solutions!
Examples:
Year	Century
1	1st
101	2nd
201	3rd
1000	10th
1001	11th
1101	12th
1201	13th
1301	14th
2000	20th
2001	21st
3101	32nd
4201	43rd
5301	54th
220000	2200th
220001	2201st
220101	2202nd
220201	2203rd
220301	2204th
*/

ws=y=>(c=(y+99)/100|0)+["th","st","nd","rd"][c%10<4&(c/10|0)%10!=1?c%10:0]

// Test Cases
console.log(
  `ws=y=>(c=(y+99)/100|0)+["th","st","nd","rd"][c%10<4&(c/10|0)%10!=1?c%10:0]`
    .length
);

console.log(ws(1), "1st");
console.log(ws(101), "2nd");
console.log(ws(201), "3rd");
console.log(ws(301), "4th");

console.log(ws(1000), "10th");
console.log(ws(1001), "11th");
console.log(ws(1101), "12th");
console.log(ws(1201), "13th");
console.log(ws(1301), "14th");

console.log(ws(2000), "20th");
console.log(ws(2001), "21st");
console.log(ws(3101), "32nd");
console.log(ws(4201), "43rd");
console.log(ws(5301), "54th");

console.log(ws(220000), "2200th");
console.log(ws(220001), "2201st");
console.log(ws(220101), "2202nd");
console.log(ws(220201), "2203rd");
console.log(ws(220301), "2204th");
console.log(ws(221001), "2211th");

