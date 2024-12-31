/*
The "Roulette wheel selection", also known as "Fitness proportionate selection", 
is a genetic operator used in genetic algorithms for selecting potentially 
useful solutions for recombination.

Your task is to implement it.

You throw a coin in and has a chance to fall in one of the slots, the higher the 
fitness the higher the chance the element has to be selected.

Given the population and fitnesses, your task is to run the roulette to return 
one element.

Note: Some tests are random. If you think your algorithm is correct but the 
result fails, trying again should work.
*/

const select = (population, fitnesses) => {
  let newFitness = 0;
  for (let [i, fitness] of fitnesses.entries()) {
    newFitness += i == 0 ? 0 : fitnesses[i - 1];
    if (fitness + newFitness >= Math.random()) return population[i];
  }
};

const population = [1, 2, 3];
const fitnesses = [0.05, 0.05, 0.9];
console.log(select(population, fitnesses));
