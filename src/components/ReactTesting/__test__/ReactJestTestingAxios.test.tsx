
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import MyComponent1 from './../ReactJestTestingAxios';
import axios ,{AxiosResponse }from 'axios';

jest.mock('axios');  

test('renders data fetched from API', async () => {
  const mockData = 'Mocked data';

  const mockedAxiosGet = axios.get as jest.MockedFunction<typeof axios.get>;
  mockedAxiosGet.mockResolvedValue({ data: mockData } as AxiosResponse<any>); // Manually casting AxiosResponse

  const { getByText } = render(<MyComponent1 />);

  // Wait for the component to render with the mocked data
  await waitFor(() => expect(getByText('Data: Mocked data')).toBeInTheDocument());

});