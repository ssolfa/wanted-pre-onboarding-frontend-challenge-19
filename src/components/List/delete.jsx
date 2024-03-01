import React from "react";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../store/action";

const Delete = ({index}) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteItem(index))
    }

    return(
        <div>
            <button style={{margin:'10px'}}onClick={handleDelete}>
                Delete
            </button>
        </div>
    )
}

export default Delete;