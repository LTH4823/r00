import React from 'react';

const makeBold = (str) => <b>{str}</b>

const HelloName = ({v1,v2}) => {

    console.log("-----------------------")
    console.log(v1,v2)

    const username = v1 + v2

    return (
        <div>
            <h1>{username}</h1>
            <h2>{makeBold(username)}</h2>
        </div>
    );
};

export default HelloName;