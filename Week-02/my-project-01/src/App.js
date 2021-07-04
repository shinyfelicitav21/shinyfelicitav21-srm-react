import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import LabelClass from './Components/LabelClass';
import StudentFunction from './Components/StudentFunction';
import StudentEx from './Components/StudentEx';


function App() {
  const name = "Shiny Felicita"
  const value = (name);
  const date =  new Date();
  const value1 = date.toString();

  return (
    <div >
     
   <h1 className='h1' >{value} </h1>
   <h1 className='h2'>{value1} </h1>
  
   <hr/>
   <LabelClass/>
  
  <hr/>
  <StudentEx/>
  
    </div>
  );
}

export default App;
