import React, { Component } from 'react'

const LabelClass = class extends Component {
    
    render() {
        
        const label = "My First React Component.";
        const value=(label);
      
    const cond="Condition:Warm";
     const temp ="Temperature:75.6F";
    const humidity="Humidity:Low";
        
        return (
            <div className="class" >
                 
                 <h1 className="weather">Weather Report.</h1>
                 <h2>{cond}</h2>
                 <h2>{temp}</h2>
                 <h2>{humidity}</h2>
                 </div>
           
        )
    }
}

export default LabelClass;