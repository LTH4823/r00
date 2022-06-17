import React, {useState} from 'react';

const InputEx2 = ({str}) => {

    const [text,setText] = useState(str)

    return (
        <div>
            <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}}/>
        </div>
    );
};

export default InputEx2;