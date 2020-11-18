import React, { createContext } from 'react';
import CompA from './CompA';
import CompB from './CompB';
import CompC from './CompC';

const FirstName = createContext();
const LastName = createContext();


const ContextAPI = () => {
    return (
        <>
            <FirstName.Provider value={"Noori"} >
                <LastName.Provider value={"Darain"}> 
                <CompA />
                </LastName.Provider>
            </FirstName.Provider>
           
        </>
    )
};
export default ContextAPI;
export {FirstName ,LastName};