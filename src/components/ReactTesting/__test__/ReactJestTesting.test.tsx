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



// Now you can use fetchDataMock in your tests, and it will behave as specified in the mock implementation:
test('fetchData returns mocked data', async () => {

     // Suppose you have a function to be tested, like this:
    /*function fetchData(url) {
     // Some async operation to fetch data from the provided URL
     }*/

    const fetchDataMock = jest.fn();

    // Now you can specify what the mock function should do when it's called using mockImplementation():
    fetchDataMock.mockImplementation((url) => {
    return Promise.resolve({ data: 'Mocked data' });
    });

    const data = await fetchDataMock('https://example.com/data');
    expect(data).toEqual({ data: 'Mocked data' });
});


/*function fetchData() {
    // Some async operation
  }
  
  // You can mock it like this:
  jest.mock('./path/to/fetchData'); // Adjust the path as needed
  
  // Now, let's mock the function to return resolved data
  const mockedFetchData = require('./path/to/fetchData');
  mockedFetchData.mockResolvedValue('mocked data');
  
  // Now, when you call fetchData, it will return the resolved data
  fetchData().then(data => {
    console.log(data); // This will log 'mocked data'
  });*/

  
  // Jest test
  test('fetchData rejects with an error message', () => {

      // Suppose you have a function to test, e.g., fetchData
      /*function fetchData() {
            return new Promise((resolve, reject) => {
            // Some asynchronous operation
            setTimeout(() => {
                reject('Error: Unable to fetch data');
            }, 1000);
            });
         }*/


    // Mocking the fetchData function to return a rejected promise
    const mockedFetchData = jest.fn().mockRejectedValue('Error: Unable to fetch data');
  
    // Your test logic here, where you can use mockedFetchData instead of the actual fetchData function
    // For example:
    return expect(mockedFetchData()).rejects.toMatch('Error: Unable to fetch data');
  });