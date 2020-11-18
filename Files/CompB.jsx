import React, { useContext } from 'react';
import CompC from './CompC';
import { FirstName, LastName } from './ContextAPI';

const CompB = () => {
    const fName = useContext(FirstName);
    const lName = useContext(LastName);

    return (
        <h1>
            {fName} {lName} Khanegay Poori
        </h1>
    );
  
}
export default CompB;