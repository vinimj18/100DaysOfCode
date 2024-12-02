/*
The Fibonacci numbers are the numbers in the following integer sequence 
(Fn): 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

such that:

F(0)=1
F(1)=1
F(n)=F(n−1)+F(n−2)

Given a number, say prod (for product), we search two Fibonacci numbers F(n) and 
F(n+1) verifying:
F(n)∗F(n+1)=prod
Your function takes an integer (prod) and returns an array/tuple 
(check the function signature/sample tests for the return type in your language):

if F(n) * F(n+1) = prod:
(F(n), F(n+1), true)
If you do not find two consecutive F(n) verifying F(n) * F(n+1) = prod:
(F(n), F(n+1), false)
where F(n) is the smallest one such as F(n) * F(n+1) > prod.
Examples:
714 ---> (21, 34, true)
--> since F(8) = 21, F(9) = 34 and 714 = 21 * 34

800 --->  (34, 55, false)
--> since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55

*/

function productFib(prod) {
  let fibonacci = [0, 1];
  let i = 0;
  while (true) {
    if (prod == fibonacci[i] * fibonacci[i + 1]) {
      return [fibonacci[i], fibonacci[i + 1], true];
    } else if (
      prod < fibonacci[i] * fibonacci[i + 1] &&
      prod > fibonacci[i] * fibonacci[i - 1]
    ) {
      return [fibonacci[i], fibonacci[i + 1], false];
    } else {
      fibonacci.push(fibonacci[i] + fibonacci[i + 1]);
      i++;
    }
  }
}

console.log(productFib(4895), [55, 89, true]);
console.log(productFib(5895), [89, 144, false]);
console.log(productFib(74049690), [6765, 10946, true]);
console.log(productFib(84049690), [10946, 17711, false]);
console.log(productFib(193864606), [10946, 17711, true]);
console.log(productFib(447577), [610, 987, false]);
console.log(productFib(602070), [610, 987, true]);
