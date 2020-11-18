import React from 'react';
import { useParams, useLocation, useHistory } from "react-router-dom";


// const User = ({match}) => {
//     return  <h1> I am a User { match.params.name } Page</h1>

// };


const User = ({ }) => {
    const { name, lname } = useParams();
    const location = useLocation();
    const history = useHistory();
    console.log(history);
    return (
        <>
            <h1> I am a User {name} {lname} Page</h1>
            <p> My current location is {location.pathname} </p>
            {location.pathname === `/user/vinod/thapa` ?
                <button onClick={() => history.goBack()}> Click Me </button> : null }
                
            
        </>
    )

};
export default User;