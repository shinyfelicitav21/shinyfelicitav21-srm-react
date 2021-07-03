import logo from './logo.svg';
import './App.css';

import { Formik } from "formik";
import FormicYup from './Components/FormicYup ';


 import React, { Component } from 'react'
 
 export default class App extends Component {
   render() {
     return (
       <div>
         <FormicYup/>
         <FormicEx/>
       </div>
     );
   }
 }
