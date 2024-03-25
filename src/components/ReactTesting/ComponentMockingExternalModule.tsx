import React, { useState } from 'react';
import { getData } from './externalModule';

const MyComponent = () => {
  const [data, setData] = useState('pradeep');

  const fetchData = async () => {
    const result = await getData();
    setData(result);
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      <div>{data}</div>
    </div>
  );
};

export default MyComponent;