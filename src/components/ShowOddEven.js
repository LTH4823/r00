import React from 'react';


export const makeResult = (num) => {
    if (num % 2 ==0){
        return <h2>EVEN</h2>
    }else {
        return <h2>ODD</h2>
    }
}

const ShowOddEven = ({num}) => {

    return (
        <div>
            <h1>Show Odd Even</h1>
            {makeResult(num)}
        </div>
    );
};

export default ShowOddEven;