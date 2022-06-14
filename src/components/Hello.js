import React from 'react';
import HelloInner from "./HelloInner";

const Hello = (props) => {
    const arr =[<HelloInner/>,<HelloInner/>,<HelloInner/>]
    return (
        <div>
            {arr}
        </div>
    );
};

export default Hello;