var firstnames = [
  "Emily",
  "Michael",
  "Jessica",
  "Matthew",
  "Ashley",
  "Jacob",
  "Sara",
  "Christopher",
  "Samantha",
  "Joshua",
  "Taylor",
  "Nicholas",
  "Hannah",
  "Tyler",
  "Alexis",
  "Brandon",
  "Rachel",
  "Austin",
  "Elizabeth",
  "Andrew",
];

var lastnames = [
  "Smith",
  "Johnson",
  "Williams",
  "Jones",
  "Brown",
  "Davis",
  "Miller",
  "Wilson",
  "Moore",
  "Taylor",
  "Anderson",
  "Thomas",
  "Jackson",
  "White",
  "Harris",
  "Martin",
  "Thompson",
  "Garcia",
  "Martinez",
  "Robinson",
];

pm.variables.set("firstname", firstnames[_.random(firstnames.length - 1)]);
pm.variables.set("lastname", lastnames[_.random(lastnames.length - 1)]);

pm.globals.set("totalPrice", _.random(50, 250));
pm.globals.set("depositPaid", _.random(1) === 1);

const moment = require("moment");
var checkin = moment().add("days", _.random(1, 180));
pm.variables.set("checkin", checkin.format("YYYY-MM-DD"));

var checkout = checkin.add("days", _.random(1, 14));
pm.variables.set("checkout", checkout.format("YYYY-MM-DD"));

var needs = ["breakfast", "lunch", "early checkin", "late checkout", null];
pm.variables.set("additionalneeds", needs[_.random(needs.length - 1)]);

var booking = {
  firstname: pm.variables.get("firstname"),
  lastname: pm.variables.get("flasttname"),
  totalprice: pm.variables.get("totalPrice"),
  depositpaid: pm.variables.get("depositPaid"),
  bookingdates: {
    checkin: pm.variables.get("checkin"),
    checkout: pm.variables.get("checkout"),
  },
  additionalneeds: pm.variables.get("additionalneeds"),
};
pm.variables.set("new_booking", booking);
