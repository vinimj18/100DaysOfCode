/*
How much bigger is a 16-inch pizza compared to an 8-inch pizza? A more pragmatic 
question is: How many 8-inch pizzas "fit" in a 16-incher?

The answer, as it turns out, is exactly four 8-inch pizzas. For sizes that don't 
correspond to a round number of 8-inchers, you must round the number of slices 
(one 8-inch pizza = 8 slices), e.g.:

how_many_pizzas(16) -> "pizzas: 4, slices: 0"
how_many_pizzas(12) -> "pizzas: 2, slices: 2"
how_many_pizzas(8) -> "pizzas: 1, slices: 0"
how_many_pizzas(6) -> "pizzas: 0, slices: 4"
how_many_pizzas(0) -> "pizzas: 0, slices: 0"
Get coding quick, so you can choose the ideal size for your next meal!
*/

function howManyPizzas(n) {
  // Getting Area of input pizza
  const area = Math.PI * (n / 2) ** 2;
  // Getting area of 8in pizza
  const eightInchArea = Math.PI * (8 / 2) ** 2;
  // Calculating whole pizzas
  const pizzas = Math.floor(area / eightInchArea);
  // Calculating extra slices given 8 slices per pizza
  const slices = Math.ceil((area / eightInchArea - pizzas) * 8);
  // Returning the string
  return `pizzas: ${pizzas}, slices: ${slices}`;
}

console.log(howManyPizzas(16), [4, 0]);
console.log(howManyPizzas(12), [2, 2]);
console.log(howManyPizzas(8), [1, 0]);
console.log(howManyPizzas(6), [0, 5]);
console.log(howManyPizzas(0), [0, 0]);
console.log(howManyPizzas(79086), [97728053, 1]);
