import { render,screen ,fireEvent,renderHook,waitFor} from '@testing-library/react';
import React from 'react';
import ReactTesting from '../ReactTesting';
import {rest} from 'msw'
import {setupServer} from 'msw/node';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';


const server = setupServer(
    // capture "GET /greeting" requests
    rest.get('/greeting', (req, res, ctx) => {
      // respond using a mocked JSON body
      return res(ctx.json({data: 'chanapatna'}))
    }),
  );

/*beforeEach(() => {
 
})*/
  // establish API mocking before all tests
beforeAll(() => server.listen())
// reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
afterEach(() => server.resetHandlers())
// clean up once the tests are done
afterAll(() => server.close())

describe("Header", () => {
    it('should render same text passed into title prop', () => {
        render(
            <ReactTesting 
              title="todo"
            />
        );
        const h1Element = screen.getByText(/todo/i);
        expect(h1Element).toBeInTheDocument();
        const h1Element1 = screen.queryByText(/todo/i);
        expect(h1Element1).toBeInTheDocument();
    });

    it('should check for label', () => {
        render(
            <ReactTesting 
              title="todo"
            />
        );
        const h1Element = screen.getByLabelText('Username');
        expect(h1Element).toBeInTheDocument();
        const h1Element1 = screen.getByPlaceholderText('Username');
        expect(h1Element1).toBeInTheDocument();
        const h1Element2 = screen.getByRole('spinbutton');
        expect(h1Element2).toBeInTheDocument();
        const h1Element3 = screen.getByTestId('custom-element');
        expect(h1Element3).toBeInTheDocument();
    });

    it('should check for event change of text change', () => {
        render(
            <ReactTesting 
              title="todo"
            />
        );

        const h1Element= screen.getByTestId('city-test');
        fireEvent.change(h1Element, { target: { value: "mysore" } });
        const h1Element2 = screen.getByText(/mysore/i);
        expect(h1Element2).toBeInTheDocument();
    });

    it('should trigger a method on button click', () => {
        render(
            <ReactTesting 
              title="todo"
            />
        );

        const h1Element1= screen.getByTestId('city-test');
        fireEvent.change(h1Element1, { target: { value: "mysore" } });
        const h1Element2= screen.getByTestId('city-textbutton');
        fireEvent.click(h1Element2);
        const h1Element3 = screen.queryByText(/mysore/i);
        expect(h1Element3).not.toBeInTheDocument();
        const h1Element4 = screen.getByText(/bangalore/i);
        expect(h1Element4).toBeInTheDocument();  
    });

    it('should trigger a method on button click for greeting-button', async () => {

        render(
            <ReactTesting 
              title="todo"
            />
        );
       
        act(() =>{
            const h1Element1= screen.getByTestId('greeting-button');
            fireEvent.click(h1Element1);
        })
       
       await waitFor(() => expect(screen.getByText(/chanapatna/i)).toBeInTheDocument());
      // await waitFor(() => expect(screen.getByTestId('api-data')).toHaveTextContent('chanapatna'));
      // await waitFor(() => expect(screen.getByTestId('api-data').textContent).toBe('chanapatna'));

    });


})

