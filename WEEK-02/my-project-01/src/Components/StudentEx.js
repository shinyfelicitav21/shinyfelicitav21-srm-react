import React,{useState} from 'react'
import StudentFunction from './StudentFunction';
export default function StudentEx() {
    const[student,setStudent]=useState(
        {
          sid:' ',
          sname:" ",
          splace:" ",
          smark:'',
        }
      );
    
      const handleOnchange=(event)=>
      {
        const {name,value} = event.target;
            
        setStudent((prev) => {
            return {
                ...prev,
                [name]:value
            }
        })
      
      }
      const handleButtonOnClick=(e)=>
      {
        e.preventDefault();
        let sid=setStudent.sid;
        let sname=setStudent.sname;
        let splace=setStudent.splace;
        let smark=setStudent.smark;
        setStudent((prev)=>
        {
          return{
            ...prev,
          sid:prev.sid,
          sname:prev.sname,
          splace:prev.splace,
          smark:prev.smark,
          }
        });
        console.log(student);
      }
    return (
        <div className="center">
            <form className ="form" onClick={handleButtonOnClick}>
                <table>
                <th>STUDENT VIEW.</th>
                    <tr >
                        <td><input type="text" name="sid" value={student.sid} onChange={handleOnchange} /></td> </tr>
                        <tr> <td><input type="text" name="sname" value={student.sname} onChange={handleOnchange}/></td> </tr>
                        <tr> <td><input type="text"  name="splace" value={student.splace} onChange={handleOnchange}/></td> </tr>
                        <tr> <td><input type="text" name="smark" value={student.smark} onChange={handleOnchange}/></td> </tr>
                        <button onClick={handleButtonOnClick}>SUBMIT</button>
                      <StudentFunction sname={student.sname} sid={student.sid} splace={student.splace} smark={student.smark}/>
                    
                    
                </table>
            </form>
        </div>
    )
}
