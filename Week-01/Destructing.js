console.log("DESTRUCTING USING EXPRESSION.");
console.log("-----------------------------")
let a, b, rest;
[a, b] = [20,40];

console.log(a);
console.log(b);

[a, b, ...rest] = [20,40,60,80,100];

console.log(rest);
