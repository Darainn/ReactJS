import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Sdata from './seasondata';
import "./index.css";

function ncard(val){
  console.log(val)
    return(
      <Card 

      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
    );
}

ReactDOM.render(
   <>

    <h1 className="heading_style">List of top 5 Seasons of netflix</h1>



    { Sdata.map(ncard)}

{/* 
    <Card imgsrc={Sdata[1].imgsrc}
      title={Sdata[1].title}
      sname={Sdata[1].sname}
      link={Sdata[1].link}
    />
    <Card imgsrc={Sdata[2].imgsrc}
      title={Sdata[2].title}
      sname={Sdata[2].sname}
      link={Sdata[2].link}
    />
    <Card imgsrc={Sdata[3].imgsrc}
      title={Sdata[3].title}
      sname={Sdata[3].sname}
      link={Sdata[3].link}
    />
    <Card imgsrc={Sdata[4].imgsrc}
      title={Sdata[4].title}
      sname={Sdata[4].sname}
      link={Sdata[4].link} 

    />  */}
    </>, document.getElementById('root') 
 );

// slot game

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Appslot from './Appslot';
// import "./index.css";

// ReactDOM.render(
//     <Appslot /> , document.getElementById('root')
// );

// hooks :
// import React from 'react';
// import ReactDOM from 'react-dom';
// import HooksApp from "./HooksApp";
// import TimeHook from "./TimeHook";
// import DigitalClock from "./DigitalClock"
// import "./index.css";


// ReactDOM.render(<DigitalClock/>
//     , document.getElementById('root'));

//

//EventHandler

// import React from 'react';
// import ReactDOM from 'react-dom';
// import "./index.css";
// import EventHandler from "./EventHandler";

// ReactDOM.render(<EventHandler/> , document.getElementById('root'))

//Forms

// import React from 'react';
// import ReactDOM from 'react-dom'; 

// import Form from "./Form";
// import FORMNINJA from "./FORMNINJA"

// ReactDOM.render(<FORMNINJA/> , document.getElementById ('root'))

//To Do List

// import React from 'react';
// import ReactDOM from 'react-dom';
// import "./index.css"
// import ToDoList from "./ToDoList";

// ReactDOM.render(
//     <ToDoList /> , document.getElementById('root')
// )

//Increment Decrement
// import React from 'react';
// import ReactDOM from 'react-dom';
// import "./index.css"
// import IncAndDec from "./IncAndDec";

// ReactDOM.render(
//     <IncAndDec />, document.getElementById('root')
// )

// import React from 'react';
// import ReactDOM from 'react-dom';
// import "./index.css"
// import List from "./List"
// ReactDOM.render(
//     <List />, document.getElementById('root')
// )

// import React from 'react';
// import ReactDOM from 'react-dom';

// import MaterialToDo from './MaterialToDo';
// import BoostrapChallenge from "./BoostrapChallenge" 
// ReactDOM.render(
//     <BoostrapChallenge />, document.getElementById('root')
// )

// import React from 'react';
// import ReactDOM from 'react-dom';
// import GoogleClone from './GoogleClone';
// import "./googleclone.css"

// ReactDOM.render(<GoogleClone /> ,
//     document.getElementById('root'))


// import React from 'react';
// import ReactDOM from 'react-dom';
// import ContextAPI from "./ContextAPI" 

// ReactDOM.render(<ContextAPI /> ,
//     document.getElementById('root'))

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Effect from "./Effect" 

// ReactDOM.render(<Effect /> ,
//     document.getElementById('root'))


// import React from 'react';
// import ReactDOM from 'react-dom';
// import ChallengeEffect from "./ChallengeEffect" 

// ReactDOM.render(<ChallengeEffect /> ,
//     document.getElementById('root'))


// import React from 'react';
// import ReactDOM from 'react-dom';
// import PokemonAPI from "./PokemonAPI" 
// import PokA from "./PokA";

// ReactDOM.render(<PokA /> ,
//     document.getElementById('root'))


// import React from 'react';
// import ReactDOM from 'react-dom';
// import Router from "./Router"
// import {BrowserRouter} from 'react-router-dom';
// import "./Navbar.css";

// ReactDOM.render(
// <BrowserRouter>
// <Router/>
// </BrowserRouter> ,
//     document.getElementById('root')
// );


// import React from 'react';
// import ReactDOM from 'react-dom';
// import Router404 from "./Router404"
// import {BrowserRouter} from 'react-router-dom';
// import "./Navbar.css";

// ReactDOM.render(
// <BrowserRouter>
// <Router404/>
// </BrowserRouter> ,
//     document.getElementById('root')
// );

// import React from 'react'
// import ReactDOM from 'react-dom';
// import Boostrap5 from './Boostrap5';

// ReactDOM.render(< Boostrap5 /> , document.getElementById('root')
// )