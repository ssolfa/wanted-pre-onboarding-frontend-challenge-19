import { ADD, DELETE, SET_INPUT_VALUE } from './action.js';

const initialState = {
  items: [],
  inputValue: '',
};

const Reducer = (state = initialState, action) => {
  switch (action.type){
    case ADD:
      return{
        ...state,
        items: [...state.items, action.payload],
      }

    case DELETE:
      return{
        ...state,
        items: state.items.filter((_,index) => index !== action.payload)
      }

    case SET_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.payload,
      }

    default:
      return state;
  }
};

export default Reducer;

