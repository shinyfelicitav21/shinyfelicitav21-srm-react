console.log("USAGE OF MAP AND WEAK MAP.")
console.log("--------------------------")
let map = new Map();

let key1 = "Giri";
let key2 = "Deepi";
let key3 = "Shiny";
let key4 = "Keerthi";

map.set(key1,"Marketing");
map.set(key2,"Admin");
map.set(key3,"Testing");
map.set(key4,"Quality");

key1 = null;

map.forEach((key,value)=>{
  console.log("***--" + key + "," + value);
});
console.log("---------------------------------");

var wmap = new WeakMap();

let val10 = {Value:"Marketing",Name:"Suresh"};
let key10 = {key:1};

let val11 = {Value:"Infrastructure",Name:"Payal"};
let key11 = {key:11};

wmap.set(key10,val10);
wmap.set(key11,val11);

key10 = null;

console.log(wmap.get(key10));
console.log(wmap.get(key11));