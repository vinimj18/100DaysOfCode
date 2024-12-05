function whatCentury(year) {
  // Calculating the century
  let century = 0;
  if (year % 100 === 0) century = Math.floor(year / 100);
  else century = Math.floor(year / 100 + 1);

  // Building the ordinal string
  const sufix = ["th", "st", "nd", "rd"];
  return century + (sufix[(century - 20) % 10] || sufix[century] || sufix[0]);
}

console.log(whatCentury("1999"), "20th");
console.log(whatCentury("2011"), "21st");
console.log(whatCentury("2154"), "22nd");
console.log(whatCentury("2259"), "23rd");
console.log(whatCentury("1234"), "13th");
console.log(whatCentury("1023"), "11th");
console.log(whatCentury("2000"), "20th");
console.log(whatCentury("205"), "3rd");
