/*
Two fishing vessels are sailing the open ocean, both on a joint ops fishing 
mission.

On a high stakes, high reward expidition - the ships have adopted the strategy 
of hanging a net between the two ships.

The net is 40 miles long. Once the straight-line distance between the ships is 
greater than 40 miles, the net will tear, and their valuable sea harvest will be 
lost! We need to know how long it will take for this to happen.

Given the bearing of each ship, find the time in minutes at which the 
straight-line distance between the two ships reaches 40 miles. Both ships travel 
at 90 miles per hour. At time 0, assume the ships have the same location.

Bearings are defined as degrees from north, counting clockwise. These will be 
passed to your function as integers between 0 and 359 degrees. Round your result 
to 2 decmal places.

If the net never breaks, return float('inf')

Happy sailing!
*/

function findTimeToBreak(bearingA, bearingB) {
  //   Getting the degree difference between the boats
  let degrees = Math.abs(bearingB - bearingA);
  if (degrees == 0) return Infinity;
  if (degrees > 180) {
    degrees = 360 - degrees;
  }

  // Converting degrees to radians
  let radians = degrees * (Math.PI / 180);

  //   Calculate the time it takes for the chord to reach 40 miles
  let time = 40 / (2 * Math.sin(radians / 2) * 90);

  return Math.round(time * 60 * 100) / 100;
}

// Test Cases
// "Should handle basic case"
console.log(findTimeToBreak(0, 90), 18.86, 0.01, "(0, 90)");

// "Should handle opposite directions"
console.log(findTimeToBreak(270, 90), 13.33, 0.01, "(270, 90)");

// "Should handle if the net doesn't break"
console.log(findTimeToBreak(90, 90), Infinity, "(90, 90)");
console.log(findTimeToBreak(70, 143), 22.42, "(70, 143)");
