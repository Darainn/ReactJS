import React from 'react';
import { useState } from 'react';

const FORMNINJA = () => {

    const [fullname, setFullName] = useState({
        fName: "",
        lName: "",
        email: "",
        phone: "",
        qua:"",
    });


    const inputEvent = (event) => {

        console.log(event.target.value);
        console.log(event.target.name);

        // const value = event.target.value;
        // const name = event.target.name;

        const { value, name } = event.target;

        setFullName((preValue) => {
            console.log(preValue);

            return {
                ...preValue,
                [name]: value,
            };
            // if (name === "fName") {
            //     return {
            //         fName: value,
            //         lName: preValue.lName,
            //         email:preValue.email,
            //         phone:preValue.phone,
            //     };
            // }
            // else if (name === "lName") {
            //     return {
            //         fName: preValue.fName,
            //         lName: value,
            //         email:preValue.email,
            //         phone:preValue.phone,
            //     };
            // } else if (name === "email") {
            //     return {
            //         fName: preValue.fName,
            //         lName: preValue.lName,
            //         email:value,
            //         phone:preValue.phone,
            //     };
            // } else if (name === "phone") {
            //     return {
            //         fName: preValue.fName,
            //         lName: preValue.lName,
            //         email:preValue.email,
            //         phone:value,
            //     };
            // }
        });


    };


    const onSubmit = (event) => {
        event.preventDefault();
        alert('Form Submitted')

    }

    return (
        <>
            <div>
                <form onSubmit={onSubmit}>
                    <div>
                        <h1>Hello {fullname.fName} {fullname.lName}</h1>
                        <p>{fullname.email}</p>
                        <p>{fullname.phone}</p>
                        <p>{fullname.qua}</p>
                        <input type='text' placeholder='Enter Your First Name' value={fullname.fName} name='fName' onChange={inputEvent}></input>
                        <br />
                        <input type='text' placeholder='Enter Your Last Name' value={fullname.lName} name='lName' onChange={inputEvent}></input>
                        <br />
                        <input type='email' placeholder='Enter Your Email' value={fullname.email} name='email' onChange={inputEvent}></input>
                        <br />
                        <input type='number' placeholder='Enter Your Phone' value={fullname.phone} name='phone' onChange={inputEvent}></input>
                        <br/>
                        <input type='text' placeholder='Enter Your Qualification' value={fullname.qua} name='qua' onChange={inputEvent}></input>
                        <br/>
                        <button onClick={onSubmit} type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
};
export default FORMNINJA;