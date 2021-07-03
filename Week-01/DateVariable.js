console.log("CURRENT AND PAST DATE.")
console.log("----------------------");
const today=new Date();
const yesterday = new Date(today)
console.log("Date format:", today);

yesterday.setDate(yesterday.getDate() - 1)
console.log("Date format:", yesterday);


