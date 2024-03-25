import React from 'react';

class MyComponent extends React.Component {
  constructor(props:any)
  {
    super(props);
  }

  handleClick() {
    // Some functionality you want to test
    return "Hello from handleClick";
  }

  render() {
    return (
      <button onClick={this.handleClick}>Click me</button>
    );
  }
}

export default MyComponent;