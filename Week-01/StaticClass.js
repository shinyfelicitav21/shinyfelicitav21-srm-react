
    console.log("SEACRCHING AND DELETION.");
    let students= [

        {ID:202,Name:'Shiny',City:'Trichy',Marks:85},]
   let search= 'Trichy';
    
    for (let i=students.length-1; i>=0; i--) {
        if (students[i] === search) {
            students.splice(i, 1);
            console.log(students);    
        }
    }