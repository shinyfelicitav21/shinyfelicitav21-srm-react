import React from 'react'

export default function StudentFunction(props) {

  return (
    <div>
      <form>
        <table>
        
        <tr>
        <label>ID:</label>
        <label>{props.sid}</label></tr>
        <tr>
        <label>Name:</label>
        <label>{props.sname}</label></tr>
        <tr>
        <label>Place:</label>
        <label>{props.splace}</label></tr>
        <tr>
        <label>Mark:</label>
        <label>{props.smark}</label></tr>
        
        </table>
      </form>
    </div>
  )
}
