/*
After yet another dispute on their game the Bingo Association decides to change 
course and automate the game.

Can you help the association by writing a method to create a random Bingo card?

Bingo Cards
A Bingo card contains 24 unique and random numbers according to this scheme:

5 numbers from the B column in the range 1 to 15
5 numbers from the I column in the range 16 to 30
4 numbers from the N column in the range 31 to 45
5 numbers from the G column in the range 46 to 60
5 numbers from the O column in the range 61 to 75
Task
Write the function get_card()/getCard(). The card must be returned as an array 
of Bingo style numbers:

[ 'B14', 'B12', 'B5', 'B6', 'B3', 'I28', 'I27', ... ]
The numbers must be in the order of their column: B, I, N, G, O. Within the 
columns the order of the numbers is random.
a bingo card
*/

function getCard() {
  // Getting letters and columns set
  const letters = ["B", "I", "N", "G", "O"];
  let card = [];
  let column = 0;
  // Looping thru each column/letter
  for (let letter of letters) {
    // Adding the random numbers to a set to avoid duplicates
    let columnSet = new Set();
    column++;
    // Looping to get all numbers for each column
    while (columnSet.size < (letter == "N" ? 4 : 5)) {
      // Generating random numbers within each column range
      let number =
        Math.floor(Math.random() * (15 * column - (15 * (column - 1) + 1))) +
        (15 * (column - 1) + 1);
      columnSet.add(`${letter}${number}`);
    }
    // Adding the set to the final "Card"
    card.push(...columnSet);
  }
  return card;
}

console.log(getCard());
