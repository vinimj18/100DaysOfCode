/*
Pete likes to bake some cakes. He has some recipes and ingredients. 
Unfortunately he is not good in maths. Can you help him to find out, how many 
cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available 
ingredients (also an object) and returns the maximum number of cakes Pete can 
bake (integer). For simplicity there are no units for the amounts 
(e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). 
Ingredients that are not present in the objects, can be considered as 0.

Examples:

// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 
*/

function cakes(recipe, available) {
  let cakes = [];
  for (let [ingredient, quantity] of Object.entries(recipe))
    if (ingredient in available) {
      cakes.push(available[ingredient] / quantity);
    } else return 0;
  return Math.floor(Math.min(...cakes));
}

console.log(
  cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
);
console.log(
  cakes(
    { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
    { sugar: 500, flour: 2000, milk: 2000 }
  )
);

const apple_cake = {
  apples: 3,
  flour: 180,
  baking_powder: 3,
  eggs: 3,
  sugar: 1.5,
  lemon: 1,
  butter: 100,
  cinnamon_sugar: 1,
};

const ingredients = {
  apples: 3,
  flour: 900,
  baking_powder: 5,
  eggs: 3,
  sugar: 3,
  lemon: 2,
  butter: 150,
  cinnamon_sugar: 1,
};
console.log(cakes(apple_cake, ingredients));
