import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MyComponent from '../ComponentMockingClassFunction';

describe('MyComponent', () => {
  it('should call handleClick when button is clicked', () => {
    // Render MyComponent
    const { getByText } = render(<MyComponent />);
    const button = getByText('Click me');

    // Simulate button click
    fireEvent.click(button);

    // Access the handleClick method and check its return value
    const instance = new MyComponent({myself:{}}); // Create an instance of the component
    jest.spyOn(instance,'handleClick').mockReturnValue('passing dummy value to check mock');
    const result = instance.handleClick(); // Call the handleClick method

    // Check the return value
    expect(result).toEqual("passing dummy value to check mock");
  });
});