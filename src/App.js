import React, {useState, useEffect, useRef} from 'react';
import "./App.css";

function App(){
  const[result, setResult]= useState("");
  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus());

  function Click(e) {
    setResult(result+(e.target.name));
  }

  function backspace() {
    setResult(result.slice(0, -1)); //result.length-1
  }

  function clear() {
    setResult("");
  }

  function calculate() {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  }

  return(
    <div className="container">
    <div className ="calculator">
      <form>
      <input type="text" value={result} ref={inputRef} />
      </form>

      <div className ="keys">
        <button id="clear" onClick={clear}>C</button>
        <button id="backspace" onClick={backspace}>AC</button>
        <button name="%" onClick={Click}>%</button>
        <button name="/" onClick={Click}>/</button>
        <button name="7" onClick={Click}>7</button>
        <button name="8" onClick={Click}>8</button>
        <button name="9" onClick={Click}>9</button>
        <button name="-" onClick={Click}>-</button>
        <button name="4" onClick={Click}>4</button>
        <button name="5" onClick={Click}>5</button>
        <button name="6" onClick={Click}>6</button>
        <button name="*" onClick={Click}>&times;</button>
        <button name="1" onClick={Click}>1</button>
        <button name="2" onClick={Click}>2</button>
        <button name="3" onClick={Click}>3</button>
        <button name="+" onClick={Click}>+</button>
        <button name="0" onClick={Click}>0</button>
        <button name="00" onClick={Click}>00</button>
        <button name="." onClick={Click}>.</button>
        <button id="result" onClick={calculate}>=</button>

      </div>
    </div>
    </div>
  )
}

export default App;