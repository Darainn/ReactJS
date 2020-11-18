import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokA = () => {

    const [selectNum, setSelectNum] = useState("");
    const [name , setName]=useState();
    const [moves , setMove]=useState();



    useEffect(() => {
        // alert("hi")
        async function getData() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${selectNum} `);
            setName(res.data.name);
            //  setMove(res.data.moves.length);
        }

        getData();
    });

    return (
        <>
            <h1> You choose  <span style={{ color: "blue" }} > {selectNum} value  </span>  </h1>
            <h1> My name is <span style={{ color: "red" }} > {name} </span> </h1>
            <h1> I have <span style={{ color: "yellow" }} >  {moves} moves </span>  </h1>
            <select value={selectNum} onChange={(event) => {
                setSelectNum(event.target.value);
            }} >
                <option value='1' > 1 </option>
                <option value='25' > 25 </option>
                <option value='3' > 3 </option>
                <option value='4' > 4 </option>
                <option value='6' > 6 </option>
            </select>
        </>
    )
}
export default PokA;