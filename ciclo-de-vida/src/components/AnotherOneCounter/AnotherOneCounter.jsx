import React, { useState } from "react";

export const AnotherOneCounter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Another One Counter</h1>
      <h2>{count}</h2>
      <button
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
    </div>
  )
}