console.log("CHECKING STRING NUMERIC.");
console.log("------------------------")
function isNumeric(num){

    return !isNaN(num)
  }
  
  console.log(isNumeric(123));      
  console.log(isNumeric('123'));
  console.log(isNumeric('1e9876')); 
  console.log(isNumeric('hi'));     
  console.log(isNumeric('rrr'));  
