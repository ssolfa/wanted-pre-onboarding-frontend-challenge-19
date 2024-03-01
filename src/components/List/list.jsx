import React from "react";
import { useSelector } from "react-redux";
import Delete from "./delete";

const List = () => {

    const items = useSelector(state => state.items);

    return(
        <div>
            {items.map((item, index)=> (
                <div key={index}>
                    list{index} <br/>
                    {item}
                    <Delete index={index}/>
                </div>
            ))}
        </div>
    )
}

export default List;

