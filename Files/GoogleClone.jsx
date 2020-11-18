import React, { useState } from 'react';
import Header from "./Header"
import Note from './Note'
import Footer from "./Footer"
import CreateNote from "./CreateNote"

const GoogleClone = () => {

    const [addItem, setItem] = useState([]);

    const addNote = (note) => {
        setItem((prevData) => {
            return [...prevData, note];
        });
    };

    const onDelete = (id) => {
        setItem((oldData) =>
            oldData.filter((currdata, indx) => {

            return indx !== id;
            })
        );
    };




    return (
        <>
            <Header />
            <CreateNote passNote={addNote} />

            {  addItem.map((val, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        title={val.title}
                        content={val.content}
                        deleteItem={onDelete}
                    />
                );
            })}

            <Footer />

        </>
    )
}
export default GoogleClone;