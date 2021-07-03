console.log("USAGE OF VAR AND LET.");
console.log("----------------------");
var name1 = "Hello";  
var num = 10;  
if (num > 5) {    
   var name1 = "Welcome Here.";   
}  
console.log(name1)

let name2 = "Hello";  
let num1 = 10;  
if (num1 > 5) {  
   let name2 = "Welcome Here.";   
   console.table(name2)   
}  
console.log(name2) // Compile error: name1 is not defined  