import React, { useState, useMemo } from 'react';

function ExpensiveComponent({ data }:any) {
  // State to hold the count
  const [count, setCount] = useState(0);

  // Expensive calculation function
  const calculateExpensiveValue = (data:any, count:any) => {
    // Some expensive calculation based on data and count
    console.log('Calculating expensive value...');
    return data.length * count;
  };

  // Memoized value
  const memoizedValue = useMemo(() => calculateExpensiveValue(data, count), [data, count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Expensive Value: {memoizedValue}</p>
    </div>
  );
}

function callMemoExample() {
  const data = ['a', 'b', 'c', 'd'];

  return (
    <div>
      <h1>Example using useMemo</h1>
      <ExpensiveComponent data={data} />
    </div>
  );
}

export default callMemoExample;