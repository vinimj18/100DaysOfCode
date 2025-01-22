/*
Task

In the summer night sky, we hope to be able to enjoy the beautiful fireworks. This time the fireworks show that you are responsible for the release of fireworks. You should be careful to calculate the speed and position of the release, to ensure that the most beautiful effect.

Rules
Give you a map like this:

"       \n"+
" o o o \n"+
"       \n"+
"       \n"+
"       "

The char o is the postion of fireworks. You need to calculate the two parameters
of each fireworks bomb: the release position and the release speed.

The release position is the number of fireworks in the column, starting from 0.

the release speed unit is meter/second. In map, the height of each row is 5
meter. All fireworks need to explode 4 seconds after the launch. In the above
example, three firewoks height is 20 meters, so the release speed of each
fireworks is 5 m/s(should round to two decimals)

Finally, you should return an array like this:

[[1,5],[3,5],[5,5]]
The return order should be from left to right, from high to low(Priority of from
left to right is higher than from high to low).
*/

function releaseFireworks(map) {
  // Split the map to know how many levels the map has and also to
  // break it down and make it easier to iterate over
  const mapList = map.split("\n");
  //   Create a blank arr to store the values generated
  let firewoks = [];
  // Create the total height of the map
  const totalHeight = mapList.length;

  // Iterate on map
  for (let [i, level] of mapList.entries()) {
    // Iterate on each level of map to find if there is a firework
    for (let [position, char] of level.split("").entries()) {
      // If there is, create an arr with the position + the speed of each
      // firework
      if (char == "o") {
        // The formula for the speed is derived from d = s * t
        firewoks.push([position, ((totalHeight - i) / 4) * 5]);
      }
    }
  }
  //  return the sorted fireworks array
  return firewoks.sort((a, b) => {
    // Sort by the first value in ascending order
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    // If the first values are equal, sort by the second value in descending order
    return b[1] - a[1];
  });
}

//   Test Cases
var map = "       \n" + " o o o \n" + "       \n" + "       \n" + "       ";

var youranswer = releaseFireworks(map);

console.log(youranswer, "--------------------------------------", [
  [1, 5],
  [3, 5],
  [5, 5],
]);

var map = "       \n" + " o o o \n" + "   o   \n" + "       \n" + "       ";

var youranswer = releaseFireworks(map);

console.log(youranswer, "--------------------------------------", [
  [1, 5],
  [3, 5],
  [3, 3.75],
  [5, 5],
]);

var map =
  "     o  o \n" +
  " ooo o o  \n" +
  " o o oo   \n" +
  " o o o o  \n" +
  " ooo o  o \n" +
  "          ";

var youranswer = releaseFireworks(map);

console.log(youranswer, "--------------------------------------", [
  [1, 6.25],
  [1, 5],
  [1, 3.75],
  [1, 2.5],
  [2, 6.25],
  [2, 2.5],
  [3, 6.25],
  [3, 5],
  [3, 3.75],
  [3, 2.5],
  [5, 7.5],
  [5, 6.25],
  [5, 5],
  [5, 3.75],
  [5, 2.5],
  [6, 5],
  [7, 6.25],
  [7, 3.75],
  [8, 7.5],
  [8, 2.5],
]);
