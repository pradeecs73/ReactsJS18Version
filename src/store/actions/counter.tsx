import * as actionTypes from './actionsconstants';

export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    };
};

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    };
};

export const add = (value:any) => {
    return {
        type: actionTypes.ADD,
        val: value
    };
};

export const subtract = (value :any) => {
    return {
        type: actionTypes.SUBTRACT,
        val: value
    };
};