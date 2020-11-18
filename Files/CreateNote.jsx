import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {

    const [expand , setExpand] = useState(false);

    const [note , setNote] = useState({
        title :"",
        content:"",
    });

    const inputEvent = (event) => {

        // const value = event.target.value;
        // const name= event.target.name;
         // or
        const {name , value} = event.target;

        setNote((prevData) => {
            return {
                ...prevData,
                [name] : value
             };
        });
    };

    const addEvent = () => {
       
        props.passNote(note);
        setNote({
            title :"",
            content:"",
        });
   
    }

    const expandIt = () => {
        setExpand(true)

    }
    const backNormal = () => {
        setExpand(false)

    }

  return (
      <>
      <div className="main_note" onDoubleClick={backNormal}>
          <form>
            {  expand ?
              <input name="title" type="text" value={note.title} onChange={inputEvent} placeholder="Title" autoComplete='off'  /> : null }
              <textarea name="content" rows="" column="" value={note.content} onChange={inputEvent} placeholder="Write A note...."  onClick={expandIt}  />
              {expand ?
              <Button onClick={addEvent} >
                   <AddIcon  className="plus_sign" > </AddIcon>
              </Button> : null }
          </form>
      </div>
        
      </>
  )
}
export default CreateNote;