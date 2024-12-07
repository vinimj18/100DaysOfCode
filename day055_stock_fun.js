/*
Task
John wants to be the God of stocks.

After a rigorous calculation, John bought a stock. He knew that the stock would 
change from the day he bought the stock:

The first day remains the same; 
On the second day, the stock rose;
On the third day, the stock fell;
On the next two days(4th and 5th), the stock rose;
On the 6th day, the stock fell;
On the next three days(7th, 8th and 9th), the stock rose;
On the 10th day, the stock fell;
and so on..
In order to facilitate the calculation, assume that every rise and fall are $1, 
the initial stock price is $1, your task is to calculate the stock price of 
John's stock at nth day(1-based).

Input/Output
[input] integer n

The nth day(1-based).

1 ≤ n ≤ 10^9

[output] an integer

The stock price of John's stock at nth day.

Example
For n = 1, the output should be 1

For n = 2, the output should be 2

For n = 3, the output should be 1

For n = 4, the output should be 2

For n = 5, the output should be 3

For n = 10, the output should be 4

For n = 15, the output should be 7

Look at the following to see the changes of stock price:

      day: 1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 ...
rise/fall: 0 +1 -1 +1 +1 -1 +1 +1 +1 -1 +1 +1 +1 +1 -1 ...
    price: 1  2  1  2  3  2  3  4  5  4  5  6  7  8  7 ...
*/

function stockPrice(n) {
  // Setting the first cycle
  let cycles = 1;
  // Initial amount is 0 because the first cycle sets it to 1
  let initial = 0;

  // Adding values until the cycle finishes at -1
  while (n > cycles + 1) {
    initial += cycles - 1;
    cycles++;
    n -= cycles;
  }
  // Adding the remaining values that could not fit in a whole cycle
  return initial + n;
}

// console.log(stockPrice(1), 1);
console.log(stockPrice(2), 2);
console.log(stockPrice(3), 1);
console.log(stockPrice(4), 2);
console.log(stockPrice(5), 3);
console.log(stockPrice(10), 4);
console.log(stockPrice(15), 7);
console.log(stockPrice(100), 76);
console.log(stockPrice(1000), 914);
