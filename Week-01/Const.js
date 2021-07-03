console.log("USAGE OF ARRAY MANIPULATION.");
console.log("----------------------------");
let subjects=["Maths","English","Commerce","History"];

subjects[3]="French";
console.log("");
console.log(subjects);
console.log("");

subjects.push("Music");
console.log(subjects);
console.log("");

subjects[0]="Literacy";
console.log(subjects);
console.log("");

subjects.pop();
console.log(subjects);
console.log("");

subjects.pop();
console.log(subjects);
subjects.push("Art");

console.log("");
console.log(subjects);