import React, {useRef} from 'react';

const InputEx = () => {

    const printInput = () =>{
        console.log("print input")
        console.log(inputRef.current.value) // 권장 x ->
    }

    const inputRef = useRef()

    return (
        <div>
            <h1>Input</h1>
            <input type="text" ref={inputRef} />
            <button onClick={()=>{printInput()}} type={"button"}>Click</button>
        </div>
    );
};

export default InputEx;