/*
In a genetic algorithm, a population is a collection of candidates that may 
evolve toward a better solution.

We determine how close a chromosome is to a ideal solution by calculating its 
fitness. https://www.codewars.com/kata/567b468357ed7411be00004a/train You are 
given two parameters, the population containing all individuals and a 
function fitness that determines how close to the solution a chromosome is.

Your task is to return a collection containing an object with the chromosome and 
the calculated fitness.

[
  { chromosome: c, fitness: f },
  { chromosome: c, fitness: f },
  ...
]
*/

const population = [
  "11001111",
  "01110001",
  "00010011",
  "01101100",
  "00110101",
  "00110011",
  "01011000",
  "11101001",
  "11101101",
  "10001100",
  "01100101",
  "01000001",
  "01010000",
  "00000000",
  "11110111",
  "01100000",
  "11110011",
  "10101110",
  "10101100",
  "11101010",
  "10011000",
  "01100001",
  "00101001",
  "11101000",
  "11011101",
  "00110111",
  "00111011",
  "10100100",
  "11101100",
  "01111011",
  "00001010",
  "10010010",
  "11101000",
  "00110000",
  "01000010",
  "10100110",
  "10011101",
  "11110000",
  "00100010",
  "11001010",
  "11010001",
  "00010110",
  "10110011",
  "00111000",
  "10111010",
  "10000100",
  "11101011",
  "01001111",
  "01101101",
  "00101110",
  "11010110",
  "11100110",
  "10010011",
  "00110100",
  "11011111",
  "00111100",
  "01011011",
  "11101100",
  "01110101",
  "11010111",
  "00101000",
  "00100110",
  "11001010",
  "10011011",
  "01000011",
  "00101111",
  "01110110",
  "10011110",
  "11011101",
  "10011110",
  "00001101",
  "01101100",
  "01110111",
  "00111101",
  "00000011",
  "00111001",
  "10000011",
  "01000110",
  "01011101",
  "01110011",
  "10011011",
  "10000110",
  "10101111",
  "10111100",
  "00011010",
  "11100101",
  "01110101",
  "00000110",
  "11111000",
  "10000110",
  "01001000",
  "11111100",
  "11010000",
  "10011101",
  "01001100",
  "01101011",
  "11010110",
  "11011100",
  "01000101",
  "01110000",
];

const fitness = (c) => {
  const ideal = "11110000";
  let r = 0;
  for (let i = 0; i < c.length; ++i) {
    if (c[i] === ideal[i]) {
      r++;
    }
  }
  return r / ideal.length;
};

const mapPopulationFit = (population, fitness) => {
  return population.map((chromosome) => ({
    chromosome,
    fitness: fitness(chromosome),
  }));
};

console.log(mapPopulationFit(population, fitness));
