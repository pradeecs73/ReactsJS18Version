import React, { useState } from 'react';
import { getData ,add} from './externalModule';

const MyComponent = () => {
  const [data, setData] = useState('pradeep');
  const [adding, setAdding] = useState(100);

  const fetchData = async () => {
    const result = await getData();
    const addresult =  add();
    setData(result);
    setAdding(addresult);
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      <div>{data}</div>
      <div>{adding}</div>
    </div>
  );
};

export default MyComponent;