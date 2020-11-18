import React from 'react';
import "./index.css";
import SlotM from "./SlotMach";

const Appslot = () => {
    return (
        <>
            <h1 className="heading_style">
                📺 Welcome to <span style={{ fontWeight: "bold"} }>  Slot Machine </span> 📺 </h1>
            <div className="slotMachine">
                <SlotM x='😄' y='😄' z='😄' />
                <SlotM x='😂' y='😃' z='😃' />
                <SlotM x='😉' y='😄' z='😄'  />
                <SlotM x='😄' y='😄' z='😄'  />

            </div>
        </>

    )
};

export default Appslot;