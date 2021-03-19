import React, { useState } from 'react';
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };
    
    const randomNumber = () => {
        setCount(Math.floor(Math.random() * 10000))
    };
    
  const reset = () => {
    setCount(0) 
    }

  return (
    <div className='counter'>
      <button onClick={decrement} className="btn-1">-</button>
      <span className="count">{count}</span>
      <button onClick={ increment } className="btn-1">+</button>
      <br />
      <button onClick={randomNumber} className="btn-2">Get random number</button>
      <br/>
      <button onClick={reset} className="btn-2">Reset</button>
    </div>
  );
}

export default Counter;
