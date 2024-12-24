/*
Task
Christmas is coming, and your task is to build a custom Christmas tree with the 
specified characters and the specified height.

Inputs:
chars: the specified characters.
n: the specified height. A positive integer greater than 2.
Output:
A multiline string. Each line is separated by \n. A tree contains two parts: 
leaves and trunks.
The leaves should be n rows. The first row fill in 1 char, the second row fill 
in 3 chars, and so on. A single space will be added between two adjust chars, 
and some of the necessary spaces will be added to the left side, to keep the 
shape of the tree. No space need to be added to the right side.

The trunk should be at least 1 unit height, it depends on the value of the n. 
The minimum value of n is 3, and the height of the tree trunk is 1 unit height. 
If n increased by 3, and the tree trunk increased by 1 unit. For example, when 
n is 3,4 or 5, trunk should be 1 row; when n is 6,7 or 8, trunk should be 2 row; 
and so on.

Still not understand the task? Look at the following example ;-)

Examples
For chars = "*@o" and n = 3,the output should be:
*/

function customChristmasTree(chars, n) {
  // OPENING THE DECORATION BOX
  // Splitting chars into a list with exact tree length
  const charsList = chars.split("");
  let tree = [];
  const treeLen = (1 + n) * (n / 2);
  for (let i = 0; i < treeLen; i++) {
    tree.push(charsList[i % charsList.length]);
  }
  // PUTTING UP THE TREE
  // Joining characters into lines representing the tree levels
  putUpTree = "";
  let startInd = 0;
  for (let length = 1; startInd < tree.length; length++) {
    putUpTree += `${" ".repeat(n - length)}${tree
      .slice(startInd, startInd + length)
      .join(" ")}\n`;
    startInd += length;
  }

  // Addint the trunk
  let trunk = "";
  for (k = Math.floor(n / 3); k >= 1; k--) {
    trunk += `${" ".repeat(n - 1)}${k == 1 ? "|" : "|\n"}`;
  }

  // Returning the tree + trunk
  return putUpTree + trunk;
}

// Test Cases
console.log(customChristmasTree("*@o", 3));

console.log(customChristmasTree("*@o", 6));

console.log(customChristmasTree("1234", 6));

console.log(customChristmasTree("123456789", 3));
