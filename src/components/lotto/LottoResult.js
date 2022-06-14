import React from 'react';
import LottoHeader from "./LottoHeader";

const LottoResult = (num) => {

    const arr = [1, 2, 3, 4, 5, 6]

    return (
        <ul>
            {makeList(arr)}
        </ul>
    );
};

const makeList = (arr) => {
    if (!arr) {
        return <li>배열이 비었음</li>
    }
    return arr.map(num => <li>{num}</li>)
}


export default LottoResult;