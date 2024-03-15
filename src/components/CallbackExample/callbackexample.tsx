import React, { useState, useCallback } from 'react';

const useCallbackExample = () => {
  const [count, setCount] = useState(0);

  // Define a callback function using useCallback
  const handleClick = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []); // Dependency array, if empty, the function will not be recreated on re-renders

  return (
    <div>
      <p>Count: {count}</p>
      {/* Pass the callback function to child component */}
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

const ChildComponent = ({ onClick }:any) => {
  return (
    <button onClick={onClick}>
      Click Me
    </button>
  );
};

export default useCallbackExample;