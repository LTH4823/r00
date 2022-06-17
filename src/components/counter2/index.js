import React, {useState} from 'react';
import CountDisplay from "./CountDisplay";
import CountButtons from "./CountButtons";

const initState = {num:0}

const Counter2 = () => {

    const [data, setData] = useState(initState)

    const change = (value) =>{
        console.log("change..........................")
        setData({num:data.num + value})
    }

    return (
        <div>
            <CountDisplay value={data.num}/>
            <CountButtons fn={change}/>
        </div>
    );
};

export default Counter2;