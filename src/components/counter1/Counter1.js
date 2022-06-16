import React, {useState} from 'react';

const obj = {num:1}

const Counter1 = () => {

    // console.log(useState)
    console.log("=========================================")

    const [count, setCount] = useState(obj)

    const change = (value) => {
        console.log("change: " , obj)
        obj.num+= value
        setCount({...obj})
    }

    return (
        <div>
            <h1>{count.num}</h1>
            <div>
                <button onClick={(event)=>{change(1)}}>+</button>
                <button onClick={(event)=>{change(-1)}}>-</button>
            </div>
        </div>
    );
};

export default Counter1;