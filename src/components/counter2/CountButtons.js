import React from 'react';

const CountButtons = ({fn}) => {

    console.log("Count Btns...............................")

    return (
        <div>
            <button onClick={(event)=>{fn(1)}}>+</button>
            <button onClick={(event)=>{fn(-1)}}>-</button>
        </div>
    );
};

export default CountButtons;