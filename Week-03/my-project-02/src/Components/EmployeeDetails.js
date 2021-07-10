import React, { useState } from 'react'

import EmployeeEx from './EmployeeEx';

export default function EmployeeDetails() {

  const [emp, setEmp] = useState(
    {
      eid: ' ',
      ename: " ",
      edesgn: '',
      edept: '',
      eplace: " ",
      ephno: '',
    }
  );
  const [res, setRes] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const handleOnchange = (event) => {
    const { name, value } = event.target;

    setEmp((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })

  }
  const handleDoSubmit = (e) => {
    e.preventDefault();
    
setSubmitted(true);
    console.log(emp);
    console.log("Submitted");
  
  // const handleButtonOnClick = (e) => {
  //   e.preventDefault();
    // let eid=setEmp.eid;
    // let ename=setEmp.ename;
    // let edesgn=setEmp.edesgn;
    // let edept=setEmp.edept;
    // let eplace=setEmp.place;
    // let ephno=setEmp.ephno;



    const reqOptios = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(emp)
    };

    fetch("http://localhost:3000/emp",reqOptios).then(res => res.json()).then(data=>{
      console.log("saved");
      console.log(data.id);
      setRes(data.id);
    })

    // props.onUserAdd(emp);
  };
  // setEmp((prev) => {
  //   return {
  //     ...prev,
  //     eid: prev.eid,
  //     ename: prev.ename,
  //     edesgn: prev.edesgn,
  //     edept: prev.edept,
  //     eplace: prev.eplace,
  //     ephno: prev.ephno,

  //   }
  // });
  // console.log(emp);

  return (
    
    <div className="form">
      {/* //{submitted } */}
      <form className="form" onClick={handleDoSubmit}>
        <table>
          <th>EMPLOYEE DETAILS.</th>
          <tr >
            <td><input type="text" name="eid" value={emp.eid} onChange={handleOnchange} /></td> </tr>
          <tr> <td><input type="text" name="ename" value={emp.ename} onChange={handleOnchange} /></td> </tr>
          <tr> <td><input type="text" name="edesgn" value={emp.edesgn} onChange={handleOnchange} /></td> </tr>
          <tr> <td><input type="text" name="edept" value={emp.edept} onChange={handleOnchange} /></td> </tr>
          <tr> <td><input type="text" name="eplace" value={emp.eplace} onChange={handleOnchange} /></td> </tr>
          <tr> <td><input type="text" name="ephno" value={emp.ephno} onChange={handleOnchange} /></td> </tr>
          <button type="submit" className="hover">SUBMIT</button>
          {/* <EmployeeEx ename={emp.ename} eid={emp.eid} edesgn={emp.edesgn}
            edept={emp.edept} eplace={emp.eplace} ephno={emp.ephno}
          /> */}


        </table>
      </form>
    </div>
  )

  }