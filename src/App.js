import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [target, setTarget] = useState(0);
  

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>
        Counter
      </h1>
      <p>
        count: {count}
      </p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default Counter;clear