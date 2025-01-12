/*
This is the simple version of Shortest Code series. If you need some challenges,
please try the challenge version.

Task:
Find out "B"(Bug) in a lot of "A"(Apple).

There will always be one bug in apple, not need to consider the situation that
without bug or more than one bugs.

input: string Array apple

output: Location of "B", [x,y]
*/

function sc(apple) {
  x = 0;
  y = 0;
  for (let [i, row] of apple.entries())
    if (row.includes("B")) {
      x = i;
      for (let [j, letter] of row.entries()) if (letter == "B") y = j;
    }
  return [x, y];
}

var apple = [
  ["B", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
];
var answer = [0, 0];
console.log(sc(apple), answer);

apple = [
  ["A", "A", "A", "A", "A"],
  ["A", "B", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
];
answer = [1, 1];
console.log(sc(apple), answer);

apple = [
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "B", "A", "A", "A"],
];
answer = [4, 1];
console.log(sc(apple), answer);
