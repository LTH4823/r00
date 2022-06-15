import React from 'react';
import HelloName from "../HelloName";

const Temp1 = (props) => {

    const msg = props.msg || '전달된 메시지는 없습니다.'
    const children = props.children
    console.log(children)
    console.log(msg)

    let mainComponent

    const headerComponent = Array.isArray(children) ? children[0] : <h1>wow~~~!</h1>

    if (Array.isArray(children)){
        mainComponent = children[1]
    }else {
        mainComponent = children
    }

    return (
        <div>
            <h1>TEMP1....................</h1>
            <h1>{msg}</h1>
            {headerComponent}
            {/*{children[0]}*/}
            <hr/>
            {mainComponent}
            <hr/>
            <h3>END</h3>
        </div>
    );
};

export default Temp1;