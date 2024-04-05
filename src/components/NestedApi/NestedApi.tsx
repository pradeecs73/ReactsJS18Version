import React, { useEffect, useState } from 'react';

const MultipleApiIntegration = () => {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response1, response2] = await Promise.all([
          fetch('https://jsonplaceholder.typicode.com/posts'),
          fetch('https://jsonplaceholder.typicode.com/posts')
        ]);
        
        const data1 = await response1.json();
        const data2 = await response2.json();

        setData1(data1.slice(1,5));
        setData2(data2.slice(1,5));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data1 && (
        <div>
          <h2>Data 1</h2>
          <pre>{JSON.stringify(data1, null, 2)}</pre>
        </div>
      )}
      {data2 && (
        <div>
          <h2>Data 2</h2>
          <pre>{JSON.stringify(data2, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default MultipleApiIntegration;
