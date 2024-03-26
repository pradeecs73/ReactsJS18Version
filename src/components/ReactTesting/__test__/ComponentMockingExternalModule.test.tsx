import { render, fireEvent, waitFor } from '@testing-library/react';
import MyComponent from './../ComponentMockingExternalModule';
import * as externalModule from './../externalModule';
import { getData ,add} from './../externalModule';

// Mocking the getData function
jest.mock('./../externalModule', () => ({
  getData: jest.fn(),
  add:jest.fn()
}));

describe('MyComponent', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('fetches data when button is clicked', async () => {
    (externalModule.getData as jest.Mock).mockResolvedValue('Mocked Data'); 
    (externalModule.add as jest.Mock).mockReturnValue(400);
    const { getByText } = render(<MyComponent />);
    
    fireEvent.click(getByText('Fetch Data'));
    
    await waitFor(() => expect(getByText('Mocked Data')).toBeInTheDocument());
    await waitFor(() => expect(getByText('400')).toBeInTheDocument());
  });

  it('fetches data when button is clicked', async () => {
    jest.spyOn(externalModule,'getData').mockResolvedValue('Mocked Data'); 
    jest.spyOn(externalModule,'add').mockReturnValue(1000);
    const { getByText } = render(<MyComponent />);
    
    fireEvent.click(getByText('Fetch Data'));
    
    await waitFor(() => expect(getByText('Mocked Data')).toBeInTheDocument());
    await waitFor(() => expect(getByText('1000')).toBeInTheDocument());
  });

});