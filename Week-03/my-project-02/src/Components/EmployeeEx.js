import React from 'react'

export default function EmployeeEx(props) {

  return (
    <div>
      <form>
        <table>
    
        <tr>
        <label>ID:</label>
        <label>{props.eid}</label></tr>
        <tr>
        <label>Name:</label>
        <label>{props.ename}</label></tr>
        <tr>
        
        <label>Designation:</label>
        <label>{props.edesgn}</label></tr>
        <tr>
        
        <label>Department:</label>
        <label>{props.edept}</label></tr>
        <tr>
        <label>Place:</label>
        <label>{props.eplace}</label></tr>
        <tr>
        <label>Contact Number:</label>
        <label>{props.ephno}</label></tr>
    
        </table>
      </form>
    </div>
  )
}
