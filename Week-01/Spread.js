console.log("SPREAD OPERATOR IN OBJECT.");
console.log("--------------------------")
const names = ["Dev","Shilpa","Alya"];

const cities = ["Trichy","Hyderabad","Madurai",names];

const newCities = ["Trichy","Hyderabad","Madurai",...names];

console.log(names);
console.log(cities);
console.log(newCities);


function addData(...value){
    let a = 0 ;
    for(let i = 0;i<value.length;i++){
        a=a+value[i];
    }
    return a;
}

console.log(addData(20,40,60,80,100));

const person1 = {
    Name : "XXX",  
    Email : "xxx@gmail.com"
}

const person2 = {
    Name : "YYY",
    Email : "yyy@gmail.com"
}

const person3 = {
    Name : "Deepa"
    
}

let student = [
    {Name:"YYY",age:67},
    {Name:"Deepa",age:89}
];

const items = {
    cost:67,
    ...person1,
    ...student,
    ...person2,
    ...person3
}

items.cost = 222;

console.log(items);