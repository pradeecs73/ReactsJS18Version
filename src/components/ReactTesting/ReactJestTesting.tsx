import React from 'react';

const MyComponent = ({ onClick }:any) => {
  return (
    <button onClick={onClick}>
      Click me
    </button>
  );
};

export default MyComponent;