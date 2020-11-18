import React from 'react';
import { useState } from 'react';

const Form = () => {

    const [name, setName] = useState("");
    const [fullName, setFullName] = useState();
    const [ PassName , setPassName] = useState();
    const [ fullPassName , setFullPassName] = useState(); 
       
    const inputEvent = (event) => {

        console.log(event.target.value);
        setName(event.target.value);

    }
    const PassEvent = (event) => {
        setPassName(event.target.value);
    }

    const onSubmit = (event) => 
    { 
        event.preventDefault();
        setFullName(name);
        setFullPassName(PassName);
    }

    return (
        <>
            <div>
                <form onSubmit={onSubmit}>
                    <div>
                        <h1>Hello {fullName} {fullPassName}</h1>
                        <input type='text' placeholder='Enter Your Name' value={name} onChange={inputEvent}></input>
                        <br/>
                         <input type='text' placeholder='Enter Your Password' value={PassName} onChange={PassEvent}></input> 

                        <button onClick={onSubmit} type='submit'>Click Me</button>
                    </div>
                </form>
            </div>
        </>
    )
};
export default Form;