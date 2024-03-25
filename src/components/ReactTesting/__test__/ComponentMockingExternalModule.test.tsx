import { render, fireEvent, waitFor } from '@testing-library/react';
import MyComponent from './../ComponentMockingExternalModule';
import * as externalModule from './../externalModule';

// Mocking the getData function
jest.mock('./../externalModule', () => ({
  getData: jest.fn(),
}));

describe('MyComponent', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('fetches data when button is clicked', async () => {
    (externalModule.getData as jest.Mock).mockResolvedValue('Mocked Data'); 
    const { getByText } = render(<MyComponent />);
    
    fireEvent.click(getByText('Fetch Data'));
    
    await waitFor(() => expect(getByText('Mocked Data')).toBeInTheDocument());
  });
});