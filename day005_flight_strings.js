///////////////////////////////////////
// String Methods Practice

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

for (let flight of flights.split("+")) {
  let [status, from, to, time] = flight.slice(1).split(";");
  if (status.startsWith("Delayed")) status = "🔴 " + status.replace("_", " ");
  from = from.toUpperCase().replace(from.slice(3), "");
  to = to.toUpperCase().replace(to.slice(3), "");
  time = time.replace(":", "h");

  console.log(`${status} from ${from} to ${to} (${time})`.padStart(45));
}

// OUTPUT:
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
