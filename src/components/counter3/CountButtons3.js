import React from 'react';
import change from "./countService";

const CountButtons = () => {


    const fn = change()


    return (
        <div>
            <button>+</button>
            <button>-</button>
        </div>
    );
};

export default CountButtons;