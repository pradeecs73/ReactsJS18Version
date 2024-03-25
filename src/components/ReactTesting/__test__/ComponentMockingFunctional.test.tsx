import React from 'react';
import { render,waitFor } from '@testing-library/react';
import MyFunctionalComponent from './../ComponentMockingFunctional';

// Mocking MyFunctionalComponent
jest.mock('./../ComponentMockingFunctional', () => {
  return jest.fn().mockImplementation(({ text }) => {
    return (<div data-testid="mocked-component">{text}</div>);
  });
});

// Your test cases
test('renders mocked functional component', async () => {
    // Render the component
    render(<MyFunctionalComponent text="Mocked Text" />);
  
    // Wait for the component to appear
   /* await waitFor(() => {
      expect(document.querySelector('[data-testid="mocked-component"]')).toBeInTheDocument();
    });*/
  
    // Once the component is rendered, proceed with the rest of the test
   // const mockedComponent = document.querySelector('[data-testid="mocked-component"]');
   // expect(mockedComponent).toBeInTheDocument(); // Ensure the component is in the document
    //expect(mockedComponent?.textContent).toBe('Mocked Text'); // Check its content
  });