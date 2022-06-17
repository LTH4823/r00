import {useState} from "@types/react";

const change = (num, flag, setFlag) => {
    console.log("change.......................")
    if (setFlag){
        console.log(setFlag)
        setFlag(!flag)
    }
}

export default change;