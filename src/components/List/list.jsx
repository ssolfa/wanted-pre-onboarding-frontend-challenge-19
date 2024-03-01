import React from "react";
import { useSelector } from "react-redux";
import Delete from "./delete";
import { Container, ListContainer } from "../../styles/styles";

const List = () => {

    const items = useSelector(state => state.items);

    return(
        <div>
            {items.map((item, index)=> (
                <Container key={index}>
                    List{index+1}
                    <ListContainer/>
                    <div style={{ flexGrow: 1, wordBreak: 'break-all' }}>{item}</div>
                    <Delete index={index}/>
                </Container>
            ))}
        </div>
    )
}

export default List;

