export const ADD = 'ADD';
export const DELETE = 'DELETE';
export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';

export const addItem = (item) => ({
    type: ADD,
    payload: item,
});

export const deleteItem = (index) => ({
    type: DELETE,
    payload: index,
});

export const setInputValue = (value) => ({
    type: SET_INPUT_VALUE,
    payload: value,
});