import React from 'react';

const authContext = React.createContext<any>({
  authenticated: false,
  login: () => {},
  receivedData:"mysore",
  shortenData: (str:any) => {
  }
});

export default authContext;
