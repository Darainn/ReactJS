import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import MaterialToDoComp from "./MaterialToDoComp";


const MaterialToDo = () => {

    const [item, setItems] = useState("");
    const [newItem, setNewItem] = useState([])

    const itemEvent = (event) => {
        setItems(event.target.value);
    }

    const listOfItems = () => {
        setNewItem((preVal) => {
           return  [...preVal,item]
        });
        setItems("")
    }
    return <>
        <div className="main_div">
            <div className="center_div">
                <br />
                <h1> To Do List </h1>
                <br />
                <input type="text" placeholder="Add Items" onChange={itemEvent} value={item} />
                <Button className="newBtn" onClick={listOfItems} >
                    <AddIcon />
                </Button>
                <br />
                <ol>
                    {newItem.map((val , index) => {
                     return <MaterialToDoComp key={index} text={val} />
                    })}
                    <br />
                </ol>
            </div>
        </div>
    </>;


}

export default MaterialToDo;