import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        setData(error.data)
      });
  }, []);

  return (
    <div>
      {data ? <p>Data: {data}</p> : <p>Loading...</p>}
    </div>
  );
}

export default MyComponent;