
let students= [

    {ID:202,Name:'Shiny',City:'Trichy',Marks:85},
    {ID:101,Name:'Sweety',City:'Kovai',Marks:99},
    {ID:300,Name:'Sharon',City:'Chennai',Marks:76},
    {ID:505,Name:'Sanju',City:'Bangalore',Marks:76},
   ]

  students.sort(function (x, y) {

    let a = x.Name.toUpperCase(),
        b = y.Name.toUpperCase();
        c = x.City.toUpperCase(),
        d = y.City.toUpperCase();

   return a && c == b && d ? 0 : a && c > b && d ? 1 : -1;

  
  });

console.table(students);