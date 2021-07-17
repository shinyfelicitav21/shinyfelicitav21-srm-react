import logo from './logo.svg';
import './App.css';
import useCounter from "./Components/CounterHook";

import React from "react";


function App() {
  const [count, Increment, Decrement] = useCounter(0, 1);
  
  return (
    <div className="App">
        <h1>{count}</h1>
        <button onClick={Increment}>Increment</button>
        <br/>
        <button onClick={Decrement}>Decrement</button>
    </div>
  );
}

export default App;