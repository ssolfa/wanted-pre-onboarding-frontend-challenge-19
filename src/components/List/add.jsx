import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, setInputValue } from "../../store/action";

const Add = () => {
    const dispatch = useDispatch();
    const inputValue = useSelector(state => state.inputValue);

    const handleAdd = () => {
        if (inputValue.trim() !== '') {
        dispatch(addItem(inputValue));
        dispatch(setInputValue(''));
        }
    };

    const handleChange = (e) => {
        dispatch({ type: 'SET_INPUT_VALUE', payload: e.target.value });
    };

    return (
        <div>
        <input 
            type="text" 
            value={inputValue} 
            onChange={handleChange}
            placeholder="할 일을 입력하세요" 
        />
        <button onClick={handleAdd}>Add</button>
        </div>
    )
}

export default Add;