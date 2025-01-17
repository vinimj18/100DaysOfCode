/*
You and your best friend Stripes have just landed your first high school jobs!
You'll be delivering newspapers to your neighbourhood on weekends.
For your services you'll be charging a set price depending on the quantity of
the newspaper bundles.

The cost of deliveries is:

$3.85 for 40 newspapers
$1.93 for 20
$0.97 for 10
$0.49 for 5
$0.10 for 1
Stripes is taking care of the footwork doing door-to-door drops and your job is
to take care of the finances. What you'll be doing is providing the cheapest
possible quotes for your services.

Write a function that's passed an integer representing the amount of newspapers
and returns the cheapest price. The returned number must be rounded to two
decimal places.
*/

function cheapestQuote(newspapers) {
  // Listing the bundles and their prices
  const bundles = [
    [40, 3.85],
    [20, 1.93],
    [10, 0.97],
    [5, 0.49],
    [1, 0.1],
  ];
  // Setting the price accumulator
  let totalPrice = 0;

  // Checking for each bundle price how many bundles we can make out of it
  for (let bundle of bundles) {
    let bundleFit = Math.floor(newspapers / bundle[0]);
    // Adding the bundles to the final price
    totalPrice += bundleFit * bundle[1];
    // Removing the previous bundle from the total newspapers amount
    newspapers -= bundleFit * bundle[0];
  }

  return Math.floor(totalPrice * 100) / 100;
}

// Test Cases
console.log(cheapestQuote(40), 3.85);
console.log(cheapestQuote(20), 1.93);
console.log(cheapestQuote(10), 0.97);
console.log(cheapestQuote(5), 0.49);
console.log(cheapestQuote(1), 0.1);

console.log(
  cheapestQuote(41),
  3.95,
  "41 newspapers should be priced as 40 bundle and a 1 bundle"
);
console.log(
  cheapestQuote(80),
  7.7,
  "80 newspapers should be priced as two 40 bundles"
);
console.log(
  cheapestQuote(26),
  2.52,
  "26 newspapers should be priced as a 20 bundle, a 5 bundle and a 1 bundle"
);
