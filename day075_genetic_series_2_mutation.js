/*
Mutation is a genetic operator used to maintain genetic diversity from one 
generation of a population of genetic algorithm chromosomes to the next.

Mutation

A mutation here may happen on zero or more positions in a chromosome. It is 
going to check every position and by a given probability it will decide if a 
mutation will occur.

A mutation is the change from 0 to 1 or from 1 to 0.

Note: Some tests are random. If you think your algorithm is correct but the 
result fails, trying again should work.
*/

const mutate = (chromosome, p) => {
  // make chromosome string into a list
  let chromosomeList = chromosome.split("");
  // for each gene check if it will mutate
  for (let [i, gene] of chromosomeList.entries()) {
    // if it mutates, change 0 for 1 and 1 for 0
    if (Math.floor(Math.random() + p))
      chromosomeList[i] = gene == "1" ? "0" : "1";
  }
  // return the joined list
  return chromosomeList.join("");
};

// Test Cases
console.log(mutate("0000", 1), "one");
console.log(mutate("1111", 1), "zero");
console.log(mutate("0000", 0), "zero");
console.log(mutate("1111", 0), "one");
console.log(mutate("0000", 0.5));
console.log(mutate("1111", 0.5));

// const probability = 0.0;
// randomNumbers = [];
// for (let i = 1; i <= 1000; i++) {
//   randomNumbers.push(Math.floor(Math.random() + probability));
// }
// // console.log(randomNumbers);
// console.log(randomNumbers.filter((item) => item === 1).length);
