import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MyComponent from './../ReactJestTesting';

// Mock function for onClick
const mockOnClick = jest.fn();

test('MyComponent renders correctly', () => {
  const { getByText } = render(<MyComponent onClick={mockOnClick} />);
  const button = getByText('Click me');
  expect(button).toBeInTheDocument();
});

test('MyComponent button click triggers onClick', () => {
  const { getByText } = render(<MyComponent onClick={mockOnClick} />);
  const button = getByText('Click me');
  fireEvent.click(button);
  expect(mockOnClick).toHaveBeenCalled();
});

test('adds 1 + 2 to equal 3', () => {
    // Create a mock function
    const mockAdd = jest.fn();
  
    // Define the return value for the mock function
    mockAdd.mockReturnValue(3);
  
    // Call the mock function
    const result = mockAdd(1, 2);
  
    // Assert that the result is as expected
    expect(result).toBe(3);
  
    // You can also assert that the mock function was called with specific arguments
    expect(mockAdd).toHaveBeenCalledWith(1, 2);
  });

  //mockImplementation(), mockResolvedValue(), mockRejectedValue()






  
