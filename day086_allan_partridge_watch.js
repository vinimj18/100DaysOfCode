/*
Backstory

To celebrate today's launch of my Hero's new book: Alan Partridge: Nomad, We 
have a new series of kata arranged around the great man himself.

Task
Given an array of terms, if any of those terms relate to Alan Partridge, return 
Mine's a Pint!

The number of exclamation mark (!) after the t should be determined by the 
number of Alan related terms you find in the given array (x). The related terms 
are as follows:

Partridge
PearTree
Chat
Dan
Toblerone
Lynn
AlphaPapa
Nomad
If you don't find any related terms, return 
Lynn, I've pierced my foot on a spike!!

Other katas in this series:
Alan Partridge II - Apple Turnover
Alan Partridge III - London
*/

function part(x) {
  allanTerms = [
    "Partridge",
    "PearTree",
    "Chat",
    "Dan",
    "Toblerone",
    "Lynn",
    "AlphaPapa",
    "Nomad",
  ];
  let count = 0;

  for (term of x) {
    if (allanTerms.includes(term)) count++;
  }

  return count == 0
    ? `Lynn, I've pierced my foot on a spike!!`
    : `Mine's a Pint${"!".repeat(count)}`;
}

// Test Cases

console.log(part(["Grouse", "Partridge", "Pheasant"]), "Mine's a Pint!");
console.log(
  part(["Pheasant", "Goose", "Starling", "Robin"]),
  "Lynn, I've pierced my foot on a spike!!"
);
console.log(
  part([
    "Grouse",
    "Partridge",
    "Pheasant",
    "Goose",
    "Starling",
    "Robin",
    "Thrush",
    "Emu",
    "PearTree",
    "Chat",
    "Dan",
    "Square",
    "Toblerone",
    "Lynn",
    "AlphaPapa",
    "BMW",
    "Graham",
    "Tool",
    "Nomad",
    "Finger",
    "Hamster",
  ]),
  "Mine's a Pint!!!!!!!!"
);
