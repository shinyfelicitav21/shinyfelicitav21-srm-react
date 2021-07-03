console.log("STRING ELEMENTS.");
console.log("----------------");

let names=["Shiny","Sweety","Sam","Raj","Vishnu"];
const newarr=names.map((ele,idx)=>
{
    if(idx % 2 ==0)
    {
        return `Er.${ele}`;
    }
    else{
        return `Dr.${ele}`;
    }

}).map((x)=> {
    if (x.startsWith("Dr")){
        return `${x}.San`;
    } else { 
        return x
    }
})

console.table(newarr);
