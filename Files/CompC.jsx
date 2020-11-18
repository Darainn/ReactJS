import React from 'react';
import { FirstName, LastName } from './ContextAPI';

const CompC = () => {
    return (
        <>
        <FirstName.Consumer >
            { (fName) => {
                return (
                    <LastName.Consumer >
                        { (lName) => {
                            return (
                                <h1>
                                    {fName} {lName} Khanegay Poori
                                </h1>
                            );
                        }}
                    </LastName.Consumer>
                );
            }}
        </FirstName.Consumer>
        </>
    )
};

export default CompC;