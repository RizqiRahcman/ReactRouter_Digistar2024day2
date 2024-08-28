import React, { useState } from "react";

const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  const increnmentCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <p>Count: {count}</p>
      <div>
        <button onClick={decrementCount}>Decrement</button>
        <button onClick={increnmentCount}>Increnment</button>
      </div>
    </div>
  );
};

export default Counter;
