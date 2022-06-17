import React, {useState} from 'react';
import CountDisplay3 from "./CountDisplay3";
import CountButtons3 from "./CountButtons3";
import change from "./countService";

const Counter3 = () => {

    const [flag, setFlag] = useState(false)

    change(flag,setFlag)

    return (
        <div>
            <CountDisplay3/>
            <CountButtons3/>
        </div>
    );
};

export default Counter3;