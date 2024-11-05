/*
Write a function that when given a URL as a string, parses out just the domain 
name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/

// function domainName(url) {
//   const begining = url.slice(url.search(/(?<=www\.|https?:\/\/)/));
//   const ending = url.slice(url.search(/\.(?=[a-z]{1,3}(?![a-z]))/));
//   return begining.replace(ending, "");
// }

function domainName(url) {
  if (url.includes("www")) return url.split(".")[1];
  else if (url.startsWith("http")) return url.split("//")[1].split(".")[0];
  else return url.split(".")[0];
}

function domainName2(url) {
  return url.replace(/(https?:\/\/)?(www\.)?/, "").split(".")[0];
}

console.log(domainName("http://google.com"));
console.log(domainName2("http://google.com"));
console.log(domainName("http://google.co.jp"));
console.log(domainName2("http://google.co.jp"));
console.log(domainName("www.xakep.ru"));
console.log(domainName2("www.xakep.ru"));
console.log(domainName("https://youtube.com"));
console.log(domainName2("https://youtube.com"));
console.log(domainName("https://www.cnet.com"));
console.log(domainName2("https://www.cnet.com"));
console.log(domainName("http://www.zombie-bites.com"));
console.log(domainName2("http://www.zombie-bites.com"));
console.log(domainName("http://github.com/carbonfive/raygun"));
console.log(domainName2("http://github.com/carbonfive/raygun"));
