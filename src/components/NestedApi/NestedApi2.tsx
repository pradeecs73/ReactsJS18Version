import React, { useEffect, useState } from 'react';

const MultipleApiInSeries = () => {
  const [firstData, setFirstData] = useState(null);
  const [secondData, setSecondData] = useState(null);

  useEffect(() => {
    const fetchFirstData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setFirstData(data.slice(1,5));
      } catch (error) {
        console.error('Error fetching first data:', error);
      }
    };

    fetchFirstData();
  }, []);

  useEffect(() => {
    if (firstData) {
      const fetchSecondData = async () => {
        try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
          const data = await response.json();
          setSecondData(data);
        } catch (error) {
          console.error('Error fetching second data:', error);
        }
      };

      fetchSecondData();
    }
  }, [firstData]);

  return (
    <div>
      {firstData && (
        <div>
          <h2>First Data</h2>
          <pre>{JSON.stringify(firstData, null, 2)}</pre>
        </div>
      )}
      {secondData && (
        <div>
          <h2>Second Data</h2>
          <pre>{JSON.stringify(secondData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default MultipleApiInSeries;