import { render,screen ,fireEvent,renderHook} from '@testing-library/react';
import CustomhookCounter from './../CustomhookTesting';
import { act } from 'react-dom/test-utils';

describe("custom counter", () => {
    it('should increase and decrease counter', () => {
        const {result}=renderHook(CustomhookCounter);
        expect(result.current.count).toBe(0);
    });

    it('should check for increment and decrement counter', () => {
        const {result}=renderHook(CustomhookCounter);
       //act basically update the state before assertion

        act(() =>{
            result.current.increment();
        })
        expect(result.current.count).toBe(1);
        act(() =>{
            result.current.decrement();
        })
        expect(result.current.count).toBe(0);
    });


});