import React from 'react';
import { screen,render,waitFor } from '@testing-library/react';
import MyFunctionalComponent from './../ComponentMockingFunctional';
import { act } from 'react-dom/test-utils';

// Mocking MyFunctionalComponent


jest.mock('./../ComponentMockingFunctional', () => {
  return jest.fn().mockImplementation(({ text }) => {
    return (<div data-testid="mocked-component">{text}</div>);
  });
});

describe('MyComponent', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

// Your test cases
it('renders mocked functional component', async () => {
         // Render the component
    const { getByTestId } = render(<MyFunctionalComponent text="MockedText" />);

     //await waitFor(() => expect(screen.getByText(/MockedText/i)).toBeInTheDocument());
  
  });

});